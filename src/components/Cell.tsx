import { memo, type CSSProperties } from 'react'
import { cellColor } from '../game/colors'

type Props = {
  value: number
  selected: boolean
  hint: boolean
  mergeFlash: boolean
  spawnFlash: boolean
  invalidFlash: boolean
  onTap: () => void
}

function CellInner({ value, selected, hint, mergeFlash, spawnFlash, invalidFlash, onTap }: Props) {
  const { bg, fg } = cellColor(value)

  const animClass =
    mergeFlash   ? 'anim-merge'   :
    spawnFlash   ? 'anim-spawn'   :
    invalidFlash ? 'anim-invalid' : ''

  const style: CSSProperties = { backgroundColor: bg, color: fg }
  if (hint && !selected) {
    style.outline = '2px dashed rgba(75, 85, 99, 0.55)'
    style.outlineOffset = '-3px'
  }

  return (
    <button
      type="button"
      onClick={onTap}
      className={[
        'relative aspect-square w-full rounded-2xl flex items-center justify-center select-none',
        'font-mono font-bold tabular-nums',
        'text-2xl sm:text-3xl',
        'transition-transform duration-100 ease-out',
        'shadow-sm active:scale-95',
        selected ? 'ring-2 ring-blue-500 ring-inset scale-[0.94]' : '',
        animClass,
      ].filter(Boolean).join(' ')}
      style={style}
    >
      <span className="pointer-events-none">{value}</span>
    </button>
  )
}

export const Cell = memo(CellInner)
