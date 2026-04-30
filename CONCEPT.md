# Sequence Merge — концепт

## Pitch
Мобильная головоломка. Сетка 5×5 заполнена числами 1–9. Тапни одну клетку, потом соседнюю с разностью ровно `±1` — клетки сольются в число на 1 больше. На месте меньшего появится новое случайное число. Цель — уйти как можно выше, пока на поле остаются ходы.

## Core loop
1. Игрок видит сетку и текущий максимум.
2. Тап → выбор клетки. Соседи с разностью 1 подсвечиваются пунктиром.
3. Тап на валидного соседа → мерж: бо́льшая клетка получает значение `max(a,b) + 1`, меньшая — новый спавн.
4. Игра кончается, когда нет ни одной соседней пары с разностью 1.
5. Если текущий максимум превысил `bestScore`, он сохраняется в `localStorage`.

## Why it works
- **Низкий порог входа.** Правило одно: «соседи с разностью 1». Понятно за 5 секунд.
- **Тактильность.** Каждый тап — мгновенная вспышка, скейл, цвет. Игрок чувствует прогресс.
- **Тонкая стратегия.** Smart-spawn даёт числа близкие к текущему максимуму с ростом сложности — игрок постоянно видит «почти готовую» цепочку и решает, рушить ли её.
- **Никакого таймера.** Расслабленный темп, можно играть в очереди / в метро / перед сном.

## Spawn-логика (баланс)
| currentMax | вероятность | диапазон спавна |
|---|---|---|
| ≤5 | 100% | `1..min(4, currentMax-1)` |
| 6–8 | 100% | `currentMax-3 .. currentMax-1` |
| 9–12 | 70% | `currentMax-4 .. currentMax-2` |
| 9–12 | 30% | `1..3` |
| >12 | 60% | `currentMax-3 .. currentMax-1` |
| >12 | 40% | `1..5` |

Инвариант: спавн **никогда** не >= `currentMax`. Это предотвращает «подаренный» результат и держит максимум уникальным.

## Out of scope (намеренно)
Нет таймера, уровней, ежедневок, стриков, лидерборда, звука, цепных слияний, undo, hint, settings. Прототип — про чистое ядро.

## Tech
- React 18 + TypeScript + Vite
- Tailwind v4 (Vite-плагин, конфиг через CSS-токены)
- vite-plugin-pwa (offline-кэш, installable)
- localStorage для `bestScore`
- Без backend, без auth, без Supabase

## Архитектура
```
src/
├── main.tsx              ← React root
├── App.tsx               ← layout: Header + Grid + GameOver overlay
├── index.css             ← Tailwind + custom keyframes
├── types.ts              ← GameState, Coord, GamePhase
├── game/
│   ├── grid.ts           ← SIZE, randInt, smartSpawn, makeStartingGrid
│   ├── moves.ts          ← isAdjacent, hasAnyValidMove, neighborHints
│   └── colors.ts         ← cellColor(value) → {bg, fg}
├── hooks/
│   └── useGame.ts        ← core reducer, useState + useEffect для flash-таймеров
└── components/
    ├── Cell.tsx          ← memo, inline-style цвет, классы анимаций
    ├── Grid.tsx          ← 5×5 layout, hint-mapping
    ├── Header.tsx        ← Best / Current max + pulse при росте
    └── GameOver.tsx      ← overlay + Play Again
```

## Анимации
| Событие | Эффект | Длительность |
|---|---|---|
| Selected | scale(0.94) + ring синий | мгновенно (transition) |
| Hint (валидный сосед) | dashed outline серый | мгновенно |
| Merge | scale 1→1.12→1 + amber-flash | 320ms |
| Spawn | scale 0.7→1 + fade-in | 260ms |
| Invalid tap | red-flash inset | 220ms |
| Current max ↑ | pulse 1→1.18→1 | 220ms |
| Game Over | overlay fade + panel slide | 280–320ms |

## Visual style
Тёплый минимализм. Фон `#faf7f2`, клетки — закруглённые плашки с цветом по числу (холодный→тёплый по росту). Цифры моноширинные жирные. UI — DM Sans. Никаких иконок и тулбаров.

## PWA
- Standalone display, portrait
- Цвета совпадают с фоном (без «шва» при запуске с домашнего экрана)
- Service worker через workbox auto-update
- SVG-иконка 512×512 (any + maskable)

## Acceptance (smoke)
1. Открываю на телефоне → 5×5 сетка, заголовок Best / Current max
2. Тапаю «6» → подсветка + dashed на соседних «5» и «7»
3. Тап на «7» → 7→8 со вспышкой, 6→спавн
4. Тап «3» → «5» (разность 2) → красная вспышка, выделение сброшено
5. Дойти до состояния без ходов → overlay + результат
6. Лучше предыдущего → Best обновляется и сохраняется
7. Play Again → новый грид, Best остаётся
