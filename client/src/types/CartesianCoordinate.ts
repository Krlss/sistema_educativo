export type typeCartesian = 'I' | 'II' | 'III' | 'IV'
export type objectCartesian = {
  x: number
  y: number
  url?: string
  key?: string
  responseX?: number
  responseY?: number
}

export type selectPointsCoordinatePlane = {
  title: string
  response: boolean
  points: {
    x: number
    y: number
    value: boolean
  }[]
}
