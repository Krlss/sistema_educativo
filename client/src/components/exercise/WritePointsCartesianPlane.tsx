import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { namePoints } from '../../constants/cartesianConstants'
import { question, writePointsCoordinatePlane_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { onlyNumberWithNegative } from '../../constants/regex'
import useWriteCoorCP from '../../hooks/useWriteCoorCP'

const WritePointsCartesianPlane = (props: question) => {
  const options_ = stripquotes(props.options) as writePointsCoordinatePlane_[]

  const { response, setResponse, options } = useWriteCoorCP({
    array: options_,
    question: props
  })

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="flex gap-2 mt-2 flex-wrap items-center justify-start">
        {options.map((point, index) => {
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
                  placeholder="x"
                  onChange={e => {
                    if (!onlyNumberWithNegative.test(e.target.value)) {
                      e.target.value = e.target.value.replace(/[^0-9-]/g, '')
                    }
                    const newPointsIndex = {
                      ...response[index],
                      x: Number(e.target.value)
                    }
                    const newPoints = [...response]
                    newPoints[index] = newPointsIndex
                    setResponse(newPoints)
                  }}
                />
                <input
                  type="text"
                  className="w-[75px] h-8 border border-gray-300 text-center"
                  placeholder="y"
                  onChange={e => {
                    if (!onlyNumberWithNegative.test(e.target.value)) {
                      e.target.value = e.target.value.replace(/[^0-9-]/g, '')
                    }
                    const newPointsIndex = {
                      ...response[index],
                      y: Number(e.target.value)
                    }
                    const newPoints = [...response]
                    newPoints[index] = newPointsIndex
                    setResponse(newPoints)
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className="relative flex items-center justify-center mt-2">
        <CartesianPlane points={options} />
      </div>
    </>
  )
}

export default WritePointsCartesianPlane
