import CartesianPlane from '../CartesianPlane'
import useCartesianCoordinate from '../../hooks/useCartesianCoordinate'
import QuestionTitle from '../title/questionTitle'

const CartesianCoordinateFull = ({
  pointNumbers
}: {
  pointNumbers: number
}) => {
  const { cartesian, updateCartesian } = useCartesianCoordinate(pointNumbers)

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title="1. Represente las coordenadas (x=-3,y=3) en el plano cartesiano:" />
          <div className="relative flex items-center justify-center mt-10">
            <div>
              {[...Array(21)].map((_, y) => {
                return (
                  <div key={y} className="flex items-center justify-center">
                    {[...Array(21)].map((_, x) => {
                      const isClicked = !!cartesian.find(
                        point => point.x === x - 10 && point.y === 10 - y
                      )
                      return (
                        <div
                          key={x}
                          className="w-[14.5px] h-[14.5px] flex items-center justify-center cursor-pointer group"
                          onClick={() => updateCartesian(x - 10, 10 - y)}>
                          <div className="w-3 h-3 rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center">
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
            <CartesianPlane />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartesianCoordinateFull
