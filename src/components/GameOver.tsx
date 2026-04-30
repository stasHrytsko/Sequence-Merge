type Props = {
  finalMax: number
  best: number
  isNewBest: boolean
  onPlayAgain: () => void
}

export function GameOver({ finalMax, best, isNewBest, onPlayAgain }: Props) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/35 backdrop-blur-sm anim-overlay">
      <div className="anim-panel mx-4 w-full max-w-[360px] rounded-3xl bg-white shadow-2xl p-7 flex flex-col items-center gap-3">
        <h2 className="text-[10px] uppercase tracking-[0.22em] text-gray-500">Game Over</h2>
        <div className="text-7xl font-mono font-bold tabular-nums text-gray-900 leading-none">
          {finalMax}
        </div>
        {isNewBest ? (
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            New Best!
          </div>
        ) : (
          <div className="text-gray-500 text-sm">Best: {best}</div>
        )}
        <button
          type="button"
          onClick={onPlayAgain}
          className="mt-4 w-full rounded-2xl bg-gray-900 text-white py-3.5 font-semibold tracking-wide active:scale-[0.97] transition-transform"
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
