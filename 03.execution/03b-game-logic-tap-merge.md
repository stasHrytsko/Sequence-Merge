# Task 03b — Game Logic: Tap Merge & Invalid Validation

> **ENGINEERING TASK** — split від Task 03 по паттерну "Workflow Steps".
> Зависит от Task 03a (типы и базовая структура `handleTap` должны существовать).

## Goal
Реализовать логику валидации и выполнения мерджа — сценарии 4 и 5 тапа.

## What to do
- Расширить `handleTap` в `src/game/tap.ts`:
  4. Сосед, но `|a - b| !== 1` → `invalidFlash = [r, c]`, `selected = null`
  5. Валидный мерж → `grid[targetCell] = max(a,b) + 1`, вызов spawn в sourceCell, `currentMax = max(grid)`, `selected = null`
- `targetCell` = клетка с большим числом
- `sourceCell` = клетка с меньшим числом

## E2E test
1. Тап на соседа с разностью 2 → `invalidFlash = [r,c]`, `selected = null`
2. Тап на соседа с разностью 1 → `targetCell.value = max(a,b) + 1`
3. После мерджа в sourceCell стоит новое число (не старое)
4. После мерджа `selected = null`
5. `currentMax` обновился если новое значение больше предыдущего
