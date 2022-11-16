import { useLazyQuery } from '@apollo/client'
import { GET_USER_PROGRESS } from './graphql-queries'
import { PROGRESS } from '../../types/ContextUser'

interface getUserProgress {
  getUserProgress: PROGRESS[]
}

export const useGetUserProgress = () => {
  const [getUserProgress, { data, error, loading }] =
    useLazyQuery<getUserProgress>(GET_USER_PROGRESS)

  const handleGetUserProgress = (props: { userId: string }) => {
    getUserProgress({ variables: { ...props } })
  }
  return { getUserProgress, handleGetUserProgress, data, error, loading } as {
    getUserProgress: () => void
    handleGetUserProgress: (props: { userId: string }) => void
    data: getUserProgress
    error: Error | undefined
    loading: boolean
  }
}
