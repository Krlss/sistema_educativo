import React, { useState } from 'react'
import { getLengthOfValues } from '../utils/PositionalTable'
import { table } from '../constants/PositionalTable'
import { onlyNumber } from '../constants/regex'

interface IPositionalTable {
  value: string
  response: string[]
}

const usePositionalTable = (data: IPositionalTable[]) => {
  const lengthOfValues = getLengthOfValues({ options: data })
  let newTable = table.slice(0, 6).reverse()

  if (lengthOfValues > 6) {
    newTable = table.slice(0, lengthOfValues).reverse()
  }

  const [values, setValues] = useState(data)

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

  return {
    values,
    newTable,
    handleChange,
    lengthOfValues
  }
}

export default usePositionalTable
