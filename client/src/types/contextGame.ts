export interface QuestionsExtends {
  id: string
  nota: number
  isDone: boolean
  responseUser?: string
}

export interface QUESTION {
  questions: QuestionsExtends[]
  index: number
  next: boolean
  qualification: number
  initialTimeStamp?: Date
  finalTimeStamp?: Date
  timeLeft: number
}

export interface IInitialGame {
  initialTimeStamp?: Date
  finalTimeStamp?: Date
  timeLeft: number
}
