import { useContext } from 'react'
import { LOGIN } from './graphql-queries'
import { REGISTER } from './graphql-mutations'
import { useLazyQuery, useMutation } from '@apollo/client'
import { getCookie } from '../../utils/Cookie'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import { useNavigate } from 'react-router-dom'
export interface PropsLogin {
  username: string
  password: string
  rememberMe: boolean
}

export interface PropsRegister {
  firstname: String
  lastname: String
  username: String
  email: String
  password: String
}

interface LoginUser {
  login: USER
}

interface RegisterUser {
  createUser: USER
}

export const useLogin = () => {
  const [login, { data, error, loading }] = useLazyQuery<LoginUser>(LOGIN)
  const { setUser } = useContext(GeneralContext)
  const token = getCookie('token')
  const navigate = useNavigate()
  const loginHandler = (Props: PropsLogin) => {
    login({ variables: { ...Props } })
  }
  if (data && !loading) {
    setUser(data.login)
    navigate('/')
  }

  return { loginHandler, data, error, loading, token }
}

export const useRegister = () => {
  const [createUser, { data, error, loading }] =
    useMutation<RegisterUser>(REGISTER)
  const token = getCookie('token')
  const navigate = useNavigate()

  const registerHandler = (Props: PropsRegister) => {
    createUser({
      variables: {
        ...Props,
        rol: ['Student']
      }
    })
  }

  if (data && !loading) {
    navigate('/iniciar-sesion')
  }

  return { registerHandler, data, error, loading, token }
}
