import { useLazyQuery } from '@apollo/client'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { GETASIGNATURES } from './graphql-queries'

export interface getAsignaturesProps {
  getAsignatures: ASIGNATURE[]
}

export const useGetAsignatures = () => {
  const [getAsignatures, { data, error, loading }] =
    useLazyQuery<getAsignaturesProps>(GETASIGNATURES, {
      fetchPolicy: 'no-cache'
    })

  return { getAsignatures, data, error, loading }
}
