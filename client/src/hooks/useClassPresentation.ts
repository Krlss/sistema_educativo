import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'

const useClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams() as any
  const { user } = useContext(GeneralContext)
  const navigate = useNavigate()

  const [topic, setTopic] = useState<{
    id: string
    name: string
    image?: string
    video?: string
  }>()

  useEffect(() => {
    const topic = user.progress
      .find(p => p.id === asignatureId)
      ?.unit?.find(u => u.id === unitId)
      ?.topic?.find(t => t.id === topicId)

    if (!topic) return navigate(`/asignatura/${asignatureId}/unidad/${unitId}`)
    setTopic({
      id: topic.id,
      name: topic.name,
      image: topic.image,
      video: topic.video
    })
  }, [asignatureId, unitId])

  const descriptionIsImage = topic?.image?.includes('http')

  return {
    topic,
    descriptionIsImage
  }
}

export default useClassPresentation
