import { useContext } from 'react'
import { GETROLES, GETUSERS, LOGIN } from './graphql-queries'
import { CREATE_USER, UPDATE_USER_ROLES } from './graphql-mutations'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { getDataSession } from '../../utils/dataSession'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { course } from '../../pages/dashboard/cursos'
import { useFormik } from 'formik'
import { registerCourseValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { toast } from 'react-toastify'
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

interface IGETUSERS {
  data: {
    users: users[]
  }
  loading: boolean
  error: any
}

export interface users {
  id: string
  email: string
  name: string
  lastName: string
  createdAt: string
  updatedAt: string
  roles: roles[]
}

export interface roles {
  id: string
  name: string
}

export const useGetUsers = () => {
  const { data, loading, error } = useQuery(GETUSERS) as IGETUSERS

  return { data, loading, error }
}

interface IGETROLES {
  data: {
    roles: roles[]
  }
  loading: boolean
  error: any
}

export const useGetRoles = () => {
  const { data, loading, error } = useQuery(GETROLES) as IGETROLES

  return { data, loading, error }
}

export const useUpdateUser = () => {
  const [updateUserRoles] = useMutation(UPDATE_USER_ROLES, {
    refetchQueries: [{ query: GETUSERS }, { query: GETROLES }]
  })

  const handleUpdateUserRol = (user: { id: string; roles?: string[] }) => {
    updateUserRoles({
      variables: {
        input: {
          ...user
        }
      },
      onCompleted: () => {
        toast.success('Usuario actualizado con éxito')
      },
      onError(error) {
        toast.error(error.message)
      }
    })
  }

  return {
    handleUpdateUserRol
  }
}
