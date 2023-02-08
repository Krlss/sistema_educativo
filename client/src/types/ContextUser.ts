export interface TOPIC {
  id: string
  nota: number
  id_topic: string
  finished: boolean
  questions: {
    id: string
    nota: number
    id_question: string
    isDone: boolean
  }[]
}
export interface UNIT {
  id: string
  nota: number
  id_unit: string
  finished: boolean
  topic: TOPIC[]
}

export interface PROGRESS {
  id: string
  nota: number
  id_asignature: string
  unit?: UNIT[]
}
export interface USER {
  id: string
  lastName: string
  name: string
  email: string
  roles: ROLES[]
  isLogged: boolean
  progress: PROGRESS[]
}

export interface ROLES {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}

export interface IUpdateFinishedTopic {
  asignatureId: string
  unitId: string
  topicId: string
}
