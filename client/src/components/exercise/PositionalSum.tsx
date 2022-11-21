import { useState } from 'react'
import { sortData, stripquotes } from '../../utils'
import QuestionTitle from '../title/questionTitle'
import { question, positionalSum_ } from '../../types/game'

const PositionalSum = (props: question) => {
  const options_ = stripquotes(props.options) as positionalSum_

  const [value] = useState(sortData(options_.value))
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle
            title={props.title}
            subtitle={props.subtitle}
            index={props.index}
          />
          <div className="flex flex-col mt-2 text-right">
            {value.map((value, index) => {
              return <span key={index}>{value}</span>
            })}
            <input
              type="text"
              className="text-right border border-gray-400 rounded px-2 py-1 mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PositionalSum
