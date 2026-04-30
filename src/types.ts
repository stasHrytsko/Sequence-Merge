export type GamePhase = 'playing' | 'finished'

export type Coord = readonly [number, number]

export type GameState = {
  phase: GamePhase
  grid: number[][]
  selected: Coord | null
  currentMax: number
  bestScore: number
  mergeFlash: Coord | null
  invalidFlash: Coord | null
  spawnFlash: Coord | null
  maxFlash: boolean
}
