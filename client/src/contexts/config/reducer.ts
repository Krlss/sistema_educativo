import { ASIGNATURE } from '../../types/ContextAsignature'
type UserReducerProps = { type: 'setLoading'; payload: boolean }

interface StateProps {
  loading: boolean
}

export default (state: StateProps, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setLoading':
      return {
        ...state,
        loading: payload
      }
    default:
      return state
  }
}
