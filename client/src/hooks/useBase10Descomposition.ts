import React, { useState } from 'react'
import { convertNumberToBase10 } from '../utils'

const useBase10Descomposition = (number: number) => {
  const [value, setValue] = useState(convertNumberToBase10(number))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = [...value]
    newValue[index].response = e.target.value
    setValue(newValue)
  }

  return { value, handleChange, setValue }
}

export default useBase10Descomposition
