import Cell from './Cell'

interface Props {
  grid: number[][]
}

export default function Grid({ grid }: Props) {
  return (
    <div className="grid grid-cols-5 gap-2 p-4">
      {grid.map((row, r) =>
        row.map((value, c) => (
          <Cell key={`${r}-${c}`} value={value} />
        ))
      )}
    </div>
  )
}
