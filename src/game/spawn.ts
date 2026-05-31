export function spawnValue(currentMax: number): number {
  const r = Math.random()
  if (r < 0.90) return Math.max(1, currentMax - 1)
  if (r < 0.96) return Math.max(1, currentMax - 2)
  return Math.floor(Math.random() * 4) + 1
}
