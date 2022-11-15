import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { GETASIGNATURES, GETASIGNATURE } from './graphql-queries'
import { getRamdonArrayColors, pastelColors } from '../../constants/colors'

import GeneralContext from '../../contexts/context'

export interface getAsignaturesProps {
  getAsignatures: ASIGNATURE[]
}

export interface getAsignatureProps {
  getAsignature: ASIGNATURE
}

export const useGetAsignatures = () => {
  const [getAsignatures, { data, error, loading }] =
    useLazyQuery<getAsignaturesProps>(GETASIGNATURES)

  return { getAsignatures, data, error, loading }
}

export const useGetAsignature = () => {
  const { asinatureId } = useParams()
  const navigate = useNavigate()
  const [colors, setColors] = useState(pastelColors)
  const [asignature, setAsignature] = useState<ASIGNATURE>()
  const { setLoading } = useContext(GeneralContext)
  const [getAsignature, { data, error, loading }] =
    useLazyQuery<getAsignatureProps>(GETASIGNATURE)

  const getAsignatureHandler = (asinatureId: string) => {
    setLoading(true)
    getAsignature({
      variables: {
        asinatureId
      },
      onCompleted: ({ getAsignature }) => {
        setAsignature(getAsignature)
        setColors(getRamdonArrayColors(getAsignature.unit.length))
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate('/')
      }
    })
  }

  useEffect(() => {
    if (asinatureId) {
      getAsignatureHandler(asinatureId)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asinatureId])

  return {
    getAsignature,
    getAsignatureHandler,
    data,
    error,
    loading,
    asignature,
    colors,
    asinatureId
  }
}
