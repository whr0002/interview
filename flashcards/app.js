(function () {
  const qaSources = Array.isArray(window.QA_DATA) ? window.QA_DATA : [];
  const cards = flattenQaData(qaSources);
  const storageKey = "interview-flashcards-progress-v2";
  const legacyStorageKeys = ["interview-flashcards-progress-v1"];
  const state = {
    index: 0,
    flipped: false,
    showBoth: false,
    source: "all",
    mode: "all",
    query: "",
    order: cards.map((_, index) => index),
    progress: loadProgress(),
    storageAvailable: true,
  };

  const el = {
    cardCount: document.getElementById("cardCount"),
    searchInput: document.getElementById("searchInput"),
    sourceSelect: document.getElementById("sourceSelect"),
    modeSelect: document.getElementById("modeSelect"),
    showBothToggle: document.getElementById("showBothToggle"),
    knownCount: document.getElementById("knownCount"),
    reviewCount: document.getElementById("reviewCount"),
    starredCount: document.getElementById("starredCount"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    resetBtn: document.getElementById("resetBtn"),
    sourceLabel: document.getElementById("sourceLabel"),
    filterLabel: document.getElementById("filterLabel"),
    storageStatus: document.getElementById("storageStatus"),
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
        category: source.category,
      })),
    );
  }

  function readProgress(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch {
      return {};
    }
  }

  function loadProgress() {
    const progress = readProgress(storageKey);

    for (const key of legacyStorageKeys) {
      const legacyProgress = readProgress(key);
      cards.forEach((card) => {
        if (!progress[card.id] && card.legacyId && legacyProgress[card.legacyId]) {
          progress[card.id] = legacyProgress[card.legacyId];
        }
      });
    }

    return progress;
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state.progress));
      state.storageAvailable = true;
    } catch {
      state.storageAvailable = false;
    }
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

  function renderQuestionAndAnswer(card) {
    return `
      <span class="qa-pair">
        <span class="qa-heading">Question</span>
        <span class="qa-body">${renderMarkdown(card.question)}</span>
        <span class="qa-heading">Answer</span>
        <span class="qa-body">${renderMarkdown(card.answer)}</span>
      </span>
    `;
  }

  function sourceCards() {
    return cards.filter((card) => state.source === "all" || card.source === state.source);
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
          (state.mode === "unmastered" && progress.status === "review") ||
          (state.mode === "known" && progress.status === "known") ||
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
    const scopedCards = sourceCards();
    let known = 0;
    let review = 0;
    let starred = 0;
    scopedCards.forEach((card) => {
      const item = state.progress[card.id] || {};
      if (item.status === "known") known += 1;
      if (item.status === "review") review += 1;
      if (item.starred) starred += 1;
    });

    el.knownCount.textContent = known;
    el.reviewCount.textContent = review;
    el.starredCount.textContent = starred;
    el.cardCount.textContent = `${cards.length} 张卡片`;
    el.storageStatus.textContent = state.storageAvailable ? "进度已保存在本机" : "本机存储不可用，本次进度不会保存";
  }

  function renderFilterLabel(list) {
    const sourceName =
      state.source === "all"
        ? "全部资料"
        : (cards.find((card) => card.source === state.source)?.fileName || state.source).replace(/\.md$/i, "");
    const modeName = el.modeSelect.options[el.modeSelect.selectedIndex]?.text || "全部卡片";
    el.filterLabel.textContent = `${sourceName} / ${modeName} / 当前 ${list.length} 张`;
  }

  function renderCard() {
    const list = currentFiltered();
    clampIndex(list);
    renderStats();
    renderFilterLabel(list);

    if (!list.length) {
      el.sourceLabel.textContent = "No match";
      el.sideLabel.textContent = "Empty";
      el.cardText.textContent = cards.length
        ? "换一个资料来源、练习模式或搜索关键词试试。"
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
    el.sideLabel.textContent = state.showBoth ? "Question + Answer" : state.flipped ? "Answer" : "Question";
    el.cardText.innerHTML = state.showBoth
      ? renderQuestionAndAnswer(card)
      : renderMarkdown(state.flipped ? card.answer : card.question);
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
    const previousIndex = state.index;
    state.progress[card.id] = {
      ...(state.progress[card.id] || {}),
      status,
      updatedAt: new Date().toISOString(),
    };
    saveProgress();

    const nextList = currentFiltered();
    state.flipped = false;
    if (!nextList.length) {
      state.index = 0;
      renderCard();
      return;
    }

    const cardStillVisible = nextList.some((item) => item.id === card.id);
    state.index = cardStillVisible
      ? Math.min(previousIndex + 1, nextList.length - 1)
      : Math.min(previousIndex, nextList.length - 1);
    renderCard();
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
    const message =
      state.source === "all"
        ? "确定清空所有本地学习进度吗？"
        : "确定只清空当前资料集的学习进度吗？";
    if (!confirm(message)) return;

    if (state.source === "all") {
      state.progress = {};
    } else {
      sourceCards().forEach((card) => {
        delete state.progress[card.id];
      });
    }

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
    if (state.showBoth) return;
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
  el.showBothToggle.addEventListener("change", (event) => {
    state.showBoth = event.target.checked;
    state.flipped = false;
    renderCard();
  });
  document.addEventListener("keydown", (event) => {
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
    if (event.key === " ") {
      event.preventDefault();
      if (state.showBoth) return;
      state.flipped = !state.flipped;
      renderCard();
    }
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });

  saveProgress();
  renderSources();
  renderCard();
})();
