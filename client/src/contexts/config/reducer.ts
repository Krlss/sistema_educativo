import { ASIGNATURE } from '../../types/ContextAsignature'
type UserReducerProps =
  | { type: 'setAsignature'; payload: ASIGNATURE }
  | { type: 'setAsignatures'; payload: ASIGNATURE[] }

interface StateProps {
  asignatures: {
    _id: string
    name: string
    description: string
  }[]
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
    default:
      return state
  }
}
