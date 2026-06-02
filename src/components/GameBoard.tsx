import Grid from './Grid'

interface Props {
  grid: number[][]
  selected: [number, number] | null
  invalidFlash: [number, number] | null
  mergeFlash: [number, number] | null
  onTap: (row: number, col: number) => void
}

export default function GameBoard({ grid, selected, invalidFlash, mergeFlash, onTap }: Props) {
  return (
    <main className="flex-1">
      <Grid grid={grid} selected={selected} invalidFlash={invalidFlash} mergeFlash={mergeFlash} onTap={onTap} />
    </main>
  )
}
