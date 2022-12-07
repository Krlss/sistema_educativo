import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'
import { useUpdatedFinishedTopic } from '../service/topic/custom-hook'

const useClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams() as any
  const { config, user, updateFinishedTopic } = useContext(GeneralContext)
  const { updatedFinishedTopicMutation } = useUpdatedFinishedTopic()
  const navigate = useNavigate()

  const [topic, setTopic] = useState<{
    _id: string
    name: string
    description?: string
    video?: string
  }>()

  useEffect(() => {
    const topic = config.asignatures
      .find(asignature => asignature._id === asignatureId)
      ?.unit.find(unit => unit._id === unitId)
      ?.topic.find(topic => topic._id === topicId)
    if (!topic) return navigate(`/asignatura/${asignatureId}/unidad/${unitId}`)
    setTopic(topic)

    const findTopic = user.progress
      .find(progress => progress.id_asignature === asignatureId)
      ?.unit?.find(unit => unit.id_unit === unitId)
      ?.topic?.find(topic => topic.id_topic === topicId)

    if (findTopic?.finished === false) {
      updatedFinishedTopicMutation({
        variables: {
          asignatureId,
          unitId,
          topicId,
          userId: user._id
        },
        onCompleted(data) {
          if (data.finishedUserTopic) {
            updateFinishedTopic(asignatureId, unitId, topicId)
          }
        }
      })
    }
  }, [asignatureId, unitId])

  const descriptionIsImage = topic?.description?.includes('http')

  return {
    topic,
    descriptionIsImage
  }
}

export default useClassPresentation
