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
  const { asignatureId } = useParams()
  const navigate = useNavigate()
  const [colors, setColors] = useState(pastelColors)
  const [asignature, setAsignature] = useState<ASIGNATURE>()
  const { setLoading } = useContext(GeneralContext)
  const [getAsignature, { data, error, loading }] =
    useLazyQuery<getAsignatureProps>(GETASIGNATURE)

  const getAsignatureHandler = (asignatureId: string) => {
    setLoading(true)
    getAsignature({
      variables: {
        asignatureId
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
