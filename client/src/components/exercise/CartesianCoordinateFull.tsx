import CartesianPlane from '../CartesianPlane'
import useCartesianCoordinate from '../../hooks/useCartesianCoordinate'
import QuestionTitle from '../title/questionTitle'
import { question, cartesianCoordinateFull_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { namePoints } from '../../constants/CartesianConstants'
const CartesianCoordinateFull = (props: question) => {
  const options_ = stripquotes(props.options) as cartesianCoordinateFull_[]

  const subtitle = options_
    .map((option, index) => {
      return `${namePoints[index]}(${option.x}, ${option.y})`
    })
    .join(' - ')

  const { cartesian, updateCartesian, gameState } = useCartesianCoordinate(
    options_,
    props
  )

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle ? props.subtitle : subtitle}
        index={props.index}
      />
      <div className="relative flex items-center justify-center mt-5 mb-10 ml-5">
        <div>
          {[...Array(21)].map((_, y) => {
            return (
              <div key={y} className="flex items-center justify-center">
                {[...Array(21)].map((_, x) => {
                  const isClicked = !!cartesian.find(
                    point =>
                      point.responseX === x - 10 && point.responseY === 10 - y
                  )

                  const isCorrect = cartesian.find(
                    point =>
                      point.responseX === x - 10 && point.responseY === 10 - y
                  )?.isCorrect

                  return (
                    <div
                      key={x}
                      className={`w-[14.5px] h-[14.5px] flex items-center justify-center ${
                        !gameState.next && 'cursor-pointer group'
                      }`}
                      onClick={() => {
                        if (!gameState.next) {
                          updateCartesian(x - 10, 10 - y)
                        }
                      }}>
                      <div className="w-3 h-3 rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center">
                        {!gameState.next ? (
                          isClicked && (
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          )
                        ) : isCorrect && isClicked ? (
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        ) : (
                          isClicked && (
                            <div className="w-2 h-2 rounded-full bg-red-500" />
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
        <CartesianPlane />
      </div>
    </>
  )
}

export default CartesianCoordinateFull
