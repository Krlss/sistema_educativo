import { useContext } from 'react'
import { LOGIN } from './graphql-queries'
import { REGISTER } from './graphql-mutations'
import { useLazyQuery, useMutation } from '@apollo/client'
import { getDataSession } from '../../utils/dataSession'
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
  const { setUser, setLoading } = useContext(GeneralContext)
  const token = getDataSession('token')
  const navigate = useNavigate()

  const [login, { data, error, loading }] = useLazyQuery<LoginUser>(LOGIN, {
    onError: () => {
      setLoading(false)
    },
    onCompleted({ login }) {
      console.log({ login })
      setLoading(false)
      setUser({ ...login })
      navigate('/')
    }
  })

  const loginHandler = (Props: PropsLogin) => {
    setLoading(true)
    login({ variables: { ...Props } })
  }

  return { loginHandler, data, error, loading, token }
}

export const useRegister = () => {
  const token = getDataSession('token')
  const navigate = useNavigate()
  const { setLoading } = useContext(GeneralContext)

  const [createUser, { data, error, loading }] = useMutation<RegisterUser>(
    REGISTER,
    {
      onError: () => {
        setLoading(false)
      },
      onCompleted() {
        setLoading(false)
        navigate('/iniciar-sesion')
      }
    }
  )

  const registerHandler = (Props: PropsRegister) => {
    setLoading(true)
    createUser({
      variables: {
        ...Props,
        rol: ['Student']
      }
    })
  }

  return { registerHandler, data, error, loading, token }
}
