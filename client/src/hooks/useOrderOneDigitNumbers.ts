import { useState, useEffect, useContext } from 'react'
import { shuffleArray, AddKeyToArrayItems, stripquotes } from '../utils'
import { DropResult } from 'react-beautiful-dnd'
import { getRamdonArrayColors } from '../constants/colors'
import GeneralContext from '../contexts/context'

import { question } from '../types/game'

const useOrderOneDigitNumbers = (props: question) => {
  const options_ = stripquotes(props.options) as {
    value: string[]
    image?: string
  }
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const colors = getRamdonArrayColors(options_.value.length)
  const newOptions = AddKeyToArrayItems(shuffleArray(options_.value)).map(
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
      id: props.id,
      nota: options_.value.join('') == response ? 1 : 0,
      isDone: true,
      responseUser: JSON.stringify({ response })
    }

    const find = gameState.questions.find(
      question => question.id === newQuestion.id
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
    gameState,
    image: options_.image
  }
}

export default useOrderOneDigitNumbers
