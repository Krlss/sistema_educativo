import { useState } from 'react'
import {
  changePoints,
  getCoorValues,
  getQuadrant
} from '../../utils/CartesianCoordinate'
import CartesianQuadrant from '../CartesianPlane/QuadrantPoints'
import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalseCartesianCoordObjects_ } from '../../types/game'
import { stripquotes } from '../../utils'

const TrueOrFalseCartesianImages = (props: question) => {
  const options_ = stripquotes(
    props.options
  ) as trueOrFalseCartesianCoordObjects_

  const type = getQuadrant(options_.points)

  const [newData] = useState(
    changePoints({
      correct: options_.correct,
      points: options_.points,
      type,
      length: 10
    })
  )

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex items-center justify-start flex-col mb-10">
        <div className="flex gap-2 mt-5 flex-wrap items-center justify-center">
          {options_.points.map((point, index) => {
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
              className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
            />
            <label className="ml-2">Verdadero</label>
          </div>
          <div className="flex flex-row items-center justify-center">
            <input
              type="radio"
              name="answer"
              value="false"
              className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
            />
            <label className="ml-2">Falso</label>
          </div>
        </div>
      </form>
    </>
  )
}

export default TrueOrFalseCartesianImages
