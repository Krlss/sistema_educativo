import React, { useState } from 'react'
import { onlyNumber } from '../constants/regex'

const convert = (number: number) => {
  const value = []
  const numberString = number.toString()
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== '0') {
      value.push({
        response: '',
        value: numberString[i]
      })
    }
  }
  return value
}

const useNumberPositional = (number: number) => {
  const [value, setValue] = useState(convert(number))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value_ = e.target.value.replace(onlyNumber, '0')
    e.target.value = value_
    if (e.target.value.length > 1) {
      e.target.value = e.target.value[e.target.value.length - 1]
    }
    const prevInput = document.querySelector(
      `input[name="${index - 1}"]`
    ) as HTMLInputElement
    if (prevInput) {
      prevInput.focus()
    }
    setValue(
      value.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            response: e.target.value
          }
        }
        return item
      })
    )
  }
  console.log(value)
  return { value, handleChange, setValue }
}

export default useNumberPositional
