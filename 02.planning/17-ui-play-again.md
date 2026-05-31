# Task 17 — UI: Play Again

### User Story 17:

- **Summary:** Start a new game with one tap after finishing so I can quickly try to beat my record

#### Use Case:
- **As a** casual mobile player who just finished a game
- **I want to** tap "Play Again" and immediately see a fresh grid
- **so that** I can try again without friction and without losing my best score

#### Acceptance Criteria:

- **Scenario:** Player starts a new game after the previous one ends
- **Given:** The game over overlay is showing with my final score
- **When:** I tap the "Play Again" button
- **Then:** The overlay disappears immediately, a new 5×5 grid appears with numbers 1–9 (different from the previous game), "Current max" resets to the max of the new grid, "Best" remains unchanged from my all-time record, and I can immediately start tapping tiles

## What to do
- Кнопка "Play Again" присутствует в ОБОИХ оверлеях: `GameOverOverlay.tsx` и `WinOverlay.tsx`
- Обе кнопки вызывают одну и ту же функцию `resetGame()`
- `resetGame()`: новый `initGame()`, `phase = 'playing'`, `selected = null`, все flash = null
- `bestScore` — не трогать
- Overlay скрывается после reset (phase переключился на `'playing'`)
