export interface QuestionsExtends {
  _id: string
  nota: number
  isDone: boolean
  responseUser?: string
}

export interface QUESTION {
  questions: QuestionsExtends[]
  index: number
  initialTimeStamp?: Date
  finalTimeStamp?: Date
  timeLeft: number
}

export interface IInitialGame {
  initialTimeStamp?: Date
  finalTimeStamp?: Date
  timeLeft: number
}
