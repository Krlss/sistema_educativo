import { useState } from 'react'
import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { namePoints } from '../../constants/CartesianConstants'
import { question, writePointsCoordinatePlane_ } from '../../types/game'
import { stripquotes } from '../../utils'

const WritePointsCartesianPlane = (props: question) => {
  const options_ = stripquotes(props.options) as writePointsCoordinatePlane_[]
  const [pointsState, setPointsState] = useState(options_)

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex gap-2 mt-2 flex-wrap items-center justify-start">
        {pointsState.map((point, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-2">
              {point.url && (
                <img src={point.url} alt="point" className="w-8 h-8" />
              )}
              {!point.url && <p>{namePoints[index]}</p>}

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
      <div className="relative flex items-center justify-center mt-2">
        <CartesianPlane points={pointsState} />
      </div>
    </>
  )
}

export default WritePointsCartesianPlane
