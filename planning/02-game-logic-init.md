# Task 02 — Game Logic: Grid Initialization

> **ENGINEERING TASK** — не user story. Чистые функции без UI. Ценность доставляется через задачи 06–07.

## Goal
Написать чистую функцию инициализации игры в `src/game/`.

## What to do
- Создать `src/game/init.ts`
- Реализовать `createGrid(): number[][]` — 5×5 массив случайных чисел 1–9
- Реализовать `hasValidPairs(grid: number[][]): boolean` — проверяет есть ли хотя бы 3 соседние пары с разностью 1
- Реализовать `initGame()` — генерирует грид до тех пор пока `hasValidPairs` не вернёт `true`
- Реализовать `getMaxValue(grid: number[][]): number` — возвращает max числа на поле

## E2E test
1. Вызвать `initGame()` в консоли браузера (временно через `window`) — возвращает массив 5×5
2. Все значения в диапазоне 1–9
3. На гриде всегда есть минимум 3 валидные пары (проверить `hasValidPairs` = true)
4. `getMaxValue` возвращает правильное максимальное число
