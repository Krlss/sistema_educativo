interface questions {
  _id: number
  nota: number
  id_question: string
  isDone: boolean
}

interface topic {
  _id: number
  nota: number
  id_topic: string
  finished: boolean
  questions?: questions[]
}

interface unit {
  _id: number
  nota: number
  id_unit: string
  topic?: topic[]
}

export const InitialStateUser: {
  _id: string
  lastname: string
  name: string
  mail: string
  username: string
  rol: string[]
  isLogged: boolean
  rememberMe: boolean
  progress?: {
    _id: number
    nota: number
    id_asignature: string
    unit?: unit[]
  }[]
} = {
  _id: '',
  lastname: '',
  name: '',
  username: '',
  mail: '',
  rol: [],
  isLogged: false,
  rememberMe: false,
  progress: []
}
