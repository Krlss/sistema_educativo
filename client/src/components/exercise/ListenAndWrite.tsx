import React, { useState } from 'react'
import { NumberToText } from '../../utils/ListenAndWrite'
import Icon from '../icons'
import SpeakerIcon from '../icons/speaker'
import QuestionTitle from '../title/questionTitle'
import { ListenAndWrite_, question } from '../../types/game'
import { stripquotes } from '../../utils'
const ListenAndWrite = (props: question) => {
  const options_ = stripquotes(props.options) as ListenAndWrite_[]
  const [options, setOptions] = useState(
    props.type === 'listen_numbers'
      ? NumberToText({ array: options_ })
      : options_
  )
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target
    const newOptions = [...options]
    newOptions[index].response = value
    setOptions(newOptions)
  }
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col">
          <QuestionTitle
            title={props.title}
            index={props.index}
            subtitle={props.subtitle}
          />
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
