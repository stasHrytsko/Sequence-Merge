# Task 14 — UI: Header currentMax Pulse

### User Story 14:

- **Summary:** See the current max score pulse when it increases so I notice my progress without looking for it

#### Use Case:
- **As a** casual mobile player focused on the grid
- **I want to** see the "Current max" number in the header briefly pulse when it updates
- **so that** I'm aware my score improved without having to actively check the header after every move

#### Acceptance Criteria:

- **Scenario:** Player achieves a new current max value
- **Given:** I execute a merge that produces a value higher than the current maximum on the board
- **When:** The `currentMax` value updates in the header
- **Then:** The "Current max" number briefly pulses (scales to 1.2 then back to 1.0) over 200ms in a warm amber/orange color, "Best" in the header does not pulse, and if the merge does not produce a new max the header shows no animation

## What to do
- В `Header.tsx` отслеживать изменение `currentMax` через `useEffect`
- При изменении: добавить класс с pulse-анимацией на 200ms
- Цвет числа `currentMax` — тёплый (amber/orange)
- Убрать класс через `setTimeout` 200ms
