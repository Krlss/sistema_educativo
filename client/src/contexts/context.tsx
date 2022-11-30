import { createContext } from 'react'
import { USER } from '../types/contextUser'
import { ASIGNATURE } from '../types/contextAsignature'
import { QuestionsExtends, QUESTION } from '../types/contextGame'

export type GeneralContextProps = {
  user: USER
  setUser: (user: USER) => void
  logout: () => void
  setAsignatures: (asignatures: ASIGNATURE[]) => void
  config: {
    asignatures: ASIGNATURE[]
    loading: boolean
  }
  setLoading: (loading: boolean) => void
  setQuestion: (question: QuestionsExtends) => void
  setQuestions: (questions: QuestionsExtends[]) => void
  removeQuestion: (_id: string) => void
  updatedQuestion: (question: QuestionsExtends) => void
  setIndex: (index: number) => void
  gameState: QUESTION
}

const GeneralContext = createContext<GeneralContextProps>(
  {} as GeneralContextProps
)

export default GeneralContext
