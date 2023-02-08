import { useContext } from 'react'
import { LOGIN } from './graphql-queries'
import { CREATE_USER } from './graphql-mutations'
import { useLazyQuery, useMutation } from '@apollo/client'
import { getDataSession } from '../../utils/dataSession'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
export interface PropsLogin {
  email: string
  password: string
}

export interface PropsRegister {
  name: string
  lastName: string
  email: string
  password: string
}

interface LoginUser {
  login: string
}

interface RegisterUser {
  createUser: boolean
}

export const useLogin = () => {
  const { setUser, setIsLogged, setLoading } = useContext(GeneralContext)
  const token = getDataSession('rt')
  const navigate = useNavigate()

  const [login, { data, error, loading }] = useLazyQuery<LoginUser>(LOGIN, {
    onError: () => {
      setLoading(false)
    },
    onCompleted({ login }) {
      setLoading(false)
      const user = jwtDecode<USER>(login)
      setUser({ ...user })
      setIsLogged(true)
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
  const token = getDataSession('rt')
  const navigate = useNavigate()
  const { setLoading } = useContext(GeneralContext)

  const [createUser, { data, error, loading }] = useMutation<RegisterUser>(
    CREATE_USER,
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
      variables: { data: { ...Props } }
    })
  }

  return { registerHandler, data, error, loading, token }
}
