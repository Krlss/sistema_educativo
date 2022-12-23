import QuadrantPoints from '../CartesianPlane/QuadrantPoints'
import useCartesianCoordinate from '../../hooks/useCartesianCoordinate'
import { getCoorValues, getQuadrant } from '../../utils/CartesianCoordinate'
import QuestionTitle from '../title/questionTitle'
import { stripquotes } from '../../utils'
import { question, cartesianCoordinateFull_ } from '../../types/game'

const CartesianCoordinateQuadrant = (props: question) => {
  const options_ = stripquotes(props.options) as cartesianCoordinateFull_[]
  const { cartesian, updateCartesian, gameState } = useCartesianCoordinate(
    options_,
    props
  )
  const type = getQuadrant(options_)

  const subtitle = cartesian
    .map(point => `${point.letter} (${point.x}, ${point.y})`)
    .join(', ')

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle ? props.subtitle : subtitle}
        index={props.index}
      />
      <div className="relative flex items-center justify-center mt-5 mb-10 ml-5">
        <div>
          {[...Array(11)].map((_, y) => {
            return (
              <div key={y} className="flex items-center justify-center">
                {[...Array(11)].map((_, x) => {
                  const isClicked = !!cartesian.find(point => {
                    const { valueX, valueY } = getCoorValues({
                      x,
                      y,
                      type,
                      length: 10
                    })
                    return (
                      point.responseX === valueX && point.responseY === valueY
                    )
                  })

                  const isCorrect = cartesian.find(point => {
                    const { valueX, valueY } = getCoorValues({
                      x,
                      y,
                      type,
                      length: 10
                    })
                    return (
                      point.responseX === valueX && point.responseY === valueY
                    )
                  })?.isCorrect

                  return (
                    <div
                      key={x}
                      className={`w-[27px] h-[27px] flex items-center justify-center ${
                        !gameState.next && 'cursor-pointer group'
                      }`}
                      onClick={() => {
                        if (!gameState.next) {
                          const { valueX, valueY } = getCoorValues({
                            type,
                            x,
                            y,
                            length: 10
                          })
                          updateCartesian(valueX, valueY)
                        }
                      }}>
                      <div className="w-[27px] h-[27px] rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center">
                        {!gameState.next ? (
                          isClicked && (
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          )
                        ) : isCorrect && isClicked ? (
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                        ) : (
                          isClicked && (
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                          )
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

export default CartesianCoordinateQuadrant
