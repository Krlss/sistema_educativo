import { useState } from 'react'
import QuestionTitle from '../title/questionTitle'

const data = {
  title: 'Relaciona lo siguiente',
  columns: [
    {
      key: 'A',
      options: [
        { text: 'La cifra de las centenas es 1' },
        { text: 'Soy el mayor de todos' },
        { text: 'Soy el resultado de multiplicar 59140 x 6' },
        { text: 'Mi cifra de las unidades y centenas de millar es 6' },
        { text: 'La suma de las unidades y las centenas es 4' }
      ]
    },
    {
      key: 'B',
      options: [
        { text: '696321' },
        { text: '354840' },
        { text: '632152' },
        { text: '693006' },
        { text: '853210' }
      ]
    }
  ],
  options: [
    {
      isCorrect: true,
      value: 'A1 - B3, A2 - B5, A3 - B2, A4 - B4, A5 - B1'
    },
    {
      isCorrect: false,
      value: 'A5 - B3, A3 - B2, A3 - B1, A4 - B4, A5 - B2'
    },
    {
      isCorrect: false,
      value: 'A5 - B2, A3 - B2, A3 - B1, A4 - B4, A5 - B2'
    },
    {
      isCorrect: false,
      value: 'A5 - B4, A3 - B2, A3 - B1, A4 - B4, A5 - B2'
    }
  ]
}

const MatchNColumns = () => {
  const [selected, setSelected] = useState('')
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-start justify-center flex-col">
          <QuestionTitle title={data.title} />
          <div>
            <div className="flex lg:flex-row flex-col items-start w-full">
              {data.columns.map((column, c) => (
                <div key={c} className="flex flex-col my-2 mr-4">
                  {column.options.map((option, index) => (
                    <div key={index} className="text-left">
                      <span className="font-semibold">
                        {column.key + (index + 1)}.{' '}
                      </span>
                      {option.text}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-5">
            {data.options.map((option, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center">
                <input
                  type="radio"
                  name="answer"
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() => setSelected(option.value)}
                  className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer"
                />
                <label className="ml-2">{option.value}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchNColumns
