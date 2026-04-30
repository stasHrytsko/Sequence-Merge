export type CellPalette = { bg: string; fg: string }

export function cellColor(v: number): CellPalette {
  if (v <= 5)  return { bg: '#dbeafe', fg: '#1e3a8a' }
  if (v <= 10) return { bg: '#d1fae5', fg: '#065f46' }
  if (v <= 20) return { bg: '#fef3c7', fg: '#78350f' }
  if (v <= 30) return { bg: '#fed7aa', fg: '#7c2d12' }
  if (v <= 40) return { bg: '#fecaca', fg: '#7f1d1d' }
  if (v <= 50) return { bg: '#e9d5ff', fg: '#581c87' }
  return         { bg: '#fde68a', fg: '#78350f' }
}
