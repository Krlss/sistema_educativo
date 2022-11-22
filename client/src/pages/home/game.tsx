import { data } from '../../constants'
import useGame from '../../hooks/useGame'

const Game = () => {
  const { dataGame, dataGameIndex, setDataGameIndex } = useGame(data)

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <button
          className="p-4 bg-blue-500 text-white"
          onClick={() => {
            if (dataGameIndex > 0) {
              setDataGameIndex(dataGameIndex - 1)
            }
          }}>
          anterior
        </button>
        <button
          className="p-4 bg-blue-500 text-white"
          onClick={() => {
            if (dataGameIndex < dataGame.length - 1) {
              setDataGameIndex(dataGameIndex + 1)
            }
          }}>
          Siguiente
        </button>
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-center">
            {dataGame[dataGameIndex]}
          </div>
        </div>
      </div>
      <div>
        {dataGameIndex + 1} de {dataGame.length}
      </div>
    </div>
  )
}

export default Game
