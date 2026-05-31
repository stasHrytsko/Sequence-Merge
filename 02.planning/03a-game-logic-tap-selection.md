# Task 03a — Game Logic: Tap Selection & Navigation

> **ENGINEERING TASK** — split от Task 03 по паттерну "Workflow Steps".
> Оригинальная Task 03 разбита на 03a (selection) и 03b (merge) — 5 сценариев тапа слишком большой объём для одной задачи.

## Why split
Оригинальный Task 03 имел 5 независимых сценариев с разными "When/Then" условиями — классический признак необходимости splitting (паттерн 4: Acceptance Criteria Complexity).

## Goal
Реализовать логику выбора и переключения клеток — первые 3 сценария тапа.

## What to do
- Создать `src/game/types.ts` с типами `GamePhase`, `GameState`
  - `GamePhase = 'playing' | 'finished' | 'won'` — без `'idle'`; `'won'` = достигнуто 99
- Создать `src/game/tap.ts`
- Реализовать `handleTap(state, row, col): GameState` — только сценарии выбора:
  1. `selected === null` → `selected = [r, c]`
  2. `[r,c] === selected` → `selected = null` (deselect)
  3. Не сосед (`|r1-r2| + |c1-c2| !== 1`) → `selected = [r, c]` (switch)

## E2E test
1. Тап на пустом selected → `selected = [r, c]`
2. Повторный тап на ту же клетку → `selected = null`
3. Тап на клетку которая не является соседом → selected переключился на новую
4. Все три сценария возвращают новый immutable state (не мутируют исходный)
