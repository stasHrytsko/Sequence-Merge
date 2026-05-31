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
- После выполнения таски — перемести файл из planning/ в execution/

## Структура проекта
- `initiation/` — BRD, proto-persona, jobs-to-be-done, problem-statement, game-design-checklist
- `planning/` — таски (01–05 engineering tasks, 06–18 user stories, 03→03a+03b split)
- `execution/` — выполненные таски
- `design/` — референсы и скриншоты UI
- `src/game/` — чистая логика игры (без React)
- `src/components/` — UI компоненты
- `.claude/skills/` — установленные скилы

## Скилы (.claude/skills/)
- `frontend-design` — избегать generic UI, React + Tailwind. Использовать при задачах 06–14
- `webapp-testing` — E2E тесты через Playwright. Использовать при проверке задач 08–18
- `user-story` / `user-story-splitting` — работа с тасками
- `proto-persona` / `jobs-to-be-done` / `problem-statement` / `roadmap-planning` — PM контекст

## Workflow тасок
1. Берём таску из `planning/`
2. Читаем user story + acceptance criteria
3. Реализуем, проверяем E2E в браузере
4. Перемещаем файл таски в `execution/`
5. Делаем git push

## Статус
Initiation завершён. Таски готовы, код ещё не написан.
Следующий шаг: **Task 01 — Project Setup (TypeScript + Tailwind)**
