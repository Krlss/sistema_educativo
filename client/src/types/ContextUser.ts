export interface TOPIC {
  _id: string
  nota: number
  id_topic: string
  finished: boolean
  questions: {
    _id: string
    nota: number
    id_question: string
    isDone: boolean
  }[]
}
export interface UNIT {
  _id: string
  nota: number
  id_unit: string
  finished: boolean
  topic: TOPIC[]
}

export interface PROGRESS {
  _id: string
  nota: number
  id_asignature: string
  unit?: UNIT[]
}
export interface USER {
  _id: string
  lastname: string
  name: string
  username: string
  mail: string
  rol: string[]
  isLogged: boolean
  rememberMe: boolean
  progress: PROGRESS[]
}
