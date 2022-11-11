import { USER } from '../../types/ContextUser'
import { setCookie, removeCookie } from '../../utils/Cookie'

type UserReducerProps =
  | { type: 'setUser'; payload: USER }
  | { type: 'resetUser'; payload: undefined }

export default (state: USER, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setUser':
      setCookie('token', payload)
      return {
        ...state,
        _id: payload._id,
        lastname: payload.lastname,
        name: payload.name,
        mail: payload.mail,
        username: payload.username,
        password: payload.password,
        rol: payload.rol
      }
    case 'resetUser':
      removeCookie('token')
      return {
        ...state,
        _id: '',
        lastname: '',
        name: '',
        mail: '',
        password: '',
        rol: []
      }
    default:
      return state
  }
}
