(function () {
  const qaSources = Array.isArray(window.QA_DATA) ? window.QA_DATA : [];
  const cards = flattenQaData(qaSources);
  const storageKey = "interview-flashcards-progress-v1";
  const state = {
    index: 0,
    flipped: false,
    source: "all",
    mode: "all",
    query: "",
    order: cards.map((_, index) => index),
    progress: loadProgress(),
  };

  const el = {
    cardCount: document.getElementById("cardCount"),
    searchInput: document.getElementById("searchInput"),
    sourceSelect: document.getElementById("sourceSelect"),
    modeSelect: document.getElementById("modeSelect"),
    knownCount: document.getElementById("knownCount"),
    reviewCount: document.getElementById("reviewCount"),
    starredCount: document.getElementById("starredCount"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    resetBtn: document.getElementById("resetBtn"),
    sourceLabel: document.getElementById("sourceLabel"),
    starBtn: document.getElementById("starBtn"),
    cardButton: document.getElementById("cardButton"),
    sideLabel: document.getElementById("sideLabel"),
    cardText: document.getElementById("cardText"),
    againBtn: document.getElementById("againBtn"),
    knownBtn: document.getElementById("knownBtn"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    positionLabel: document.getElementById("positionLabel"),
  };

  function flattenQaData(sources) {
    return sources.flatMap((source) =>
      (source.questions || []).map((card) => ({
        ...card,
        source: source.sourcePath || source.fileName,
        fileName: source.fileName,
        sourceTitle: source.title,
      })),
    );
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(state.progress));
  }

  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  function renderMarkdown(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function currentFiltered() {
    const query = normalize(state.query);
    return state.order
      .map((cardIndex) => cards[cardIndex])
      .filter((card) => {
        const progress = state.progress[card.id] || {};
        const matchesSource = state.source === "all" || card.source === state.source;
        const matchesMode =
          state.mode === "all" ||
          (state.mode === "due" && progress.status !== "known") ||
          (state.mode === "starred" && progress.starred);
        const haystack = normalize(`${card.question} ${card.answer} ${card.source} ${card.fileName} ${card.topic}`);
        return matchesSource && matchesMode && (!query || haystack.includes(query));
      });
  }

  function clampIndex(list) {
    if (!list.length) {
      state.index = 0;
      return;
    }
    state.index = Math.max(0, Math.min(state.index, list.length - 1));
  }

  function renderSources() {
    const sources = [...new Map(cards.map((card) => [card.source, card.fileName || card.sourceTitle || card.source])).entries()]
      .sort((a, b) => a[1].localeCompare(b[1]));
    el.sourceSelect.innerHTML = "";
    el.sourceSelect.append(new Option("全部资料", "all"));
    sources.forEach(([source, label]) => el.sourceSelect.append(new Option(label.replace(/\.md$/i, ""), source)));
  }

  function renderStats() {
    let known = 0;
    let starred = 0;
    cards.forEach((card) => {
      const item = state.progress[card.id] || {};
      if (item.status === "known") known += 1;
      if (item.starred) starred += 1;
    });
    el.knownCount.textContent = known;
    el.reviewCount.textContent = Math.max(cards.length - known, 0);
    el.starredCount.textContent = starred;
    el.cardCount.textContent = `${cards.length} 张卡片`;
  }

  function renderCard() {
    const list = currentFiltered();
    clampIndex(list);
    renderStats();

    if (!list.length) {
      el.sourceLabel.textContent = "No match";
      el.sideLabel.textContent = "Empty";
      el.cardText.textContent = cards.length
        ? "换一个来源、模式或搜索关键词试试。"
        : "没有加载到数据。请确认 qa-data.js 已生成并在 app.js 之前加载。";
      el.positionLabel.textContent = "0 / 0";
      el.starBtn.textContent = "☆";
      el.prevBtn.disabled = true;
      el.nextBtn.disabled = true;
      el.knownBtn.disabled = true;
      el.againBtn.disabled = true;
      return;
    }

    const card = list[state.index];
    const progress = state.progress[card.id] || {};
    el.sourceLabel.textContent = (card.fileName || card.sourceTitle || card.source).replace(/\.md$/i, "");
    el.sideLabel.textContent = state.flipped ? "Answer" : "Question";
    el.cardText.innerHTML = renderMarkdown(state.flipped ? card.answer : card.question);
    el.positionLabel.textContent = `${state.index + 1} / ${list.length}`;
    el.starBtn.textContent = progress.starred ? "★" : "☆";
    el.prevBtn.disabled = state.index === 0;
    el.nextBtn.disabled = state.index === list.length - 1;
    el.knownBtn.disabled = false;
    el.againBtn.disabled = false;
  }

  function move(delta) {
    const list = currentFiltered();
    if (!list.length) return;
    state.index = Math.max(0, Math.min(state.index + delta, list.length - 1));
    state.flipped = false;
    renderCard();
  }

  function mark(status) {
    const list = currentFiltered();
    const card = list[state.index];
    if (!card) return;
    state.progress[card.id] = {
      ...(state.progress[card.id] || {}),
      status,
      updatedAt: new Date().toISOString(),
    };
    saveProgress();
    move(1);
  }

  function shuffle() {
    for (let i = state.order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
    }
    state.index = 0;
    state.flipped = false;
    renderCard();
  }

  function resetProgress() {
    if (!confirm("确定清空本地学习进度吗？")) return;
    state.progress = {};
    saveProgress();
    renderCard();
  }

  function toggleStar() {
    const list = currentFiltered();
    const card = list[state.index];
    if (!card) return;
    const progress = state.progress[card.id] || {};
    state.progress[card.id] = { ...progress, starred: !progress.starred };
    saveProgress();
    renderCard();
  }

  el.cardButton.addEventListener("click", () => {
    state.flipped = !state.flipped;
    renderCard();
  });
  el.prevBtn.addEventListener("click", () => move(-1));
  el.nextBtn.addEventListener("click", () => move(1));
  el.knownBtn.addEventListener("click", () => mark("known"));
  el.againBtn.addEventListener("click", () => mark("review"));
  el.starBtn.addEventListener("click", toggleStar);
  el.shuffleBtn.addEventListener("click", shuffle);
  el.resetBtn.addEventListener("click", resetProgress);
  el.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.index = 0;
    state.flipped = false;
    renderCard();
  });
  el.sourceSelect.addEventListener("change", (event) => {
    state.source = event.target.value;
    state.index = 0;
    state.flipped = false;
    renderCard();
  });
  el.modeSelect.addEventListener("change", (event) => {
    state.mode = event.target.value;
    state.index = 0;
    state.flipped = false;
    renderCard();
  });
  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
    if (event.key === " ") {
      event.preventDefault();
      state.flipped = !state.flipped;
      renderCard();
    }
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });

  renderSources();
  renderCard();
})();
