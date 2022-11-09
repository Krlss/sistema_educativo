import { LOGIN } from './graphql-queries'
import { REGISTER } from './graphql-mutations'
import { useLazyQuery, useMutation } from '@apollo/client'
import { useContext } from 'react'
import UserContext from '../../contexts/user/context'
import { USER } from '../../types/ContextUser'

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

  const loginHandler = (Props: PropsLogin) => {
    login({ variables: { ...Props } })
  }

  return { loginHandler, data, error, loading }
}

export const useRegister = () => {
  const [createUser, { data, error, loading }] =
    useMutation<RegisterUser>(REGISTER)

  const registerHandler = (Props: PropsRegister) => {
    createUser({
      variables: {
        ...Props,
        rol: ['Student']
      }
    })
  }

  return { registerHandler, data, error, loading }
}
