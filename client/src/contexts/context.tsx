import { createContext } from 'react'
import { USER } from '../types/ContextUser'
import { ASIGNATURE } from '../types/ContextAsignature'
import { QuestionsExtends, QUESTION } from '../types/contextGame'

export type GeneralContextProps = {
  user: USER
  setUser: (user: USER) => void
  logout: () => void
  config: {
    loading: boolean
  }
  setLoading: (loading: boolean) => void
  setQuestion: (question: QuestionsExtends) => void
  setQuestions: (questions: QuestionsExtends[]) => void
  removeQuestion: (id: string) => void
  updatedQuestion: (question: QuestionsExtends) => void
  setIndex: (index: number) => void
  gameState: QUESTION
  setInitialGame: () => void
  resetGame: () => void
  setNext: (boolean: boolean) => void
  calculateQualification: () => void
  setIsLogged: (isLogged: boolean) => void
}

const GeneralContext = createContext<GeneralContextProps>(
  {} as GeneralContextProps
)

export default GeneralContext
