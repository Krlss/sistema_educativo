import useClassPresentation from '../../hooks/useClassPresentation'

const ClassPresentation = () => {
  const { descriptionIsImage, topic } = useClassPresentation()
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
