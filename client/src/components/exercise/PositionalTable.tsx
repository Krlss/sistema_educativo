import React, { useState } from 'react'
import { getLengthOfValues } from '../../utils/PositionalTable'
import { table } from '../../constants/PositionalTable'
import { onlyNumber } from '../../constants/regex'
const PositionalTable = ({
  data
}: {
  data: {
    title: string
    options: {
      value: string
      response: string[]
    }[]
  }
}) => {
  const lengthOfValues = getLengthOfValues({ options: data.options })
  let newTable = table.slice(0, 6).reverse()

  if (lengthOfValues > 6) {
    newTable = table.slice(0, lengthOfValues).reverse()
  }

  const [values, setValues] = useState(data.options)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    row: number
  ) => {
    const value = e.target.value.replace(onlyNumber, '0')
    e.target.value = value

    if (e.target.value.length > 1) {
      e.target.value = e.target.value[e.target.value.length - 1]
    }

    const toIndex = row === 0 ? index + 1 : index
    const toRow = row === 0 ? lengthOfValues - 1 : row - 1

    const prevInput = document.querySelector(
      `input[name="${toIndex}-${toRow}"]`
    ) as HTMLInputElement
    if (prevInput) {
      prevInput.focus()
    }

    const newValues = [...values]
    newValues[index].response[row] = e.target.value
    setValues(newValues)
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center h-screen-calculator justify-center flex-col">
          <div>
            <h1 className="text-2xl font-bold text-left">{data.title}</h1>
            <ul>
              {data.options.map((option, index) => (
                <li key={index} className="list-disc ml-8">
                  <span className="text-2xl font-medium">{option.value}</span>
                </li>
              ))}
            </ul>
            <table className="mx-auto mt-3">
              <thead>
                <tr className="flex items-center">
                  {newTable.map((row, index) => (
                    <td
                      className="py-3 border border-gray-300 w-full text-center bg-gray-200 text-2xl font-medium"
                      key={index}>
                      {row}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {values.map((option, index) => (
                  <tr key={index} className="flex items-center">
                    {newTable.map((row, r) => (
                      <td className="border border-gray-300 w-full" key={r}>
                        <input
                          name={`${index}-${r}`}
                          className="w-full outline-red-600 focus:outline outline-3 caret-red-600 text-center py-2 text-2xl"
                          min={0}
                          autoFocus={index === 0 && r === lengthOfValues - 1}
                          onChange={e => handleChange(e, index, r)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PositionalTable
