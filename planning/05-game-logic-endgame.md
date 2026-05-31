# Task 05 — Game Logic: checkNoValidMoves + bestScore

> **ENGINEERING TASK** — не user story. Чистые функции. Ценность доставляется через Tasks 15 и 16.

## Goal
Реализовать проверку конца игры и сохранение рекорда.

## What to do
- Создать `src/game/endgame.ts`
- Реализовать `hasValidMoves(grid: number[][]): boolean` — проходит по всем клеткам, проверяет 4 соседей
- Реализовать `checkGameOver(state: GameState): GameState`:
  - Если `!hasValidMoves` → `phase = 'finished'`
  - Если `currentMax > bestScore` → обновить `bestScore` + `localStorage.setItem('bestScore', ...)`
- Реализовать `loadBestScore(): number` — читает из `localStorage`, возвращает 0 если нет

## E2E test
1. Передать грид где нет ни одной пары с разностью 1 → `phase = 'finished'`
2. Передать грид где есть хотя бы одна такая пара → `phase` остаётся `'playing'`
3. Установить `currentMax = 15`, `bestScore = 10` → после `checkGameOver` в localStorage значение `15`
4. Обновить страницу → `loadBestScore()` возвращает `15`
