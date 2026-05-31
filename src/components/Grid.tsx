import Cell from './Cell'
import { getValidNeighbors } from '../game/tap'

interface Props {
  grid: number[][]
  selected: [number, number] | null
  invalidFlash: [number, number] | null
  onTap: (row: number, col: number) => void
}

export default function Grid({ grid, selected, invalidFlash, onTap }: Props) {
  const validNeighbors = selected ? getValidNeighbors(grid, selected[0], selected[1]) : []

  return (
    <div className="grid grid-cols-5 gap-2 p-4">
      {grid.map((row, r) =>
        row.map((value, c) => (
          <Cell
            key={`${r}-${c}`}
            value={value}
            isSelected={selected !== null && selected[0] === r && selected[1] === c}
            isValidNeighbor={validNeighbors.some(([vr, vc]) => vr === r && vc === c)}
            isInvalidFlash={invalidFlash !== null && invalidFlash[0] === r && invalidFlash[1] === c}
            onTap={() => onTap(r, c)}
          />
        ))
      )}
    </div>
  )
}
