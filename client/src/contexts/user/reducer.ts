import { USER } from '../../types/ContextUser'
type UserReducerProps =
  | { type: 'setUser'; payload: USER }
  | { type: 'resetUser'; payload: undefined }

export default (state: USER, action: UserReducerProps) => {
  const { type, payload } = action

  switch (type) {
    case 'setUser':
      return {
        ...state,
        _id: payload._id,
        lastname: payload.lastname,
        name: payload.name,
        mail: payload.mail,
        password: payload.password,
        rol: payload.rol
      }
    case 'resetUser':
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
