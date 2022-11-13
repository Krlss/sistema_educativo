import { USER } from '../../types/ContextUser'
import { setCookie, removeCookie } from '../../utils/Cookie'

type UserReducerProps =
  | { type: 'setUser'; payload: USER }
  | { type: 'resetUser'; payload: undefined }

export default (state: USER, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setUser':
      setCookie('token', payload, payload.rememberMe)
      return {
        ...state,
        ...payload,
        isLogged: true
      }
    case 'resetUser':
      removeCookie('token')
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
