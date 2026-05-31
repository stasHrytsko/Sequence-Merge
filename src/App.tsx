import { useState, useCallback } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import { initGame, getMaxValue } from './game/init'
import { loadBestScore } from './game/endgame'
import { handleTap } from './game/tap'
import type { GameState } from './game/types'

function createInitialState(): GameState {
  const grid = initGame()
  return {
    phase: 'playing',
    grid,
    selected: null,
    currentMax: getMaxValue(grid),
    bestScore: loadBestScore(),
    mergeFlash: null,
    invalidFlash: null,
    spawnFlash: null,
  }
}

export default function App() {
  const [state, setState] = useState<GameState>(createInitialState)

  const onTap = useCallback((row: number, col: number) => {
    setState(prev => handleTap(prev, row, col))
  }, [])

  return (
    <div className="min-h-screen" style={{ background: '#faf7f2' }}>
      <div className="mx-auto flex flex-col min-h-screen" style={{ maxWidth: '430px' }}>
        <Header bestScore={state.bestScore} currentMax={state.currentMax} />
        <GameBoard grid={state.grid} selected={state.selected} onTap={onTap} />
      </div>
    </div>
  )
}
