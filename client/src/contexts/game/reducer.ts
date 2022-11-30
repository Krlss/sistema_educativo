import { QuestionsExtends, QUESTION } from '../../types/contextGame'

export type GameReducerProps =
  | { type: 'setQuestions'; payload: QuestionsExtends[] }
  | { type: 'addQuestion'; payload: QuestionsExtends }
  | { type: 'removeQuestion'; payload: string }
  | { type: 'updatedQuestion'; payload: QuestionsExtends }
  | { type: 'setIndex'; payload: number }

export default (state: QUESTION, action: GameReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setQuestions':
      return {
        ...state,
        questions: payload
      }
    case 'addQuestion':
      return {
        ...state,
        questions: [...state.questions, payload]
      }
    case 'removeQuestion':
      return {
        ...state,
        questions: state.questions.filter(question => question._id !== payload)
      }
    case 'updatedQuestion':
      return {
        ...state,
        questions: state.questions.map(question =>
          question._id === payload._id ? payload : question
        )
      }
    case 'setIndex':
      return {
        ...state,
        index: payload
      }
    default:
      return state
  }
}
