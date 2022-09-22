import QuadrantPoints from '../CartesianPlane/QuadrantPoints'
import HookCartesianCoordinate from '../../hooks/CartesianCoordinate'
import { typeCartesian } from '../../types/CartesianCoordinate'
import { getCoorValues } from '../../utils/CartesianCoordinate'
const CartesianCoordinate1 = ({
  pointNumbers,
  typeCartesian
}: {
  pointNumbers: number
  typeCartesian: typeCartesian
}) => {
  const { cartesian, updateCartesian } = HookCartesianCoordinate(pointNumbers)

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>
            1. Marcar estos puntos en la cuadricula: (3, 5), (6, 7), (4, 2), (5,
            8), (1, 4)
          </h1>
          <div className="relative flex items-center justify-center mt-10">
            <div>
              {[...Array(11)].map((_, y) => {
                return (
                  <div key={y} className="flex items-center justify-center">
                    {[...Array(11)].map((_, x) => {
                      const isClicked = !!cartesian.find(point => {
                        const { valueX, valueY } = getCoorValues({
                          x,
                          y,
                          type: typeCartesian
                        })
                        return point.x === valueX && point.y === valueY
                      })
                      return (
                        <div
                          key={x}
                          className="w-[27px] h-[27px] flex items-center justify-center cursor-pointer group"
                          onClick={() => {
                            const { valueX, valueY } = getCoorValues({
                              type: typeCartesian,
                              x,
                              y
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
            <QuadrantPoints type={typeCartesian} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartesianCoordinate1
