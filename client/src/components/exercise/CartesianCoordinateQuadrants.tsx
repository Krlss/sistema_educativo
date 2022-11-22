import QuadrantPoints from '../CartesianPlane/QuadrantPoints'
import useCartesianCoordinate from '../../hooks/useCartesianCoordinate'
import { getCoorValues, getQuadrant } from '../../utils/CartesianCoordinate'
import QuestionTitle from '../title/questionTitle'
import { stripquotes } from '../../utils'
import { question, cartesianCoordinateFull_ } from '../../types/game'
import { namePoints } from '../../constants/CartesianConstants'

const CartesianCoordinateQuadrant = (props: question) => {
  const options_ = stripquotes(props.options) as cartesianCoordinateFull_[]
  const { cartesian, updateCartesian } = useCartesianCoordinate(options_.length)
  const type = getQuadrant(options_)

  const subtitle = options_
    .map((option, index) => {
      return `${namePoints[index]}(${option.x}, ${option.y})`
    })
    .join(' - ')

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle ? props.subtitle : subtitle}
        index={props.index}
      />{' '}
      <div className="relative flex items-center justify-center mt-5">
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
                    return point.x === valueX && point.y === valueY
                  })
                  return (
                    <div
                      key={x}
                      className="w-[27px] h-[27px] flex items-center justify-center cursor-pointer group"
                      onClick={() => {
                        const { valueX, valueY } = getCoorValues({
                          type,
                          x,
                          y,
                          length: 10
                        })
                        updateCartesian(valueX, valueY)
                      }}>
                      <div className="w-[27px] h-[27px] rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center">
                        {isClicked && (
                          <div className="w-2 h-2 rounded-full bg-red-logo"></div>
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
