import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { GETASIGNATURE } from './graphql-queries'
import { getRamdonArrayColors, pastelColors } from '../../constants/colors'

import GeneralContext from '../../contexts/context'
import { getDataSession } from '../../utils/dataSession'
import { USER } from '../../types/ContextUser'
import jwtDecode from 'jwt-decode'

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
