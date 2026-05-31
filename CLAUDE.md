# Sequence Merge

Мобильная puzzle-игра. Тапай соседние числа с разницей 1 — сливаются вверх.

## Стек
React + TypeScript + Vite + Tailwind. localStorage. Без backend, без auth.

## Команды
- `npm run dev` — запуск локально
- `npm run build` — сборка

## Правила
- Mobile-first, max-width 430px
- Не добавляй фичи вне текущей задачи
- Логику игры — в src/game/, UI — в src/components/
- После изменений запускай dev и проверяй, что собирается

## Структура проекта
- `initiation/` — BRD, proto-persona, jobs-to-be-done, problem-statement
- `planning/` — таски в формате user story (01–18 + split 03a/03b)
- `execution/` — выполненные таски (перемещаются сюда после завершения)
- `design/` — референсы и скриншоты UI
- `src/game/` — чистая логика игры (без React)
- `src/components/` — UI компоненты

## Workflow тасок
1. Таска берётся из `planning/`
2. После выполнения и проверки E2E — файл перемещается в `execution/`
3. Таски 01–05 — engineering tasks (нет user story)
4. Таски 06–18 — user stories (Mike Cohn + Gherkin)
