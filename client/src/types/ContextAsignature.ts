export interface ASIGNATURE {
  _id: string
  name: string
  description: string
  unit: {
    _id: number
    name: string
    topic: {
      _id: number
      name: string
    }[]
  }[]
}
