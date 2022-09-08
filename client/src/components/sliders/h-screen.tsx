import { useState, useEffect } from 'react'

const FullScreenSlider = ({ images }: { images: string[] }) => {
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPosition((currentPosition + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [currentPosition])

  const nextPosition = () => {
    if (currentPosition === images.length - 1) {
      setCurrentPosition(0)
    } else {
      setCurrentPosition(currentPosition + 1)
    }
  }

  const prevPosition = () => {
    if (currentPosition === 0) {
      setCurrentPosition(images.length - 1)
    } else {
      setCurrentPosition(currentPosition - 1)
    }
  }

  return (
    <section className="bg-placeholder-light w-full h-screen relative lg:block hidden">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${images[currentPosition]})` }}
      />
      {images.length > 1 && (
        <div className="flex items-center justify-between w-full absolute bottom-8 px-20">
          <button
            onClick={prevPosition}
            className="bg-yellow-page hover:bg-yellow-400 p-2 rounded-full focus:outline-none flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L21 28.5L23.1 26.25L12 15L23.1 3.75L21 1.5L7.5 15Z" fill="black" />
            </svg>
          </button>

          <button
            onClick={nextPosition}
            className="bg-yellow-page hover:bg-yellow-400 p-2 rounded-full focus:outline-none flex items-center justify-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.5 1.5L8.4 3.75L19.5 15L8.4 26.25L10.5 28.5L24 15L10.5 1.5Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default FullScreenSlider
