import { data } from '../../constants'
import useGame from '../../hooks/useGame'
import { secondsToTime } from '../../utils'

const Game = () => {
  const { dataGame, gameState, timer, nextExercise, nextDisabled } =
    useGame(data)
  const { h, m, s } = secondsToTime(timer)

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-4">
      <div className="md:col-span-2">
        <div className="mx-auto">
          <div className="flex flex-col items-start justify-center">
            {dataGame[gameState.index]}
          </div>
        </div>
      </div>
      <div className="md:order-last order-first mb-5">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="grid gap-1.5 grid-cols-auto-index">
            {dataGame.map((_, index) => (
              <div
                key={index}
                className={`flex items-center justify-center rounded-md h-11 shadow-md ${
                  index < gameState.index ? 'bg-yellow-page' : 'bg-gray-300'
                } ${
                  index === gameState.index
                    ? 'bg-red-logo-stronger text-white'
                    : ''
                }`}>
                <span className="font-bold text-lg">{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <div className="flex flex-col">
              <span>Tiempo restante</span>
              <span className="font-semibold text-xl ml-0.5">{`${h}:${
                m < 10 ? `0${m}` : m
              }:${s < 10 ? `0${s}` : s}`}</span>
            </div>
            <div className="flex w-full justify-end">
              <button
                disabled={!nextDisabled}
                className={`px-4 py-2 bg-red-logo-stronger text-white rounded-md shadow font-semibold ${
                  !nextDisabled ? 'cursor-not-allowed opacity-40' : ''
                }`}
                onClick={nextExercise}>
                {gameState.index === dataGame.length - 1
                  ? 'Finalizar'
                  : 'Siguiente'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
