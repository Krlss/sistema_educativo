import { useLazyQuery, useMutation } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERTOPIC } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate } from 'react-router-dom'

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

interface TOPIC {
  _id: number
  name: string
  description?: string
}

interface ASIGNATURES {
  _id: number
  asignature_name: string
  name: string
  topic?: TOPIC[]
}

export interface getTopicsProps {
  getTopics: IGetTopics
}

export const useGetTopics = ({
  setLoading,
  setAsignature,
  setColors
}: {
  setLoading: (loading: boolean) => void
  setAsignature: (asignature: ASIGNATURES) => void
  setColors: (colors: string[]) => void
}) => {
  const navigate = useNavigate()
  const [getTopics, { data, error, loading }] = useLazyQuery<getTopicsProps>(
    GETTOPICS,
    {
      fetchPolicy: 'no-cache'
    }
  )

  const getTopicsHandler = (props: { asinatureId: string; unitId: string }) => {
    setLoading(true)
    getTopics({
      variables: { ...props },
      onCompleted: ({ getTopics }) => {
        setAsignature(getTopics)
        setColors(getRamdonArrayColors(getTopics.topic.length))
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate(`/curso/${props.asinatureId}`)
      }
    })
  }

  return { getTopics, getTopicsHandler, data, error, loading }
}

export interface IcreateUserUnit {
  createUserUnit: boolean
}

export const useCreateUserTopic = () => {
  const [createUserTopic, { data, error, loading }] =
    useMutation<IcreateUserUnit>(CREATEUSERTOPIC)

  return { createUserTopic, data, error, loading }
}
