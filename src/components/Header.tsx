import { useState, useEffect, useRef } from 'react'

interface Props {
  bestScore: number
  currentMax: number
}

export default function Header({ bestScore, currentMax }: Props) {
  const [isPulsing, setIsPulsing] = useState(false)
  const prevMax = useRef(currentMax)

  useEffect(() => {
    if (currentMax > prevMax.current) {
      setIsPulsing(true)
      const t = setTimeout(() => setIsPulsing(false), 200)
      prevMax.current = currentMax
      return () => clearTimeout(t)
    }
    prevMax.current = currentMax
  }, [currentMax])

  return (
    <header className="flex justify-between items-center px-4 h-12 shrink-0">
      <span className="text-sm text-gray-500">
        Best: <span className="font-bold text-gray-900">{bestScore}</span>
      </span>
      <span className="text-sm text-gray-500">
        Current max:{' '}
        <span className={`font-bold text-amber-500 inline-block ${isPulsing ? 'animate-max-pulse' : ''}`}>
          {currentMax}
        </span>
      </span>
    </header>
  )
}
