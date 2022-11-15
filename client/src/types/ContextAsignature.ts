export interface ASIGNATURE {
  _id: string
  name: string
  description: string
  unit: {
    _id: string
    name: string
    topic: {
      _id: string
      name: string
    }[]
  }[]
}
