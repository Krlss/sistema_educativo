import React, { useState } from 'react'
import { convertNumberToBase10 } from '../../utils'
const data = {
  title: 'Descomposición en base 10 de la siguiente cifra:',
  value: 28003731
}
const Base10Descomposition = () => {
  const [value, setValue] = useState(convertNumberToBase10(data.value))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = [...value]
    newValue[index].response = e.target.value
    setValue(newValue)
  }
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-xl font-bold text-left">
            Descomposición en base 10 de la siguiente cifra:
            <span className="text-gray-600"> {data.value}</span>
          </h1>
          <div className="flex md:flex-row flex-col gap-2 mt-2">
            {value.map((item, index) => (
              <input
                className="border border-gray-400 rounded px-2 py-1 w-full"
                key={index}
                onChange={e => handleChange(e, index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Base10Descomposition
