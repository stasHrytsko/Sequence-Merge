import { Grid } from './components/Grid'
import { Header } from './components/Header'
import { GameOver } from './components/GameOver'
import { useGame } from './hooks/useGame'

export default function App() {
  const { state, tap, reset } = useGame()
  const isNewBest =
    state.phase === 'finished' &&
    state.currentMax > 0 &&
    state.currentMax >= state.bestScore

  return (
    <div className="min-h-dvh w-full flex flex-col">
      <Header
        best={state.bestScore}
        currentMax={state.currentMax}
        maxFlash={state.maxFlash}
      />
      <main className="flex-1 flex items-center justify-center">
        <Grid state={state} onTap={tap} />
      </main>
      {state.phase === 'finished' && (
        <GameOver
          finalMax={state.currentMax}
          best={state.bestScore}
          isNewBest={isNewBest}
          onPlayAgain={reset}
        />
      )}
    </div>
  )
}
