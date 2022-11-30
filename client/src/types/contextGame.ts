export interface QuestionsExtends {
  _id: string
  nota: number
  isDone: boolean
  responseUser?: string
}

export interface QUESTION {
  questions: QuestionsExtends[]
  index: number
}
