import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../../contexts/context'
import { useParams, useNavigate } from 'react-router-dom'
const ClassPresentation = () => {
  const { asignatureId, unitId, topicId } = useParams()
  const { config } = useContext(GeneralContext)
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
  }, [asignatureId, unitId])

  const descriptionIsImage = topic?.description?.includes('http')

  return (
    <div className="bg-white mb-10">
      {topic?.video && (
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={topic.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {descriptionIsImage && <img src={topic?.description} width="100%" />}
    </div>
  )
}

export default ClassPresentation
