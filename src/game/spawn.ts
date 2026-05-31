export function spawnValue(currentMax: number): number {
  const r = Math.random()
  if (r < 0.90) return Math.max(1, currentMax - 1)
  if (r < 0.96) return Math.max(1, currentMax - 2)
  const garbage = Math.floor(Math.random() * 4) + 1
  return Math.min(garbage, Math.max(1, currentMax - 1))
}
