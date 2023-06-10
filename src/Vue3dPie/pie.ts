import makePie from './make-pie'
import type { DataItem } from './types'

export const createPie = (data: DataItem[], innerRadius: number, outerRadius: number, cornerRadius: number, padAngle: number) => {
  const { pieSvgDataUri } = makePie(
    data,
    innerRadius,
    outerRadius,
    cornerRadius,
    padAngle,
  )

  return { pieSvgDataUri }
}
