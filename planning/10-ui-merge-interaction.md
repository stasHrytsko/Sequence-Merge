# Task 10 — UI: Merge Interaction

### User Story 10:

- **Summary:** Tap a valid neighbor to merge two tiles and get a new number

#### Use Case:
- **As a** casual mobile player who has selected a tile
- **I want to** tap an adjacent tile with a value differing by 1 to merge them
- **so that** I can build toward higher numbers and progress through the game

#### Acceptance Criteria:

- **Scenario:** Player executes a valid merge
- **Given:** I have selected tile "6" at position [1,1]
- **and Given:** Tile "7" is at adjacent position [1,2]
- **When:** I tap tile "7"
- **Then:** Tile "7" (the higher one) shows value "8", tile "6" (the lower one) gets a new spawned number, "Current max" in the header updates if the new value is the highest on the board, the selection clears, and I can immediately make the next tap

## What to do
- Подключить `handleTap` (из 03b) и `spawnValue` (из 04) к UI
- `targetCell` (большее число) → `max(a,b) + 1`
- `sourceCell` (меньшее число) → `spawnValue(currentMax)`
- После каждого мерджа вызывать `checkGameOver` (из 05)
