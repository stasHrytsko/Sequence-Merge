interface Props {
  bestScore: number
  currentMax: number
}

export default function Header({ bestScore, currentMax }: Props) {
  return (
    <header className="flex justify-between items-center px-4 h-12 shrink-0">
      <span className="text-sm text-gray-500">
        Best: <span className="font-bold text-gray-900">{bestScore}</span>
      </span>
      <span className="text-sm text-gray-500">
        Current max: <span className="font-bold text-gray-900">{currentMax}</span>
      </span>
    </header>
  )
}
