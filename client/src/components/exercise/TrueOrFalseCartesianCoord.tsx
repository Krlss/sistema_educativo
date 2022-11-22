import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalseCartesianCoord_ } from '../../types/game'
import { stripquotes } from '../../utils'

const TrueOrFalseCartesianCoord = (props: question) => {
  const options_ = stripquotes(props.options) as trueOrFalseCartesianCoord_
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <form>
        <div className="flex items-center justify-start mb-10">
          <div className="flex flex-col items-start">
            <CartesianPlane points={options_.points} />
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
        </div>
      </form>
    </>
  )
}

export default TrueOrFalseCartesianCoord
