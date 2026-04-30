import { SIZE } from './grid'
import type { Coord } from '../types'

export function isAdjacent(a: Coord, b: Coord): boolean {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) === 1
}

export function hasAnyValidMove(grid: number[][]): boolean {
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const v = grid[r][c]
      if (r + 1 < SIZE && Math.abs(v - grid[r + 1][c]) === 1) return true
      if (c + 1 < SIZE && Math.abs(v - grid[r][c + 1]) === 1) return true
    }
  }
  return false
}

export function neighborHints(grid: number[][], sel: Coord): Set<string> {
  const [r, c] = sel
  const v = grid[r][c]
  const hints = new Set<string>()
  const tryAdd = (nr: number, nc: number) => {
    if (nr < 0 || nr >= SIZE || nc < 0 || nc >= SIZE) return
    if (Math.abs(grid[nr][nc] - v) === 1) hints.add(`${nr}:${nc}`)
  }
  tryAdd(r - 1, c)
  tryAdd(r + 1, c)
  tryAdd(r, c - 1)
  tryAdd(r, c + 1)
  return hints
}
