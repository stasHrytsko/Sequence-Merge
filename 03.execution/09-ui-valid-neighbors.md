# Task 09 — UI: Valid Neighbor Highlight

### User Story 09:

- **Summary:** See valid merge partners highlighted after selecting a tile so I know my options at a glance

#### Use Case:
- **As a** casual mobile player who has just selected a tile
- **I want to** see which neighboring tiles I can merge with, visually highlighted
- **so that** I don't have to mentally calculate which adjacent numbers differ by exactly 1

#### Acceptance Criteria:

- **Scenario:** Player selects a tile and sees valid neighbors
- **Given:** A game is in progress and I tap tile with value "6"
- **and Given:** Its neighbors have values "5" (above), "7" (right), "4" (below), "8" (left)
- **When:** The tile "6" becomes selected
- **Then:** Tiles "5" and "7" immediately show a dashed grey border (`border-gray-400 border-dashed border-2`), tiles "4" and "8" show no special border, and when I deselect or complete a merge all dashed borders disappear instantly

## What to do
- Реализовать `getValidNeighbors(grid, row, col): [number, number][]`
- Передать список в `Grid.tsx` → `Cell.tsx` как проп `isValidNeighbor`
- Эффект мгновенный, убирается при deselect или после мерджа
