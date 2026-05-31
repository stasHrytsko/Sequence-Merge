# Task 11 — UI: Invalid Tap Flash

### User Story 11:

- **Summary:** See a red flash when I tap an invalid merge so I instantly know the move failed

#### Use Case:
- **As a** casual mobile player who taps a wrong tile
- **I want to** see immediate red visual feedback on the tapped tile
- **so that** I understand the move wasn't valid without losing my place on the board

#### Acceptance Criteria:

- **Scenario:** Player taps a neighbor that can't be merged
- **Given:** I have selected tile "3" and tile "5" is its direct neighbor (difference is 2)
- **When:** I tap tile "5"
- **Then:** Tile "5" flashes red (`bg-red-400`) for exactly 200ms then returns to its normal color, my selection is cleared (no tile selected after), and I can immediately tap again to continue playing

## What to do
- `invalidFlash: [number, number] | null` в GameState
- При invalid tap: `invalidFlash = [r, c]`
- `Cell.tsx`: если `isInvalidFlash` → `bg-red-400`
- `setTimeout` 200ms → `invalidFlash = null`
