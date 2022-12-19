import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { namePoints } from '../../constants/cartesianConstants'
import { question, writePointsCoordinatePlane_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { onlyNumberWithNegative } from '../../constants/regex'
import useWriteCoorCP from '../../hooks/useWriteCoorCP'

const WritePointsCartesianPlane = (props: question) => {
  const options_ = stripquotes(props.options) as writePointsCoordinatePlane_[]

  const { options, gameState, handleChange, type } = useWriteCoorCP({
    array: options_,
    question: props
  })

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex gap-2 mt-2 flex-wrap items-center justify-start">
        {options.map((point, index) => {
          const isCorrect = point.isCorrect

          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-2">
              {point.url && (
                <img src={point.url} alt="point" className="w-8 h-8" />
              )}
              {!point.url && <p>{namePoints[index]}</p>}

              <div className="flex items-center justify-center">
                <input
                  type="number"
                  className={`w-[75px] h-8 border border-gray-300 text-center ${
                    gameState.next && isCorrect
                      ? 'bg-green-200'
                      : gameState.next && 'bg-red-300'
                  }`}
                  placeholder="x"
                  disabled={gameState.next}
                  onChange={e => handleChange(e.target.value, index, true)}
                />
                <input
                  type="number"
                  className={`w-[75px] h-8 border border-gray-300 text-center ${
                    gameState.next && isCorrect
                      ? 'bg-green-200'
                      : gameState.next && 'bg-red-300'
                  }`}
                  placeholder="y"
                  disabled={gameState.next}
                  onChange={e => handleChange(e.target.value, index, false)}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="relative flex items-center justify-center mt-2">
        <CartesianPlane points={options} />
      </div>
    </>
  )
}

export default WritePointsCartesianPlane
