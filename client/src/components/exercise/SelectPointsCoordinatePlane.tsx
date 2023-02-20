import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { question, selectPointsCoordinatePlane_ } from '../../types/game'
import { stripquotes } from '../../utils'
import useSelectPointCP from '../../hooks/useSelectPointCP'

const SelectPointsCoordinatePlane = (props: question) => {
  const options_ = stripquotes(props.options) as selectPointsCoordinatePlane_

  const { newCoordinates, selectedCoordinates, gameState } = useSelectPointCP({
    options_,
    question: props
  })

  return (
    <div>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex flex-wrap w-full items-center justify-start mt-5 gap-1 mb-4">
        {newCoordinates.map((point, index) => (
          <div
            key={index}
            className={`border border-black p-1 basis-24 flex items-center justify-start ${
              gameState.next &&
              options_.correct === point.value &&
              'bg-blue-600 text-white'
            }`}>
            ({point.originalX}; {point.originalY})
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-start mt-5 mb-5">
        <div className="ml-[47.5px]">
          {[...Array(21)].map((_, y) => {
            return (
              <div key={y} className="flex items-center justify-start">
                {[...Array(21)].map((_, x) => {
                  const isExist = !!newCoordinates.find(
                    point => point.newX === x - 10 && point.newY === 10 - y
                  )
                  const find = newCoordinates.find(
                    point => point.newX === x - 10 && point.newY === 10 - y
                  )
                  return (
                    <div
                      key={x}
                      className={`w-[14.5px] h-[14.5px] flex items-center justify-center ${
                        isExist && !gameState.next && 'group cursor-pointer'
                      }`}>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-dashed border-transparent group-hover:border-gray-500 flex items-center justify-center"
                        onClick={() => {
                          if (!gameState.next) {
                            selectedCoordinates(x - 10, 10 - y)
                          }
                        }}>
                        {isExist && (
                          <div
                            className={`w-2 h-2 rounded-full ${
                              find?.selected ? 'bg-orange-600' : 'bg-blue-600'
                            } 
                            ${
                              gameState.next &&
                              find?.isCorrect &&
                              'bg-green-600'
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
  )
}

export default SelectPointsCoordinatePlane
