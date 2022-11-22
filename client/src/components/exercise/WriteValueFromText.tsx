import { shuffleArray, stripquotes } from '../../utils'
import React, { useState, useEffect } from 'react'
import QuestionTitle from '../title/questionTitle'
import { question, writeValueFromText_ } from '../../types/game'
import { getRamdonArrayColors } from '../../constants/colors'

const WriteValueFromText = (props: question) => {
  const [data, setData] = useState<writeValueFromText_[]>([])
  const [colors, setColors] = useState<string[]>([])
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const newData = [...data]
    newData[index].response = e.target.value
    setData(newData)
  }

  useEffect(() => {
    const options_ = shuffleArray(
      stripquotes(props.options)
    ) as writeValueFromText_[]
    setData(options_)
    setColors(getRamdonArrayColors(options_.length))
  }, [])

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="w-full mt-2">
        {data.map((item, index) => {
          const isNumber = !isNaN(Number(item.value))
          return (
            <div
              key={index}
              className="flex border border-gray-300 lg:flex-row flex-col">
              <div
                className={`p-2 text-left lg:border-r border-gray-300 flex items-center ${
                  !isNumber ? 'lg:w-4/12' : 'w-full'
                }`}
                style={{
                  backgroundColor: colors[index]
                }}>
                <p className="font-semibold break-words w-full text-center">
                  {item.text}
                </p>
              </div>
              <div className="w-8/12">
                <textarea
                  className="p-2 w-full outline-none focus:border-0 bg-transparent h-full resize-none bg-white"
                  onChange={e => handleChange(e, index)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WriteValueFromText
