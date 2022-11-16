export interface ASIGNATURE {
  _id: string
  name: string
  description: string
  image: string
  unit: {
    _id: string
    name: string
    topic: {
      _id: string
      name: string
    }[]
  }[]
}
