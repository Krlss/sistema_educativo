import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import {
  GETASIGNATURE,
  GETASIGNATURES,
  GETASIGNATURESXPERIODCOURSE
} from './graphql-queries'
import { getRamdonArrayColors, pastelColors } from '../../constants/colors'

import GeneralContext from '../../contexts/context'
import { getDataSession } from '../../utils/dataSession'
import { USER } from '../../types/ContextUser'
import jwtDecode from 'jwt-decode'
import { Asignature, asignature } from '../../pages/dashboard/asignaturas'
import { CREATE_ASIGNATURE, UPDATE_ASIGNATURE } from './graphql-mutation'
import { toast } from 'react-toastify'
import { GETPERIODS } from '../periods/graphql-queries'

export interface getAsignaturesProps {
  getAsignatures: ASIGNATURE[]
}

export interface getAsignatureProps {
  getAsignatureUserInscribed: ASIGNATURE
}

export const useGetAsignature = () => {
  const rt = getDataSession('rt')
  const { asignatureId } = useParams()
  const navigate = useNavigate()
  const [colors, setColors] = useState(pastelColors)
  const [asignature, setAsignature] = useState<ASIGNATURE>()
  const { setLoading } = useContext(GeneralContext)
  const [getAsignature, { data, error, loading }] =
    useLazyQuery<getAsignatureProps>(GETASIGNATURE, {
      fetchPolicy: 'no-cache'
    })

  const getAsignatureHandler = (asignatureId: string) => {
    setLoading(true)
    const user = jwtDecode<USER>(rt)
    getAsignature({
      variables: {
        userId: user.id,
        asignatureId
      },
      onCompleted: ({ getAsignatureUserInscribed }) => {
        setAsignature(getAsignatureUserInscribed)
        setColors(getRamdonArrayColors(getAsignatureUserInscribed.units.length))
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate('/')
      }
    })
  }

  useEffect(() => {
    if (asignatureId) {
      getAsignatureHandler(asignatureId)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asignatureId])

  return {
    getAsignature,
    getAsignatureHandler,
    data,
    error,
    loading,
    asignature,
    colors,
    asignatureId
  }
}

interface periodsCoursesAsignatures {
  periodsCoursesAsignatures: Asignature[]
}

export const useGetAsignatures = () => {
  const { data, loading, error } = useQuery(GETASIGNATURES)
  return { data, error, loading }
}
export const useGetAsignatures_ = () => {
  const { data, loading, error } = useQuery(GETASIGNATURESXPERIODCOURSE) as {
    data: periodsCoursesAsignatures
    loading: boolean
    error: any
  }
  return { data, error, loading }
}

export const useCreateAsignature = () => {
  const [createAsignature] = useMutation(CREATE_ASIGNATURE, {
    refetchQueries: [GETPERIODS, GETASIGNATURES, GETASIGNATURESXPERIODCOURSE]
  })
  const [updateAsignature] = useMutation(UPDATE_ASIGNATURE, {
    refetchQueries: [GETPERIODS, GETASIGNATURES, GETASIGNATURESXPERIODCOURSE]
  })
  const handleCreateAsignature = (asignature: {
    name: string
    description: string
    image: string
    units?: string[]
    periodsCourses?: number[]
  }) => {
    createAsignature({
      variables: {
        input: {
          ...asignature
        }
      },
      onCompleted: () => {
        toast.success('Curso creado con éxito')
      },
      onError(error: any) {
        console.log({ error })
        toast.error(error.response.message.map((e: any) => e.message).join(''))
      }
    })
  }

  const handleUpdateAsignature = (asignature: {
    id: string
    name?: string
    periodsCourses?: number[]
    description?: string
    image?: string
    units?: string[]
  }) => {
    updateAsignature({
      variables: {
        input: {
          ...asignature
        }
      },
      onCompleted: () => {
        toast.success('Curso actualizado con éxito')
      },
      onError(error) {
        toast.error(error.message)
      }
    })
  }

  return {
    handleCreateAsignature,
    handleUpdateAsignature
  }
}
