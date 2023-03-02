import React from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_USER_PROGRESS } from './graphql-queries'
import { PROGRESS } from '../../types/ContextUser'
import { UserReducerProps } from '../../contexts/user/reducer'

interface getUserProgress {
  getUserProgress: PROGRESS[]
}

export const useGetUserProgress = ({
  dispatchUser
}: {
  dispatchUser: React.Dispatch<UserReducerProps>
}) => {
  const [getUserProgress] = useLazyQuery<getUserProgress>(GET_USER_PROGRESS, {
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
    },
    fetchPolicy: 'no-cache'
  })

  const handleGetUserProgress = (props: { userId: string }) => {
    getUserProgress({ variables: { ...props } })
  }
  return { getUserProgress, handleGetUserProgress } as {
    getUserProgress: () => void
    handleGetUserProgress: (props: { userId: string }) => void
  }
}
