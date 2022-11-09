import { ASIGNATURE } from '../../types/ContextAsignature'
type AsignatureReducerProps =
  | { type: 'setAsignature'; payload: ASIGNATURE }
  | { type: 'resetAsignature'; payload: undefined }

export default (state: ASIGNATURE, action: AsignatureReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setAsignature':
      return {
        ...state,
        _id: payload._id,
        name: payload.name,
        description: payload.description
      }
    default:
      return state
  }
}
