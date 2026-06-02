import { useState, useCallback, useEffect } from 'react'
import Header from './components/Header'
import GameBoard from './components/GameBoard'
import { initGame, getMaxValue } from './game/init'
import { loadBestScore, checkWin, checkGameOver } from './game/endgame'
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
    setState(prev => checkGameOver(checkWin(handleTap(prev, row, col))))
  }, [])

  useEffect(() => {
    if (!state.invalidFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, invalidFlash: null })), 200)
    return () => clearTimeout(t)
  }, [state.invalidFlash])

  useEffect(() => {
    if (!state.mergeFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, mergeFlash: null })), 300)
    return () => clearTimeout(t)
  }, [state.mergeFlash])

  useEffect(() => {
    if (!state.spawnFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, spawnFlash: null })), 250)
    return () => clearTimeout(t)
  }, [state.spawnFlash])

  return (
    <div className="min-h-screen" style={{ background: '#faf7f2' }}>
      <div className="mx-auto flex flex-col min-h-screen" style={{ maxWidth: '430px' }}>
        <Header bestScore={state.bestScore} currentMax={state.currentMax} />
        <GameBoard
          grid={state.grid}
          selected={state.selected}
          invalidFlash={state.invalidFlash}
          mergeFlash={state.mergeFlash}
          spawnFlash={state.spawnFlash}
          onTap={onTap}
        />
      </div>
    </div>
  )
}
