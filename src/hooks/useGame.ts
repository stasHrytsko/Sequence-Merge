import { useCallback, useEffect, useState } from 'react'
import type { Coord, GameState } from '../types'
import { gridMax, makeStartingGrid, smartSpawn } from '../game/grid'
import { hasAnyValidMove, isAdjacent } from '../game/moves'

const BEST_KEY = 'sequenceMerge:bestScore'

function loadBest(): number {
  try {
    const raw = localStorage.getItem(BEST_KEY)
    if (!raw) return 0
    const n = parseInt(raw, 10)
    return Number.isFinite(n) && n > 0 ? n : 0
  } catch {
    return 0
  }
}

function saveBest(v: number) {
  try { localStorage.setItem(BEST_KEY, String(v)) } catch { /* ignore */ }
}

function freshState(prevBest: number): GameState {
  const grid = makeStartingGrid()
  return {
    phase: 'playing',
    grid,
    selected: null,
    currentMax: gridMax(grid),
    bestScore: prevBest,
    mergeFlash: null,
    invalidFlash: null,
    spawnFlash: null,
    maxFlash: false,
  }
}

export function useGame() {
  const [state, setState] = useState<GameState>(() => freshState(loadBest()))

  useEffect(() => {
    if (!state.mergeFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, mergeFlash: null })), 320)
    return () => clearTimeout(t)
  }, [state.mergeFlash])

  useEffect(() => {
    if (!state.spawnFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, spawnFlash: null })), 280)
    return () => clearTimeout(t)
  }, [state.spawnFlash])

  useEffect(() => {
    if (!state.invalidFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, invalidFlash: null })), 220)
    return () => clearTimeout(t)
  }, [state.invalidFlash])

  useEffect(() => {
    if (!state.maxFlash) return
    const t = setTimeout(() => setState(s => ({ ...s, maxFlash: false })), 220)
    return () => clearTimeout(t)
  }, [state.maxFlash])

  const tap = useCallback((r: number, c: number) => {
    setState(s => {
      if (s.phase !== 'playing') return s
      const here: Coord = [r, c]
      const sel = s.selected

      if (!sel) return { ...s, selected: here }
      if (sel[0] === r && sel[1] === c) return { ...s, selected: null }
      if (!isAdjacent(sel, here)) return { ...s, selected: here }

      const a = s.grid[sel[0]][sel[1]]
      const b = s.grid[r][c]
      if (Math.abs(a - b) !== 1) {
        return { ...s, invalidFlash: here, selected: null }
      }

      const newValue = Math.max(a, b) + 1
      const target: Coord = a > b ? sel : here
      const source: Coord = a > b ? here : sel

      const grid = s.grid.map(row => row.slice())
      grid[target[0]][target[1]] = newValue

      const nextMaxAfterMerge = Math.max(s.currentMax, newValue)
      grid[source[0]][source[1]] = smartSpawn(nextMaxAfterMerge)

      const nextMax = gridMax(grid)
      const maxIncreased = nextMax > s.currentMax
      const newBest = nextMax > s.bestScore ? nextMax : s.bestScore
      if (newBest !== s.bestScore) saveBest(newBest)

      const finished = !hasAnyValidMove(grid)

      return {
        ...s,
        grid,
        selected: null,
        currentMax: nextMax,
        bestScore: newBest,
        mergeFlash: target,
        spawnFlash: source,
        invalidFlash: null,
        maxFlash: maxIncreased,
        phase: finished ? 'finished' : 'playing',
      }
    })
  }, [])

  const reset = useCallback(() => {
    setState(s => freshState(s.bestScore))
  }, [])

  return { state, tap, reset }
}
