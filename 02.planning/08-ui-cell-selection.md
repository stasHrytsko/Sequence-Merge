# Task 08 — UI: Cell Selection

### User Story 08:

- **Summary:** Tap a tile to select it so I can indicate which number I want to merge

#### Use Case:
- **As a** casual mobile player during a game
- **I want to** tap a tile to select it and tap again to deselect it
- **so that** I can clearly indicate my intent before committing to a merge

#### Acceptance Criteria:

- **Scenario:** Player selects and deselects a tile
- **Given:** A game is in progress with no tile currently selected
- **When:** I tap any tile on the grid
- **Then:** That tile immediately shows a blue border (2px, `border-blue-500`) and shrinks slightly (`scale 0.94`), only one tile can be selected at a time, tapping the same tile again removes the selection, and tapping a different tile moves the selection there instantly with no animation delay

## What to do
- Подключить `useState` с `selected: [number, number] | null`
- Передать `onTap(row, col)` в `Cell.tsx`
- Выделенная клетка: `scale(0.94)` + `border-blue-500 border-2`
- Переход мгновенный (без delay)
