# Task 13 — UI: Spawn Animation

### User Story 13:

- **Summary:** See a smooth appearance animation for new numbers so I can track board changes

#### Use Case:
- **As a** casual mobile player after completing a merge
- **I want to** see the newly spawned number appear with a fade-in animation
- **so that** I can visually track which tile changed and where the new number landed

#### Acceptance Criteria:

- **Scenario:** A new number spawns after a merge
- **Given:** A merge has just completed and the source tile needs a new number
- **When:** The new number is placed on the source tile
- **Then:** The tile starts at opacity 0 and scale 0.7, then animates to full opacity and scale 1.0 over 250ms, the animation runs simultaneously with the merge flash on the target tile, and after 250ms the tile looks completely normal

## What to do
- `spawnFlash: [number, number] | null` в GameState
- При мердже: `spawnFlash = sourceCell`
- `Cell.tsx`: если `isSpawnFlash` → начать с `opacity-0 scale-75`, анимировать к `opacity-100 scale-100`
- `transition-all duration-[250ms]`
- `setTimeout` 250ms → `spawnFlash = null`
