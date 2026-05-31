import Grid from './Grid'

interface Props {
  grid: number[][]
}

export default function GameBoard({ grid }: Props) {
  return (
    <main className="flex-1">
      <Grid grid={grid} />
    </main>
  )
}
