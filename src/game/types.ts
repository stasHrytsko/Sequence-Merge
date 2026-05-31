export type GamePhase = 'playing' | 'finished' | 'won'

export interface GameState {
  phase: GamePhase
  grid: number[][]
  selected: [number, number] | null
  currentMax: number
  bestScore: number
  mergeFlash: [number, number] | null
  invalidFlash: [number, number] | null
  spawnFlash: [number, number] | null
}
