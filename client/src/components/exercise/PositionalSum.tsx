import { useState } from 'react'
import { sortData } from '../../utils'
import QuestionTitle from '../title/questionTitle'

const data = {
  title: 'Realizar la siguiente suma de valores posicionales',
  value: [900, 90000, 6, 7000, 70]
}

const PositionalSum = () => {
  const [value, setValue] = useState(sortData(data.value))
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle title={data.title} />
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
