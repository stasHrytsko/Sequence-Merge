export function getCellColor(value: number): string {
  if (value <= 5) return '#dbeafe'
  if (value <= 10) return '#d1fae5'
  if (value <= 20) return '#fef3c7'
  if (value <= 30) return '#fed7aa'
  if (value <= 40) return '#fecaca'
  if (value <= 50) return '#e9d5ff'
  return '#fde68a'
}

interface Props {
  value: number
  isSelected: boolean
  isValidNeighbor: boolean
  isInvalidFlash: boolean
  isMergeFlash: boolean
  isSpawnFlash: boolean
  onTap: () => void
}

export default function Cell({ value, isSelected, isValidNeighbor, isInvalidFlash, isMergeFlash, isSpawnFlash, onTap }: Props) {
  let borderClass = 'border-2 border-transparent'
  if (isSelected) borderClass = 'border-2 border-blue-500'
  else if (isValidNeighbor) borderClass = 'border-2 border-dashed border-gray-400'

  const bg = isInvalidFlash ? '#f87171' : isMergeFlash ? '#fcd34d' : getCellColor(value)

  return (
    <div
      className={[
        'aspect-square rounded-xl flex items-center justify-center',
        'font-mono font-bold text-gray-800 select-none cursor-pointer',
        borderClass,
        isSelected ? 'scale-[0.94]' : '',
        isMergeFlash ? 'animate-merge-bounce' : '',
        isSpawnFlash ? 'animate-spawn-in' : '',
      ].join(' ')}
      style={{ background: bg }}
      onClick={onTap}
    >
      {value}
    </div>
  )
}
