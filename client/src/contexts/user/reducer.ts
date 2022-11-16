import { USER } from '../../types/ContextUser'
import { setDataSession, removeDataSession } from '../../utils/dataSession'

type UserReducerProps =
  | { type: 'setUser'; payload: USER }
  | { type: 'resetUser'; payload: undefined }

export default (state: USER, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setUser':
      setDataSession('token', payload)
      return {
        ...state,
        ...payload,
        isLogged: true
      }
    case 'resetUser':
      removeDataSession('token')
      return {
        ...state,
        _id: '',
        username: '',
        lastname: '',
        name: '',
        mail: '',
        password: '',
        rol: [],
        progress: [],
        isLogged: false
      }
    default:
      return state
  }
}
