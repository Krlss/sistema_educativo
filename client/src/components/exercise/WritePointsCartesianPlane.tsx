import { useState } from 'react'
import CartesianPlane from '../CartesianPlane'
import { objectCartesian } from '../../types/CartesianCoordinate'
import QuestionTitle from '../title/questionTitle'
import { namePoints } from '../../constants/CartesianConstants'

const WritePointsCartesianPlane = ({
  points
}: {
  points: objectCartesian[]
}) => {
  const [pointsState, setPointsState] = useState(points)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title="9. Escriba las coordenadas de estos objetos" />
          <div className="flex gap-2 mt-5 flex-wrap items-center justify-center">
            {points.map((point, index) => {
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
          <div className="relative flex items-center justify-center mt-8">
            <CartesianPlane points={points} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WritePointsCartesianPlane
