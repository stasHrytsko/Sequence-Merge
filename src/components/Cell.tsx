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
  onTap: () => void
}

export default function Cell({ value, isSelected, onTap }: Props) {
  return (
    <div
      className={[
        'aspect-square rounded-xl flex items-center justify-center',
        'font-mono font-bold text-gray-800 select-none cursor-pointer',
        'border-2',
        isSelected ? 'border-blue-500 scale-[0.94]' : 'border-transparent',
      ].join(' ')}
      style={{ background: getCellColor(value) }}
      onClick={onTap}
    >
      {value}
    </div>
  )
}
