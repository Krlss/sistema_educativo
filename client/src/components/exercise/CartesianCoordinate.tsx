import { useState } from 'react'
import CartesianPlane from '../CartesianPlane'

interface CoordinateProps {
  x: number
  y: number
}

const CartesianCoordinate = () => {
  const [coordinate, setCoordinate] = useState<CoordinateProps | undefined>(
    undefined
  )

  const handleClick = (x: number, y: number) => {
    if (coordinate?.x === x && coordinate?.y === y) {
      setCoordinate(undefined)
      return
    }
    setCoordinate({ x, y })
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>
            1. Represente las coordenadas (x=-3,y=3) en el plano cartesiano:
          </h1>
          <div className="relative flex items-center justify-center mt-10">
            <div>
              {[...Array(21)].map((_, y) => {
                return (
                  <div key={y} className="flex items-center justify-center">
                    {[...Array(21)].map((_, x) => {
                      const isClicked = !!(
                        coordinate?.x === x - 10 && coordinate?.y === 10 - y
                      )
                      return (
                        <div
                          key={x}
                          className="w-4 h-4 flex items-center justify-center cursor-pointer group"
                          onClick={() => handleClick(x - 10, 10 - y)}>
                          <div className="w-4 h-4 rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center">
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
            <CartesianPlane x={coordinate?.x} y={coordinate?.y} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartesianCoordinate
