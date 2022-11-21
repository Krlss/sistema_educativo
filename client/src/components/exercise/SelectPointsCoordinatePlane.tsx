import { useState } from 'react'
import CartesianPlane from '../CartesianPlane'
import { changePoints } from '../../utils/CartesianCoordinate'
import QuestionTitle from '../title/questionTitle'
import { question, selectPointsCoordinatePlane_ } from '../../types/game'
import { stripquotes } from '../../utils'

const SelectPointsCoordinatePlane = (props: question) => {
  const options_ = stripquotes(props.options) as selectPointsCoordinatePlane_
  const [newCoordinates, setNewCoordinates] = useState(changePoints(options_))

  const selectedCoordinates = (x: number, y: number) => {
    const selected = newCoordinates.find(
      point => point.x === x && point.y === y
    )
    if (selected) {
      selected.selected = !selected.selected
    }
    setNewCoordinates([...newCoordinates])
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle
            title={props.title}
            subtitle={props.subtitle}
            index={props.index}
          />
          <div className="flex flex-wrap max-w-xs items-center justify-center mt-5 gap-1">
            {options_.points.map((coordinate, index) => (
              <div
                key={index}
                className="border border-black p-1 basis-24 flex items-center justify-center">
                ({coordinate.x}; {coordinate.y})
              </div>
            ))}
          </div>
          <div className="relative flex items-center justify-center mt-5">
            <div>
              {[...Array(21)].map((_, y) => {
                return (
                  <div key={y} className="flex items-center justify-center">
                    {[...Array(21)].map((_, x) => {
                      const isExist = !!newCoordinates.find(
                        point => point.x === x - 10 && point.y === 10 - y
                      )
                      return (
                        <div
                          key={x}
                          className={`w-[14.5px] h-[14.5px] flex items-center justify-center ${
                            isExist && 'group cursor-pointer'
                          }`}>
                          <div
                            className="w-4 h-4 rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center"
                            onClick={() => selectedCoordinates(x - 10, 10 - y)}>
                            {isExist && (
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  newCoordinates.find(
                                    point =>
                                      point.x === x - 10 && point.y === 10 - y
                                  )?.selected
                                    ? 'bg-red-600'
                                    : 'bg-blue-600'
                                }`}
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
            <CartesianPlane />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectPointsCoordinatePlane
