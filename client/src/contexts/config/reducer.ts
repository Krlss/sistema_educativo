import { ASIGNATURE } from '../../types/ContextAsignature'
type UserReducerProps =
  | { type: 'setAsignature'; payload: ASIGNATURE }
  | { type: 'setAsignatures'; payload: ASIGNATURE[] }
  | { type: 'setLoading'; payload: boolean }

interface StateProps {
  asignatures: ASIGNATURE[]
  loading: boolean
}

export default (state: StateProps, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setAsignature':
      return {
        ...state,
        asignatures: [...state.asignatures, payload]
      }

    case 'setAsignatures':
      return {
        ...state,
        asignatures: payload
      }
    case 'setLoading':
      return {
        ...state,
        loading: payload
      }
    default:
      return state
  }
}
