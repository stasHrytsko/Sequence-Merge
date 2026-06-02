# Task 12 — UI: Merge Animation

### User Story 12:

- **Summary:** See a satisfying animation when a merge succeeds so the move feels rewarding

#### Use Case:
- **As a** casual mobile player who just executed a valid merge
- **I want to** see the merged tile flash amber and briefly grow larger
- **so that** I feel a moment of satisfaction and can clearly see where the new value appeared

#### Acceptance Criteria:

- **Scenario:** Player completes a successful merge
- **Given:** I tap a valid neighbor and the merge executes
- **When:** The target tile (the one with the higher value) updates to the new merged number
- **Then:** That tile flashes amber (`bg-amber-300`) and scales up to 1.12 then smoothly returns to normal size over 300ms, after the animation the tile shows the correct new value in its normal color, and the animation only appears on the target tile (not the source tile)

## What to do
- `mergeFlash: [number, number] | null` в GameState
- При мердже: `mergeFlash = targetCell`
- `Cell.tsx`: `bg-amber-300` + `scale(1.12)` если `isMergeFlash`
- `transition-all duration-300`
- `setTimeout` 300ms → `mergeFlash = null`
