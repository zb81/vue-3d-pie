export interface Props {
  antialias?: boolean
  backgroundColor?: string
  orbitControlsEnabled?: boolean
  palette?: string[]
  pieData: DataItem[]
}

export interface DataItem {
  value: number
  color: string
  label: string
  explode: boolean
  height: number
  offset: number
}
