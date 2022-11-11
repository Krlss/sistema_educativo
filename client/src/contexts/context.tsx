import { createContext } from 'react'
import { USER } from '../types/ContextUser'
import { ASIGNATURE } from '../types/ContextAsignature'

export type GeneralContextProps = {
  user: USER
  setUser: (user: USER) => void
  logout: () => void
  setAsignatures: (asignatures: ASIGNATURE[]) => void
  config: {
    asignatures: ASIGNATURE[]
  }
}

const GeneralContext = createContext<GeneralContextProps>(
  {} as GeneralContextProps
)

export default GeneralContext
