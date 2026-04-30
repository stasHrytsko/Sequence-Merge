import { Cell } from './Cell'
import type { GameState } from '../types'
import { neighborHints } from '../game/moves'

type Props = {
  state: GameState
  onTap: (r: number, c: number) => void
}

export function Grid({ state, onTap }: Props) {
  const hints = state.selected ? neighborHints(state.grid, state.selected) : null

  return (
    <div className="grid grid-cols-5 gap-2 p-4 w-full max-w-[430px] mx-auto">
      {state.grid.flatMap((row, r) =>
        row.map((v, c) => {
          const isSelected = !!state.selected && state.selected[0] === r && state.selected[1] === c
          const isHint = hints?.has(`${r}:${c}`) ?? false
          const isMerge = !!state.mergeFlash && state.mergeFlash[0] === r && state.mergeFlash[1] === c
          const isSpawn = !!state.spawnFlash && state.spawnFlash[0] === r && state.spawnFlash[1] === c
          const isInvalid = !!state.invalidFlash && state.invalidFlash[0] === r && state.invalidFlash[1] === c
          return (
            <Cell
              key={`${r}:${c}:${v}`}
              value={v}
              selected={isSelected}
              hint={isHint}
              mergeFlash={isMerge}
              spawnFlash={isSpawn}
              invalidFlash={isInvalid}
              onTap={() => onTap(r, c)}
            />
          )
        })
      )}
    </div>
  )
}
