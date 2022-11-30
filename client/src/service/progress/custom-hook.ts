import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_USER_PROGRESS } from './graphql-queries'
import { PROGRESS } from '../../types/contextUser'
import { UserReducerProps } from '../../contexts/user/reducer'

interface getUserProgress {
  getUserProgress: PROGRESS[]
}

export const useGetUserProgress = ({
  dispatchUser
}: {
  dispatchUser: React.Dispatch<UserReducerProps>
}) => {
  const [getUserProgress, { data, error, loading }] =
    useLazyQuery<getUserProgress>(GET_USER_PROGRESS, {
      onCompleted(data) {
        dispatchUser({
          type: 'setUserProgress',
          payload: data?.getUserProgress ?? []
        })
      },
      onError(error) {
        console.error(error)
        dispatchUser({
          type: 'setUserProgress',
          payload: []
        })
      }
    })

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
