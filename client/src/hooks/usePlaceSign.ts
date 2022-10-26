import { useState } from 'react'

interface PlaceSignProps {
  value: number
  text: string
}

const usePlaceSign = (data: Array<Array<PlaceSignProps>>) => {
  const [option, setOptions] = useState(data)
  const [response, setResponse] = useState<Boolean[]>(
    Array(option.length).fill(undefined)
  )

  const handleChange = (
    index: number,
    operator: string,
    value1: number,
    value2: number
  ) => {
    switch (operator) {
      case '>':
        response[index] = value1 > value2
        setResponse([...response])
        break
      case '<':
        response[index] = value1 < value2
        setResponse([...response])
        break
      case '=':
        response[index] = value1 === value2
        setResponse([...response])
        break
      default:
        break
    }
  }
  return {
    option,
    response,
    handleChange
  }
}

export default usePlaceSign
