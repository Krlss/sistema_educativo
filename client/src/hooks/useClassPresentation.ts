import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'

const useClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams() as any
  const { config } = useContext(GeneralContext)
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
      ?.PCA[0]?.PCAU.find(pcau => pcau.unit.id === unitId)
      ?.PCAUT.find(pcaut => pcaut.topic.id === topicId)?.topic

    if (!topic) return navigate(`/asignatura/${asignatureId}/unidad/${unitId}`)
    setTopic(topic)
  }, [asignatureId, unitId])

  const descriptionIsImage = topic?.image?.includes('http')

  return {
    topic,
    descriptionIsImage
  }
}

export default useClassPresentation
