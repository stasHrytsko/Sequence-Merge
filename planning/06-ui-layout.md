# Task 06 — UI: Layout Shell

### User Story 06:

- **Summary:** See a clear game screen on mobile so I know where to play and what my score is

#### Use Case:
- **As a** casual mobile player opening the app for the first time
- **I want to** see a structured game screen with a score bar at the top and a grid area below
- **so that** I instantly understand the layout and can start playing without confusion

#### Acceptance Criteria:

- **Scenario:** Player opens the app on a mobile device
- **Given:** The app is loaded in a mobile browser (viewport ~390px wide)
- **and Given:** No game has been played yet (bestScore = 0)
- **When:** The app renders for the first time
- **Then:** I see "Best: 0" on the left and "Current max: 0" on the right in a 48px header, the background is cream `#faf7f2`, the content is centered and never exceeds 430px width, and there is no timer anywhere on the screen

## What to do
- Создать `src/components/Header.tsx` — показывает "Best: X" и "Current max: Y"
- Создать `src/components/GameBoard.tsx` — контейнер для грида (заглушка)
- Обновить `src/App.tsx` — собрать layout из компонентов
- `max-width: 430px`, `mx-auto`, фон `#faf7f2`
- Подключить шрифты `DM Sans` + `JetBrains Mono` (Google Fonts)
