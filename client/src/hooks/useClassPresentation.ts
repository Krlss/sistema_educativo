import { useContext, useEffect } from 'react'
import GeneralContext from '../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GETTOPIC } from '../service/asignatures/graphql-queries'
import { UPDATE_USER_TOPIC } from '../service/user/graphql-mutations'
import { GET_USER_PROGRESS } from '../service/progress/graphql-queries'
import { getDataSession } from '../utils/dataSession'
import jwtDecode from 'jwt-decode'
import { USER } from '../types/ContextUser'

interface topic {
  id: string
  name: string
  image?: string
  video?: string
}

const useClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams() as any
  const { user } = useContext(GeneralContext)
  const navigate = useNavigate()
  const rt = getDataSession('rt')

  const { data } = useQuery(GETTOPIC, {
    variables: { topicId },
    onError: () => {
      navigate(`/asignatura/${asignatureId}/unidad/${unitId}`)
    }
  })

  const [updateUserTopic] = useMutation(UPDATE_USER_TOPIC)

  useEffect(() => {
    const topic = user?.progress
      ?.find(p => p.id === asignatureId)
      ?.unit?.find(u => u.id === unitId)
      ?.topic?.find(t => t.id === topicId)?.finished

    const topics = user?.progress
      ?.map(a => a.unit?.map(u => u.topic))
      .flat(2)
      .map(e => e?.id)

    let existTopics = topics?.length ? topics : []

    const user_ = jwtDecode<USER>(rt)

    if (!topic) {
      updateUserTopic({
        variables: {
          input: {
            id: user_.id,
            topics: [...existTopics, topicId]
          }
        },
        refetchQueries: [GET_USER_PROGRESS]
      })
    }
  }, [asignatureId, unitId, topicId])

  const descriptionIsImage = data?.topic?.image?.includes('http')

  return {
    topic: data?.topic as topic,
    descriptionIsImage
  }
}

export default useClassPresentation
