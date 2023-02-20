import CartesianPlane from '../CartesianPlane'
import QuestionTitle from '../title/questionTitle'
import { question, trueOrFalseCartesianCoord_ } from '../../types/game'
import { stripquotes } from '../../utils'
import useTrueOrFalse from '../../hooks/useTrueOrFalse'
import Radio from '../inputs/radio'

const TrueOrFalseCartesianCoord = (props: question) => {
  const options_ = stripquotes(props.options) as trueOrFalseCartesianCoord_
  const { setAnswer, answer } = useTrueOrFalse({
    question: props,
    options_
  })
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <form>
        <div className="flex items-center justify-start">
          <div className="flex flex-col items-start">
            <CartesianPlane points={options_.points} />
            <Radio
              name="answer"
              value="true"
              onChange={e => setAnswer(e.target.value)}
              correct={answer === String(options_.correct)}
              label="Verdadero"
            />
            <Radio
              name="answer"
              value="false"
              onChange={e => setAnswer(e.target.value)}
              correct={answer === String(options_.correct)}
              label="Falso"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default TrueOrFalseCartesianCoord
