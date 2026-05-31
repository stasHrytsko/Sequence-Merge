import type { GameState } from './types'

function isNeighbor(r1: number, c1: number, r2: number, c2: number): boolean {
  return Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1
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

  // Neighbor tap → merge logic handled in Task 03b
  return state
}
