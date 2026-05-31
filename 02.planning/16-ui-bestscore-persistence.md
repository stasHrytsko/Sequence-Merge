# Task 16 — UI: bestScore localStorage Persistence

### User Story 16:

- **Summary:** Have my best score saved between sessions so I always have a personal record to beat

#### Use Case:
- **As a** casual mobile player returning to the app after closing it
- **I want to** see my all-time best score in the header
- **so that** I have a personal benchmark that motivates me to keep playing and improving

#### Acceptance Criteria:

- **Scenario:** Player returns to the app after a previous session
- **Given:** I played a game and reached currentMax = 15 in a previous session
- **and Given:** I have since closed and reopened the app
- **When:** The app loads
- **Then:** The header shows "Best: 15", if I play a new game and reach only 10 the Best stays at 15, if I play a new game and reach 20 the Best updates to 20, and clicking "Play Again" never resets the Best score

## What to do
- При инициализации: `localStorage.getItem('bestScore')` → `bestScore` (0 если отсутствует — первый запуск)
- При `phase = 'finished'` ИЛИ `phase = 'won'`: если `currentMax > bestScore` → записать в localStorage
- `bestScore` передавать в `Header.tsx`
- "Play Again" не трогает `bestScore`
