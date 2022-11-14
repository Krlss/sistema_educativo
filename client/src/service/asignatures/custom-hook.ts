import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { GETASIGNATURES, GETASIGNATURE } from './graphql-queries'
import { getRamdonArrayColors } from '../../constants/colors'

export interface getAsignaturesProps {
  getAsignatures: ASIGNATURE[]
}

export interface getAsignatureProps {
  getAsignature: ASIGNATURE
}

export const useGetAsignatures = () => {
  const [getAsignatures, { data, error, loading }] =
    useLazyQuery<getAsignaturesProps>(GETASIGNATURES, {
      fetchPolicy: 'no-cache'
    })

  return { getAsignatures, data, error, loading }
}

export const useGetAsignature = ({
  setLoading,
  setAsignature,
  setColors
}: {
  setLoading: (loading: boolean) => void
  setAsignature: (asignature: ASIGNATURE) => void
  setColors: (colors: string[]) => void
}) => {
  const navigate = useNavigate()
  const [getAsignature, { data, error, loading }] =
    useLazyQuery<getAsignatureProps>(GETASIGNATURE, {
      fetchPolicy: 'no-cache'
    })

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

  return { getAsignature, getAsignatureHandler, data, error, loading }
}
