# SQL Query Optimization Interview Answer

## Strong answer

When I optimize a SQL query, I start by checking the execution plan to understand where the database is spending time. Then I look for common issues like missing indexes, unnecessary full table scans, inefficient joins, and returning more data than needed. I usually focus on indexing columns used in `WHERE`, `JOIN`, and `ORDER BY` clauses, rewriting predicates so indexes can be used efficiently, and avoiding `SELECT *` when only a few columns are actually needed. If the query is still slow, I review table design, statistics, and whether aggregation or sorting can be reduced. My general approach is to measure first, make targeted changes, and then verify that performance actually improves.

## Short version

I optimize SQL queries by first checking the execution plan, then improving indexes, reducing unnecessary data reads, making joins more efficient, and rewriting the query so the database can use indexes properly. I always measure before and after to confirm the improvement.

## Simple talking points

- Check the execution plan first
- Add or improve indexes on filter and join columns
- Avoid full table scans when possible
- Return only the columns and rows you need
- Make sure joins are efficient
- Measure performance before and after changes
