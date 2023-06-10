import { arc, pie } from 'd3-shape'
import type { DataItem } from './types'

export default function makePie(
  data: DataItem[],
  innerRadius: number,
  outerRadius: number,
  cornerRadius: number,
  padAngle: number,
) {
  const arcs = pie<DataItem>().value(d => d.value)(data)

  const arcGenerator = arc()
    .innerRadius(innerRadius) // 0
    .outerRadius(outerRadius) // 100
    .cornerRadius(cornerRadius) // 0
    .padAngle(padAngle) // 0

  const pieSvgDataUri = `data:image/svg+xml;base64,${btoa(`
    <svg xmlns="http://www.w3.org/2000/svg">
    <g transform="scale(0.01)">
      ${arcs.map(item => `<path d="${arcGenerator(item as any)}" />`)}
      </g>
    </svg>
  `)}`

  return { pieSvgDataUri, arcs, arcGenerator }
}
