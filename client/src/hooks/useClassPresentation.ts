import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'
import { useUpdatedFinishedTopic } from '../service/topic/custom-hook'

const useClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams() as any
  const { config, user } = useContext(GeneralContext)
  const { updatedFinishedTopicMutation } = useUpdatedFinishedTopic()
  const navigate = useNavigate()

  const [topic, setTopic] = useState<{
    id: string
    name: string
    image?: string
    video?: string
  }>()

  useEffect(() => {
    const topic = config.asignatures
      .find(asig => asig.id === asignatureId)
      ?.PCA.find(pca => pca.PCAU)
      ?.PCAU.find(pcau => pcau.unit.id === unitId)
      ?.PCAUT.find(pcaut => pcaut.topic.id === topicId)?.topic

    if (!topic) return navigate(`/asignatura/${asignatureId}/unidad/${unitId}`)
    setTopic(topic)

    const findTopic = user.progress
      .find(progress => progress.id_asignature === asignatureId)
      ?.unit?.find(unit => unit.id_unit === unitId)
      ?.topic?.find(topic => topic.id_topic === topicId)

    if (!findTopic) {
      updatedFinishedTopicMutation({
        variables: {
          topicId
        }
      })
    }
  }, [asignatureId, unitId])

  const descriptionIsImage = topic?.image?.includes('http')

  return {
    topic,
    descriptionIsImage
  }
}

export default useClassPresentation
