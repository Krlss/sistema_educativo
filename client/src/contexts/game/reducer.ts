import {
  QuestionsExtends,
  QUESTION,
  IInitialGame
} from '../../types/contextGame'
import { setDataQuestionLocalStore, setDataTest } from '../../utils/dataSession'

export type GameReducerProps =
  | { type: 'setQuestions'; payload: QuestionsExtends[] }
  | { type: 'addQuestion'; payload: QuestionsExtends }
  | { type: 'removeQuestion'; payload: string }
  | { type: 'updatedQuestion'; payload: QuestionsExtends }
  | { type: 'setIndex'; payload: number }
  | {
      type: 'setInitialGame'
      payload: IInitialGame
    }
  | { type: 'setTimeLeft'; payload: number }
  | { type: 'resetGame'; payload: undefined }
  | { type: 'setNext'; payload: boolean }
  | { type: 'setQualification'; payload: number }

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
    case 'setNext':
      return { ...state, next: payload }
    case 'setIndex':
      return {
        ...state,
        index: payload
      }
    case 'setInitialGame':
      return {
        ...state,
        initialTimeStamp: payload.initialTimeStamp,
        finalTimeStamp: payload.finalTimeStamp,
        timeLeft: payload.timeLeft
      }
    case 'setQualification':
      return {
        ...state,
        qualification: payload
      }
    case 'setTimeLeft':
      return {
        ...state,
        timeLeft: payload
      }
    case 'resetGame':
      return {
        ...state,
        questions: [],
        index: 0,
        initialTimeStamp: undefined,
        finalTimeStamp: undefined,
        timeLeft: 0,
        qualification: 0
      }
    default:
      return state
  }
}
