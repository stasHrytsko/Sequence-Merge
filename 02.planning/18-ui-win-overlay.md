# Task 18 — UI: Win Overlay (reaching 99)

### User Story 18:

- **Summary:** See a special celebration screen when I reach 99 so I feel recognized for achieving something genuinely rare

#### Use Case:
- **As a** dedicated player who has reached the maximum value of 99
- **I want to** see a distinct win celebration with confetti and a share button
- **so that** I feel the weight of the achievement and can share it with others

#### Acceptance Criteria:

- **Scenario:** Player reaches tile value 99
- **Given:** A merge produces a tile with value 99
- **When:** `currentMax` reaches 99
- **Then:** A special win overlay appears (not the regular game over overlay) with confetti animation, the text "1 in 333. You did it." displayed prominently, the number "99" shown large, a "Share" button, and a "Play Again" button — the regular GameOverOverlay must NOT appear instead of this

## What to do
- Создать `src/components/WinOverlay.tsx`
- Показывать только когда `phase === 'won'` (отдельный phase, не `'finished'` + флаг)
- В `checkWin` (в `src/game/endgame.ts`): если `max(grid) >= 99` → `phase = 'won'`; не использовать `isWin` флаг
- Конфетти: CSS анимация или `canvas-confetti`
- **Share button:** сначала пробовать `navigator.share({ text: "I reached 99 in Sequence Merge! That's a 1 in 333 chance." })`. Если Web Share API недоступен — fallback: `navigator.clipboard.writeText(...)` с тем же текстом
- `GameOverOverlay` показывается только когда `phase === 'finished'` — win-case сюда не попадает автоматически
