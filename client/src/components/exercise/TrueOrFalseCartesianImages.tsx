import { useState } from 'react'
import { typeCartesian } from '../../types/CartesianCoordinate'
import { changePoints, getCoorValues } from '../../utils/CartesianCoordinate'
import CartesianQuadrant from '../CartesianPlane/QuadrantPoints'

const TrueOrFalseCartesianImages = ({
  data,
  type,
  length
}: {
  data: {
    title: string
    subtitle?: string
    response: boolean
    points: {
      x: number
      y: number
      name?: string
      resposable?: string
      url: string
      value: boolean
    }[]
  }
  type: typeCartesian
  length?: number
}) => {
  const [newData, setNewData] = useState(
    changePoints({
      ...data,
      type,
      length
    })
  )

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div>
          <div className="flex items-center justify-center flex-col">
            <div>
              <h1 className="text-xl font-bold text-left">{data.title}</h1>
              <p className="text-sm text-left">{data.subtitle}</p>
            </div>
            <div className="flex gap-2 mt-5 flex-wrap items-center justify-center">
              {data.points.map((point, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center flex-col border rounded-md p-2">
                    <img src={point.url} alt="point" className="w-8 h-8" />
                    <div className="flex items-center justify-center flex-col">
                      ({point.x}, {point.y})
                      {point.resposable && (
                        <p className="text-center text-gray-500">
                          {point.resposable}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="relative flex items-center justify-center mt-6">
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
                              {newData.find(point => {
                                return point.x === valueX && point.y === valueY
                              })?.url && (
                                <img
                                  src={
                                    newData.find(point => {
                                      return (
                                        point.x === valueX && point.y === valueY
                                      )
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
              <CartesianQuadrant type={type} />
            </div>
          </div>
          <form>
            <div className="flex items-start justify-start flex-col mt-5">
              <div className="flex flex-row items-center justify-center">
                <input
                  type="radio"
                  name="answer"
                  value="true"
                  className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                />
                <label className="ml-2">Verdadero</label>
              </div>
              <div className="flex flex-row items-center justify-center">
                <input
                  type="radio"
                  name="answer"
                  value="false"
                  className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                />
                <label className="ml-2">Falso</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TrueOrFalseCartesianImages
