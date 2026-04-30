type Props = {
  best: number
  currentMax: number
  maxFlash: boolean
}

export function Header({ best, currentMax, maxFlash }: Props) {
  return (
    <header className="flex items-center justify-between px-5 py-3 max-w-[430px] mx-auto w-full">
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">Best</span>
        <span className="text-2xl font-mono font-bold tabular-nums leading-none mt-1">{best}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[10px] uppercase tracking-[0.18em] text-gray-500">Current max</span>
        <span
          key={currentMax}
          className={`text-2xl font-mono font-bold tabular-nums leading-none mt-1 ${maxFlash ? 'anim-pulse' : ''}`}
        >
          {currentMax}
        </span>
      </div>
    </header>
  )
}
