import { useState, useEffect, useContext } from 'react'
import { shuffleArray, AddKeyToArrayItems, stripquotes } from '../utils'
import { DropResult } from 'react-beautiful-dnd'
import { getRamdonArrayColors } from '../constants/colors'
import GeneralContext from '../contexts/context'

import { question } from '../types/game'

const useOrderOneDigitNumbers = (props: question) => {
  const options_ = stripquotes(props.options) as {
    value: string
  }
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const colors = getRamdonArrayColors(options_.value.length)
  const array = options_.value.split('')
  const newOptions = AddKeyToArrayItems(shuffleArray(array)).map(
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

  useEffect(() => {
    const response = options.map(option => option.value).join('')

    const newQuestion = {
      _id: props._id,
      nota: options_.value === response ? 1 : 0,
      isDone: true,
      responseUser: JSON.stringify({ response })
    }

    const find = gameState.questions.find(
      question => question._id === newQuestion._id
    )

    if (find) {
      updatedQuestion(newQuestion)
    } else {
      setQuestion(newQuestion)
    }
  }, [options])

  return {
    options,
    value: options_.value,
    onDragEnd,
    gameState
  }
}

export default useOrderOneDigitNumbers
