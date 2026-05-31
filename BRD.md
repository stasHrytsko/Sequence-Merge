## **1. One-liner**

---

Мобильная головоломка: тапай соседние числа по порядку — они сливаются в следующее. Цель — дойти до максимально возможного числа пока на поле есть ходы.

---

**2. Tech stack**

React + TypeScript + Vite + Tailwind. localStorage для bestScore (максимальное число за всё время). Без backend. Без auth. Mobile-first viewport (max-width: 430px). Без next.js. Без supabase. Без таймера.

---

**3. Visual / layout spec**

```
┌─────────────────────────────┐
│ Best: 12   Current max: 8   │  h: 48px
├─────────────────────────────┤
│                             │
│   GRID 5×5                  │  квадратные клетки, fill width
│   (числа 1–9 в каждой)      │  padding 16px по бокам
│                             │
├─────────────────────────────┤
│ [Play Again]                │  скрыта пока phase='playing'
└─────────────────────────────┘
```

"Current max" — наибольшее число на поле прямо сейчас. Обновляется после каждого мерджа. Никакого таймера нигде.

---

**4. Game state (типы)**

```tsx
type GamePhase = 'idle' | 'playing' | 'finished'

type Cell = {
  value: number        // 1–99 теоретически
  row: number
  col: number
}

// Root state
{
  phase: GamePhase
  grid: number[][]     // [5][5], значения 1–9 при старте
  selected: [number, number] | null   // [row, col]
  currentMax: number   // max(grid)
  bestScore: number    // localStorage
  mergeFlash: [number, number] | null     // клетка — вспышка при мерже
  invalidFlash: [number, number] | null   // клетка — красная вспышка
  spawnFlash: [number, number] | null     // клетка — новое число появилось
}
```

---

**5. Core mechanic**

**Инициализация:**

```
grid = 5×5 заполнить случайными числами 1–9
  с условием: хотя бы 3 валидные пары существуют на старте
  (чтобы игра не кончалась сразу)
phase = 'playing'
selected = null
currentMax = max(grid)
```

**Тап на клетку [r, c]:**

```
if selected === null:
  selected = [r, c]
  return

if [r, c] === selected:
  selected = null   // deselect
  return

if NOT соседи (|r1-r2| + |c1-c2| !== 1):
  selected = [r, c]  // переключить selection на новую клетку
  return

a = grid[selected], b = grid[r][c]
if |a - b| !== 1:
  invalidFlash = [r, c] → 200ms
  selected = null
  return

// валидный мерж
newValue = max(a, b) + 1
targetCell = клетка с большим числом  // туда записывается результат
sourceCell = клетка с меньшим числом  // туда спавнится новое число

grid[targetCell] = newValue
mergeFlash = targetCell → 300ms

spawnValue = smartSpawn(currentMax)
grid[sourceCell] = spawnValue
spawnFlash = sourceCell → 300ms

currentMax = max(grid)
selected = null

checkNoValidMoves()
```

**smartSpawn(currentMax):**

```typescript
function spawnValue(currentMax: number): number {
  const r = Math.random()
  if (r < 0.90) return Math.max(1, currentMax - 1)
  if (r < 0.96) return Math.max(1, currentMax - 2)
  return Math.floor(Math.random() * 4) + 1  // 1-4 мусор
}
```

Статистика на 5000 партий:

| Игрок | Шанс на 99 | Медиана | Топ 1% игр |
|---|---|---|---|
| Идеальный бот | 1 из 172 | 28 | 92+ |
| **Умный игрок** | **1 из 333** | **26** | **83+** |
| Случайный | 1 из 5000 | 22 | 61+ |

**checkNoValidMoves():**

```
Пройти по всем клеткам [r, c]:
  проверить 4 соседа [r±1, c] и [r, c±1]:
    если |grid[r][c] - grid[neighbor]| === 1 → валидный ход существует → return

Если ни одного валидного хода нет:
  phase = 'finished'
  if currentMax > bestScore:
    bestScore = currentMax
    localStorage.setItem('bestScore', bestScore)
```

---

**6. Interactions**

- **Tap на клетку** → select / merge / deselect (см. mechanic)
- Drag — out of scope
- Swipe — out of scope

---

**7. Win / lose / reset**

- **Win:** при достижении 99 — отдельный win-overlay с конфетти, шер-кнопкой и текстом "1 in 333. You did it." Игрок должен в моменте понять что это редкость.
- **Finish:** нет валидных ходов → `phase = 'finished'`, показать результат + "Play Again"
- **Play Again:** полная реинициализация грида, bestScore сохраняется

---

**8. Feedback / animations**

- Selected cell: `scale(0.94)` + border синий 2px — мгновенно
- Valid neighbor (после selection): dashed border серый на всех соседях с разностью 1 — мгновенно
- Successful merge: `scale(1.12 → 1.0)` + flash `bg-amber-300` на merge-клетке — 300ms
- Spawn новой клетки: fade-in + `scale(0.7 → 1.0)` — 250ms
- Invalid tap: `bg-red-400` flash на тапнутой клетке — 200ms
- currentMax обновляется: число в хедере pulse — 200ms
- Game over: overlay fade-in 300ms + финальный currentMax крупно

---

**9. Visual style**

Тёплый минимализм. Фон `#faf7f2` (молочный). Клетки — закруглённые плашки, цвет зависит от числа (градиент холодный→тёплый по мере роста): 1–3 голубоватые, 4–6 зелёные, 7–9 оранжевые, 10+ красно-золотые. Цифры — моноширинный bold, тёмные на светлых клетках. Шрифт: `JetBrains Mono` или `Fira Code` для цифр, `DM Sans` для UI. Референс: Threes по цветовой температуре, Wordle по лаконичности.

Цветовая схема клеток:

```
1–5   → #dbeafe  light blue      (старт, холодный)
6–10  → #d1fae5  light green     (освоился)
11–20 → #fef3c7  light amber     (разогрев)
21–30 → #fed7aa  light orange    (опасная зона)
31–40 → #fecaca  light red       (серьёзно)
41–50 → #e9d5ff  light purple    (редкая территория)
51+   → #fde68a  gold            (легенда)
```

---

**10. Out of scope**

- Без таймера (совсем, нигде)
- Без уровней
- Без ежедневного челленджа
- Без streak
- Без leaderboard
- Без звука
- Без анимации "combo" или цепных слияний
- Без undo
- Без hint
- Без settings

---

**11. Acceptance tests**

1. Открываю на телефоне → вижу сетку 5×5 с числами, никакого таймера, только "Best" и "Current max"
2. Тапаю клетку "6" → она выделяется, соседние "5" и "7" показывают dashed border
3. Тапаю соседнюю "7" → в клетке с "7" появляется "8" со вспышкой, в клетке с "6" — новое число
4. Тапаю клетку "3", потом клетку "5" (разность 2) → красная вспышка, выделение сброшено
5. Играю до состояния когда нет ни одной соседней пары с разностью 1 → overlay с результатом
6. Результат лучше предыдущего → Best обновился
7. Жму "Play Again" → новый грид, Best сохранён
