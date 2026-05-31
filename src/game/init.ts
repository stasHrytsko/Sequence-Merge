export function createGrid(): number[][] {
  return Array.from({ length: 5 }, () =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 9) + 1)
  )
}

export function getMaxValue(grid: number[][]): number {
  return Math.max(...grid.flat())
}

export function hasValidPairs(grid: number[][]): boolean {
  let count = 0
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (c + 1 < 5 && Math.abs(grid[r][c] - grid[r][c + 1]) === 1) count++
      if (r + 1 < 5 && Math.abs(grid[r][c] - grid[r + 1][c]) === 1) count++
      if (count >= 3) return true
    }
  }
  return false
}

export function initGame(): number[][] {
  let grid = createGrid()
  while (!hasValidPairs(grid)) {
    grid = createGrid()
  }
  return grid
}
