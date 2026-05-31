import Cell from './Cell'

interface Props {
  grid: number[][]
  selected: [number, number] | null
  onTap: (row: number, col: number) => void
}

export default function Grid({ grid, selected, onTap }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2 p-4">
      {grid.map((row, r) =>
        row.map((value, c) => (
          <Cell
            key={`${r}-${c}`}
            value={value}
            isSelected={selected !== null && selected[0] === r && selected[1] === c}
            onTap={() => onTap(r, c)}
          />
        ))
      )}
    </div>
  )
}
