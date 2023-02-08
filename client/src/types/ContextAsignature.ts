export interface ASIGNATURE {
  id: string
  name: string
  description: string
  image: string
  unit: {
    id: string
    name: string
    topic: {
      id: string
      name: string
      description?: string
      video?: string
    }[]
  }[]
}
