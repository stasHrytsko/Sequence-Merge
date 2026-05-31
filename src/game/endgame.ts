import type { GameState } from './types'

export function loadBestScore(): number {
  return parseInt(localStorage.getItem('bestScore') ?? '0', 10) || 0
}

function saveBestScore(score: number): void {
  localStorage.setItem('bestScore', String(score))
}

export function hasValidMoves(grid: number[][]): boolean {
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (c + 1 < 5 && Math.abs(grid[r][c] - grid[r][c + 1]) === 1) return true
      if (r + 1 < 5 && Math.abs(grid[r][c] - grid[r + 1][c]) === 1) return true
    }
  }
  return false
}

export function checkWin(state: GameState): GameState {
  if (state.currentMax < 99) return state

  const bestScore = Math.max(state.currentMax, state.bestScore)
  if (bestScore > state.bestScore) saveBestScore(bestScore)

  return { ...state, phase: 'won', bestScore }
}

export function checkGameOver(state: GameState): GameState {
  if (state.phase === 'won') return state
  if (hasValidMoves(state.grid)) return state

  const bestScore = Math.max(state.currentMax, state.bestScore)
  if (bestScore > state.bestScore) saveBestScore(bestScore)

  return { ...state, phase: 'finished', bestScore }
}
