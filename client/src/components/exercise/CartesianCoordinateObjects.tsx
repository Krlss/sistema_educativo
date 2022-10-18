import React, { useState } from 'react'
import QuadrantPoints from '../CartesianPlane/QuadrantPoints'
import { typeCartesian, objectCartesian } from '../../types/CartesianCoordinate'
import { getCoorValues } from '../../utils/CartesianCoordinate'

const CartesianCoordinateObjects = ({
  typeCartesian,
  points
}: {
  typeCartesian: typeCartesian
  points: objectCartesian[]
}) => {
  const [pointsState, setPointsState] = useState(points)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>9. Escriba las coordenadas de estos objetos</h1>
          <div className="flex gap-2 mt-5 flex-wrap items-center justify-center">
            {points.map((point, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-2">
                  <img src={point.url} alt="point" className="w-8 h-8" />
                  <div className="flex items-center justify-center">
                    <input
                      type="text"
                      className="w-[75px] h-8 border border-gray-300 text-center"
                      onChange={e => {
                        const newPoints = [...pointsState]
                        newPoints[index].responseX = Number(e.target.value)
                        setPointsState(newPoints)
                      }}
                    />
                    <input
                      type="text"
                      className="w-[75px] h-8 border border-gray-300 text-center"
                      onChange={e => {
                        const newPoints = [...pointsState]
                        newPoints[index].responseY = Number(e.target.value)
                        setPointsState(newPoints)
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="relative flex items-center justify-center mt-8">
            <div>
              {[...Array(11)].map((_, y) => {
                return (
                  <div key={y} className="flex items-center justify-center">
                    {[...Array(11)].map((_, x) => {
                      const { valueX, valueY } = getCoorValues({
                        x,
                        y,
                        type: typeCartesian,
                        length: 10
                      })
                      return (
                        <div
                          key={x}
                          className="w-[27px] h-[27px] flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full flex items-center justify-center">
                            {points.find(point => {
                              return point.x === valueX && point.y === valueY
                            })?.url && (
                              <img
                                src={
                                  points.find(point => {
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
            <QuadrantPoints type={typeCartesian} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartesianCoordinateObjects
