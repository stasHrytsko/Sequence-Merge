import type { GameState } from './types'
import { spawnValue } from './spawn'
import { getMaxValue } from './init'

function isNeighbor(r1: number, c1: number, r2: number, c2: number): boolean {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1
}

export function getValidNeighbors(grid: number[][], row: number, col: number): [number, number][] {
  const result: [number, number][] = []
  for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) {
    const r = row + dr
    const c = col + dc
    if (r >= 0 && r < 5 && c >= 0 && c < 5 && Math.abs(grid[row][col] - grid[r][c]) === 1) {
      result.push([r, c])
    }
  }
  return result
}

export function handleTap(state: GameState, row: number, col: number): GameState {
  if (state.phase !== 'playing') return state

  const { selected } = state

  // Scenario 1: nothing selected → select
  if (selected === null) {
    return { ...state, selected: [row, col] }
  }

  const [sr, sc] = selected

  // Scenario 2: tap same cell → deselect
  if (sr === row && sc === col) {
    return { ...state, selected: null }
  }

  // Scenario 3: not a neighbor → switch selection
  if (!isNeighbor(sr, sc, row, col)) {
    return { ...state, selected: [row, col] }
  }

  const a = state.grid[sr][sc]
  const b = state.grid[row][col]

  // Scenario 4: neighbor but difference != 1 → invalid
  if (Math.abs(a - b) !== 1) {
    return { ...state, selected: null, invalidFlash: [row, col] }
  }

  // Scenario 5: valid merge
  const targetRow = a >= b ? sr : row
  const targetCol = a >= b ? sc : col
  const sourceRow = a >= b ? row : sr
  const sourceCol = a >= b ? col : sc

  const newValue = Math.max(a, b) + 1
  const newGrid = state.grid.map((r, ri) =>
    r.map((v, ci) => {
      if (ri === targetRow && ci === targetCol) return newValue
      if (ri === sourceRow && ci === sourceCol) return spawnValue(state.currentMax)
      return v
    })
  )

  return {
    ...state,
    grid: newGrid,
    selected: null,
    currentMax: getMaxValue(newGrid),
    mergeFlash: [targetRow, targetCol],
    spawnFlash: [sourceRow, sourceCol],
    invalidFlash: null,
  }
}
