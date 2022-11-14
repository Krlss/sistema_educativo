import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERTOPIC } from './graphql-mutations'
interface IGetTopics {
  _id: number
  name: string
  asignature_name: string
  topic: {
    _id: number
    name: string
    description: string
  }[]
}

export interface getTopicsProps {
  getTopics: IGetTopics
}

export const useGetTopics = () => {
  const [getTopics, { data, error, loading }] = useLazyQuery<getTopicsProps>(
    GETTOPICS,
    {
      fetchPolicy: 'no-cache'
    }
  )

  return { getTopics, data, error, loading }
}

export interface IcreateUserUnit {
  createUserUnit: boolean
}

export const useCreateUserTopic = () => {
  const [createUserTopic, { data, error, loading }] =
    useMutation<IcreateUserUnit>(CREATEUSERTOPIC)

  return { createUserTopic, data, error, loading }
}
