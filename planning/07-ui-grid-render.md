# Task 07 — UI: Grid Render

### User Story 07:

- **Summary:** See a colored 5×5 tile grid so I can scan the board and plan my moves

#### Use Case:
- **As a** casual mobile player at the start of a new game
- **I want to** see a 5×5 grid of numbered tiles colored by value
- **so that** I can visually scan the board and identify potential merge pairs without mental effort

#### Acceptance Criteria:

- **Scenario:** Player sees the initial game grid
- **Given:** A new game has been initialized with a 5×5 grid of numbers 1–9
- **and Given:** The grid has at least 3 valid merge pairs
- **When:** The grid renders on screen
- **Then:** I see 25 square tiles arranged in 5 columns, each tile shows a number, tiles are colored by value range (1–5 light blue, 6–10 light green, 11–20 amber, 21–30 orange, 31–40 red, 41–50 purple, 51+ gold), numbers use a monospace bold font, and tiles fill the screen width with 16px side padding

## What to do
- Создать `src/components/Grid.tsx` — рендерит `number[][]`
- Создать `src/components/Cell.tsx` — одна клетка: число + цвет фона
- Реализовать `getCellColor(value: number): string`
- Grid: 5 колонок, `gap-2`, `p-4`, `aspect-ratio 1/1`
- Шрифт цифр: `JetBrains Mono`, bold
