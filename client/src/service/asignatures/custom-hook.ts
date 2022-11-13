import { useLazyQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { GETASIGNATURES, GETASIGNATURE } from './graphql-queries'

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

export const useGetAsignature = () => {
  const [getAsignature, { data, error, loading }] =
    useLazyQuery<getAsignatureProps>(GETASIGNATURE, {
      fetchPolicy: 'no-cache'
    })
  return { getAsignature, data, error, loading }
}
