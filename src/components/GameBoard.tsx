import Grid from './Grid'

interface Props {
  grid: number[][]
  selected: [number, number] | null
  onTap: (row: number, col: number) => void
}

export default function GameBoard({ grid, selected, onTap }: Props) {
  return (
    <main className="flex-1">
      <Grid grid={grid} selected={selected} onTap={onTap} />
    </main>
  )
}
