import React, { useState } from 'react'
import { NumberToText } from '../../utils/ListenAndWrite'
import Icon from '../icons'
import SpeakerIcon from '../icons/speaker'

const data = {
  title: 'Escucha y escribe los siguientes números',
  type: 'numbers',
  options: [
    { text: '521489' },
    { text: '254897' },
    { text: '126504' },
    { text: '625301' }
  ]
}
const ListenAndWrite = () => {
  const [options, setOptions] = useState(NumberToText({ array: data.options }))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const newOptions = [...options]
    newOptions[index].response = value
    setOptions(newOptions)
  }
  console.log(options)
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <div>
            <h1 className="text-2xl font-bold text-left">{data.title}</h1>
          </div>
          <div>
            {options.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 my-2">
                <input
                  className="border border-yellow-page p-2 rounded outline-none"
                  onChange={e => handleChange(e, index)}
                />
                <button
                  className="flex items-center justify-center"
                  onClick={() => {
                    const msg = new SpeechSynthesisUtterance(option.text)
                    window.speechSynthesis.speak(msg)
                  }}>
                  <Icon
                    viewBox="64 64"
                    className="text-gray-600"
                    width={20}
                    height={20}
                    style={{
                      // rotate: '90deg',
                      transform: 'rotate(180deg)'
                    }}>
                    <SpeakerIcon />
                  </Icon>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListenAndWrite
