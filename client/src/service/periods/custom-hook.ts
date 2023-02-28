import { useMutation, useQuery } from '@apollo/client'
import { GETPERIODS } from './graphql-queries'
import { CREATE_PERIOD, UPDATE_PERIOD } from './graphql-mutation'

import { period } from '../../pages/dashboard/cursos'
import { toast } from 'react-toastify'

export interface getPeriodsProps {
  periods: period[]
}

export interface getPeriodProps {
  periods: period
}

export const useGetPeriods = () => {
  const { data, loading, error } = useQuery(GETPERIODS)
  return { data, error, loading }
}

export const useCreatePeriod = () => {
  const [createPeriod] = useMutation(CREATE_PERIOD, {
    refetchQueries: [{ query: GETPERIODS }]
  })
  const [updatePeriod] = useMutation(UPDATE_PERIOD, {
    refetchQueries: [{ query: GETPERIODS }]
  })

  const handleCreatePeriod = (period: { name: string }) => {
    createPeriod({
      variables: {
        input: {
          ...period
        }
      },
      onCompleted: () => {
        toast.success('Curso creado con éxito')
      },
      onError(error: any) {
        toast.error(error.response.message.map((e: any) => e.message).join(''))
      }
    })
  }

  const handleUpdatePeriod = (period: { id: string; name?: string }) => {
    updatePeriod({
      variables: {
        input: {
          ...period
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
    createPeriod,
    updatePeriod,
    handleCreatePeriod,
    handleUpdatePeriod
  }
}
