import { createContext } from 'react'
import { ASIGNATURE } from '../../types/ContextAsignature'

export type AsignaturePropsContext = {
  state: ASIGNATURE
  setAsignature: (asignature: ASIGNATURE) => void
}

const AsignatureContext = createContext<AsignaturePropsContext>(
  {} as AsignaturePropsContext
)

export default AsignatureContext
