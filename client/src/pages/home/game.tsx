import { data } from '../../constants'
import useGame from '../../hooks/useGame'
import { secondsToTime } from '../../utils'

const Game = () => {
  const { dataGame, dataGameIndex, setDataGameIndex, timer } = useGame(data)
  const { h, m, s } = secondsToTime(timer)

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      <div className="md:col-span-2">
        <div className="container mx-auto min-h-[385px] h-full">
          <div className="flex flex-col items-start justify-center">
            {dataGame[dataGameIndex]}
          </div>
        </div>
        <div>
          <div className="flex w-full justify-end">
            {/* <button
              className="p-4 bg-blue-500 text-white"
              onClick={() => {
                if (dataGameIndex > 0) {
                  setDataGameIndex(dataGameIndex - 1)
                }
              }}>
              anterior
            </button> */}
            <button
              className="p-4 bg-blue-500 text-white"
              onClick={() => {
                if (dataGameIndex < dataGame.length - 1) {
                  setDataGameIndex(dataGameIndex + 1)
                }
              }}>
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <div className="md:order-last order-first">
        <div className="flex flex-wrap w-full items-center">
          {dataGame.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-center basis-14 m-0.5 rounded h-12 ${
                index < dataGameIndex ? 'bg-yellow-page' : 'bg-gray-300'
              } ${
                index === dataGameIndex ? 'bg-red-logo-stronger text-white' : ''
              }`}>
              <span className="font-semibold">{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="mt-2">
          <span className="font-semibold text-xl ml-0.5">{`${h}:${
            m < 10 ? `0${m}` : m
          }:${s < 10 ? `0${s}` : s}`}</span>
        </div>
      </div>
    </div>
  )
}

export default Game
