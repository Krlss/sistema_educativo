import { shuffleArray, AddKeyToArrayItems } from '../utils'
import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { getRamdonArrayColors } from '../constants/colors'

const useOrderOneDigitNumbers = (props: {
  numbers: string[]
  type: 'order' | 'order_max'
}) => {
  const colors = getRamdonArrayColors(props.numbers.length)
  const newOptions = AddKeyToArrayItems(shuffleArray(props.numbers)).map(
    (option, index) => {
      return {
        ...option,
        color: colors[index]
      }
    }
  )
  const [options, setOptions] = useState(newOptions)

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const newOptions = [...options]
    const [removed] = newOptions.splice(source.index, 1)
    newOptions.splice(destination.index, 0, removed)
    setOptions(newOptions)
  }
  return {
    options,
    onDragEnd
  }
}

export default useOrderOneDigitNumbers
