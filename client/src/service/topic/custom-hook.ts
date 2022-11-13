import { useLazyQuery } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'

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
