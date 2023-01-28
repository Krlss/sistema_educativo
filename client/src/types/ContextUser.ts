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
  lastName: string
  name: string
  email: string
  roles: ROLES[]
  isLogged: boolean
  rememberMe: boolean
  progress: PROGRESS[]
}

export interface ROLES {
  id: number
  name: string
  createdAt: string
}

export interface IUpdateFinishedTopic {
  asignatureId: string
  unitId: string
  topicId: string
}
