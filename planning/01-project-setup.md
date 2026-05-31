# Task 01 — Project Setup: TypeScript + Tailwind

> **ENGINEERING TASK** — не user story. Нет прямой ценности для игрока, но является фундаментом для всех задач ниже.

## Goal
Перевести проект с JS на TypeScript и подключить Tailwind CSS.

## What to do
- Переименовать `src/main.jsx` → `main.tsx`, `src/App.jsx` → `App.tsx`
- Добавить `tsconfig.json` и `tsconfig.node.json`
- Установить Tailwind v3: `npm install -D tailwindcss postcss autoprefixer`
- Инициализировать: `npx tailwindcss init -p`
- Настроить `tailwind.config.js` (content: `./index.html`, `./src/**/*.{ts,tsx}`)
- Подключить директивы Tailwind в `src/styles/index.css`
- Обновить `vite.config.js` → `vite.config.ts`
- Обновить `package.json` dependencies

## E2E test
1. `npm run dev` запускается без ошибок
2. В браузере открывается страница
3. Добавить класс `bg-red-500` к `<div>` в App.tsx → элемент становится красным
4. `npm run build` проходит без ошибок TypeScript
