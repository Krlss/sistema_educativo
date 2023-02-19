import { useLazyQuery, useQuery } from '@apollo/client'
import { GETTOPICS } from './graphql-queries'
import { CREATEUSERUNIT, updatedFinishedTopic } from './graphql-mutations'
import { getRamdonArrayColors } from '../../constants/colors'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import { getDataSession } from '../../utils/dataSession'
import { GET_USER_PROGRESS } from '../progress/graphql-queries'
import jwtDecode from 'jwt-decode'
import { GETTOPIC } from '../asignatures/graphql-queries'

interface IGetTopics {
  id: string
  name: string
  description: string
  image: string
  unit: unit
}

interface unit {
  id: string
  name: string
  topics: topic[]
}

interface topic {
  id: string
  name: string
  image?: string
  video?: string
}

export interface getTopicsProps {
  topicsByAsignatureAndUser: IGetTopics
}

export const useGetTopics = () => {
  const navigate = useNavigate()
  const { setLoading, user } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<IGetTopics>()
  const [colors, setColors] = useState<string[]>([])
  const rt = getDataSession('rt')

  const { asignatureId, unitId } = useParams() as {
    asignatureId: string
    unitId: string
  }

  const [getTopics] = useLazyQuery<getTopicsProps>(GETTOPICS, {
    fetchPolicy: 'no-cache'
  })

  const getTopicsHandler = (props: {
    asignatureId: string
    userId: string
    unitId: string
  }) => {
    setLoading(true)
    getTopics({
      variables: { ...props },
      onCompleted: ({ topicsByAsignatureAndUser }) => {
        setAsignature(topicsByAsignatureAndUser)
        setColors(
          getRamdonArrayColors(topicsByAsignatureAndUser.unit.topics.length)
        )
        setLoading(false)
      },
      onError: () => {
        setLoading(false)
        navigate(`/asignatura/${props.asignatureId}`)
      }
    })
  }

  useEffect(() => {
    const user_ = jwtDecode<USER>(rt)
    getTopicsHandler({
      asignatureId,
      userId: user_.id,
      unitId
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [asignatureId, unitId, user.id])

  return {
    getTopics,
    getTopicsHandler,
    asignature,
    colors,
    asignatureId,
    unitId,
    user
  }
}
