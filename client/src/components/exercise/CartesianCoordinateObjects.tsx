import QuadrantPoints from '../CartesianPlane/QuadrantPoints'
import { getCoorValues } from '../../utils/CartesianCoordinate'
import QuestionTitle from '../title/questionTitle'

import { stripquotes } from '../../utils'
import { question, writePointsCoordinatePlane_ } from '../../types/game'
import useWriteCoorCP from '../../hooks/useWriteCoorCP'

const CartesianCoordinateObjects = (props: question) => {
  const options_ = stripquotes(props.options) as writePointsCoordinatePlane_[]
  const { options, type, gameState, handleChange } = useWriteCoorCP({
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
              <img src={point.url} alt="point" className="w-8 h-8" />
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
      <div className="relative flex items-center justify-center mt-8 mb-20">
        <div>
          {[...Array(11)].map((_, y) => {
            return (
              <div key={y} className="flex items-center justify-center">
                {[...Array(11)].map((_, x) => {
                  const { valueX, valueY } = getCoorValues({
                    x,
                    y,
                    type,
                    length: 10
                  })
                  return (
                    <div
                      key={x}
                      className="w-[27px] h-[27px] flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center">
                        {options_.find(point => {
                          return point.x === valueX && point.y === valueY
                        })?.url && (
                          <img
                            src={
                              options_.find(point => {
                                return point.x === valueX && point.y === valueY
                              })?.url
                            }
                            alt="point"
                            className="w-6 h-6"
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <QuadrantPoints type={type} />
      </div>
    </>
  )
}

export default CartesianCoordinateObjects
