# Task 15 — UI: Game Over Overlay

### User Story 15:

- **Summary:** See a clear game over screen when no moves remain so I know the game ended and can see my score

#### Use Case:
- **As a** casual mobile player who has run out of valid moves
- **I want to** see a game over screen with my final score and a "Play Again" button
- **so that** I understand the game is over, feel closure, and can quickly start a new round

#### Acceptance Criteria:

- **Scenario:** Player reaches a state with no valid moves
- **Given:** The grid has no adjacent tile pairs with a difference of exactly 1
- **When:** The last merge is completed and `checkGameOver` detects no valid moves
- **Then:** An overlay appears with a 300ms fade-in showing "No more moves!", my final `currentMax` displayed prominently, a "Play Again" button (blue, full width), the grid remains visible in the background behind the overlay, and there is no timer or move counter anywhere

## What to do
- Создать `src/components/GameOverOverlay.tsx`
- Показывать только когда `phase === 'finished'` и `currentMax < 99`
- Overlay: fade-in 300ms
- Содержимое: "No more moves!", "Your best this game", число `currentMax` крупно, кнопка "Play Again"
