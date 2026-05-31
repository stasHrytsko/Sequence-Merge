# Task 04 — Game Logic: spawnValue Function

> **ENGINEERING TASK** — не user story. Чистая функция. Ценность доставляется через Task 10 (UI merge interaction).

## Goal
Реализовать функцию спавна нового числа после мерджа.

## What to do
- Создать `src/game/spawn.ts`
- Реализовать `spawnValue(currentMax: number): number` по формуле из BRD:
  - 90%: `Math.max(1, currentMax - 1)`
  - 6%: `Math.max(1, currentMax - 2)`
  - 4%: random 1–4 (мусор)
- Функция никогда не возвращает число `>= currentMax`

## E2E test
1. Вызвать `spawnValue(10)` 100 раз → ~90 результатов = 9, ~6 = 8, ~4 в диапазоне 1–4
2. Вызвать `spawnValue(1)` → всегда возвращает 1 (не уходит в минус)
3. Вызвать `spawnValue(2)` → никогда не возвращает `>= 2`
4. Результат всегда `>= 1`
