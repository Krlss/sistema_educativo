export interface TOPIC {
  id: string
  id_asignature: string
  id_unit: string
  finished: boolean
  name: string
  image?: string
  video?: string
  questions: {
    id: string
    nota: number
    id_question: string
    isDone: boolean
  }[]
}
export interface UNIT {
  id: string
  id_asignature: string
  nota?: number
  finished: boolean
  testActive: boolean
  topic: TOPIC[]
}

export interface PROGRESS {
  id: string
  nota?: number
  image: string
  name: string
  percentage: number | null
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
