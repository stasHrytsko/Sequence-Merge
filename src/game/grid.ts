export const SIZE = 5

export function randInt(min: number, max: number): number {
  if (max < min) return min
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function smartSpawn(currentMax: number): number {
  const cap = Math.max(1, currentMax - 1)
  const clamp = (v: number) => Math.max(1, Math.min(v, cap))
  const range = (lo: number, hi: number) => clamp(randInt(Math.max(1, lo), Math.max(1, hi)))

  if (currentMax <= 5) return range(1, Math.min(4, cap))
  if (currentMax <= 8) return range(currentMax - 3, currentMax - 1)
  if (currentMax <= 12) {
    if (Math.random() < 0.7) return range(currentMax - 4, currentMax - 2)
    return range(1, 3)
  }
  if (Math.random() < 0.6) return range(currentMax - 3, currentMax - 1)
  return range(1, 5)
}

export function gridMax(grid: number[][]): number {
  let m = 0
  for (const row of grid) for (const v of row) if (v > m) m = v
  return m
}

function countValidPairs(grid: number[][]): number {
  let n = 0
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (c < SIZE - 1 && Math.abs(grid[r][c] - grid[r][c + 1]) === 1) n++
      if (r < SIZE - 1 && Math.abs(grid[r][c] - grid[r + 1][c]) === 1) n++
    }
  }
  return n
}

export function makeStartingGrid(): number[][] {
  for (let attempt = 0; attempt < 200; attempt++) {
    const g: number[][] = []
    for (let r = 0; r < SIZE; r++) {
      const row: number[] = []
      for (let c = 0; c < SIZE; c++) row.push(randInt(1, 9))
      g.push(row)
    }
    if (countValidPairs(g) >= 3) return g
  }
  return Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => randInt(1, 9))
  )
}
