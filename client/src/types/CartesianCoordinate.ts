export type typeCartesian = 'I' | 'II' | 'III' | 'IV' | '0'
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

export interface ReturnChangePoint {
  originalX: number
  originalY: number
  newX: number
  newY: number
  value: boolean
  selected: boolean
  url?: string
  key: string
  isCorrect: boolean
}
