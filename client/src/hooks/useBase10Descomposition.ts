import React, { useState } from 'react'
import { convertNumberToBase10 } from '../utils'

const useBase10Descomposition = (number: number) => {
  const [value_, setValue] = useState(convertNumberToBase10(number))
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = [...value_]
    newValue[index].response = e.target.value
    setValue(newValue)
  }

  return { value_, handleChange, setValue }
}

export default useBase10Descomposition
