import { shuffleArray } from '../../utils'
import React, { useState } from 'react'
const data_ = {
  title: '¿Cómo se leen los siguientes números?:',
  options: [
    {
      text: '415874',
      value: 'cuatrocientos quince mil ochocientos setenta y cuatro'
    },
    {
      text: '924568',
      value: 'novecientos veinticuatro mil quinientos sesenta y ocho'
    },
    {
      text: '115987',
      value: 'ciento quince mil novecientos ochenta y siete'
    }
  ]
}
const data2 = shuffleArray(data_.options)

const WriteValueFromText = () => {
  const [data, setData] = useState(data2)
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...data]
    newData[index].response = e.target.value
    setData(newData)
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-start justify-center flex-col w-4/5 mx-auto">
          <h1>12. {data_.title}</h1>
          <div className="w-full">
            {data2.map((item, index) => (
              <div
                key={index}
                className="flex border border-gray-400 lg:flex-row flex-col">
                <div className="bg-yellow-page p-2 text-left border-r border-gray-400 flex items-center lg:basis-32">
                  <p className="font-medium break-words">{item.text}</p>
                </div>
                <div className="w-full">
                  <textarea
                    className="p-2 w-full outline-none focus:border-0 bg-transparent h-full resize-none"
                    onChange={e => handleChange(e, index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteValueFromText
