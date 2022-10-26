import React, { useState } from 'react'
import QuestionTitle from '../title/questionTitle'

const SelectPlaceTableOption = ({
  data
}: {
  data: {
    title: string
    options: {
      text: string
      selects: {
        text: string
        correct: boolean
      }[]
      response?: string
    }[]
  }
}) => {
  const [selected, setSelected] = useState(data.options)
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newSelected = [...selected]
    newSelected[index].response =
      e.target.value === 'Selecciona una opción' ? undefined : e.target.value
    setSelected(newSelected)
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle title={data.title} />
          <div>
            {selected.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-around py-2 gap-4">
                <div className="flex items-center justify-center border border-gray-400 px-4 py-2 w-44 rounded">
                  <h1 className="font-medium text-left">{option.text}</h1>
                </div>
                <select
                  className="border border-gray-400 p-2 w-full rounded"
                  placeholder="Selecciona una opción"
                  onChange={e => handleChange(e, index)}>
                  <option value={undefined}>Selecciona una opción</option>
                  {option.selects.map((select, index) => (
                    <option key={index} value={select.text}>
                      {select.text}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectPlaceTableOption
