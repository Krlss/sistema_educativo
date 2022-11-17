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

      {topic?.description && (
        <div className="py-10">
          <iframe
            srcDoc={topic.description}
            width="100%"
            height="100%"
            name="description"
            className="w-full h-full mb-10"
            loading="lazy"
            onLoad={e => {
              const iframe = e.target as HTMLIFrameElement
              iframe.style.height =
                iframe.contentWindow?.document.body.scrollHeight + 'px'
            }}
          />
        </div>
      )}
    </div>
  )
}

export default ClassPresentation
