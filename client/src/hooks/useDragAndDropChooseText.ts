import { useState, useContext } from 'react'
import GeneralContext from '../contexts/context'

import {
  ReturnVerifyDragAndDropChooseTextProps,
  VerifyDragAndDropChooseTextProps,
  DataInterface
} from '../types/DragAndDropChooseText'
import { DropResult } from 'react-beautiful-dnd'
import { shuffleArray } from '../utils'
import { getRamdonArrayColors } from '../constants/colors'
import { question } from '../types/game'

const useDragAndDropChooseText = ({
  defaultData,
  question
}: {
  defaultData: DataInterface[]
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const colors = getRamdonArrayColors(defaultData.length)

  const newOptions = defaultData.map((option, index) => {
    return {
      ...option,
      color: colors[index]
    }
  })

  const lengthText = defaultData.filter(option => option.text).length

  interface IOptions {
    value: string
    text: string
    color?: string
    key: string
  }

  const [options, setOptions] = useState<IOptions[]>(shuffleArray(newOptions))
  const [anwers, setAnswers] = useState<VerifyDragAndDropChooseTextProps[]>(
    Array(lengthText).fill(undefined)
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta-\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = options.splice(source.index, 1) as {
        value: string
        text: string
        color?: string
        key: string
      }[]
      const index = destination.droppableId.split('-')[1]
      const newAnswers = [...anwers]
      newAnswers[parseInt(index)] = {
        response: removed.value,
        text: removed.text,
        color: removed.color,
        original: defaultData[parseInt(index)].value,
        key: removed.key,
        isCorrect: removed.value === defaultData[parseInt(index)].value
      }
      setAnswers(newAnswers)

      const isDone = newAnswers.every(answer => answer !== undefined)
      if (isDone) {
        const response = verifyDragAndDropChooseText(newAnswers)
        if (response) {
          const newQuestion = {
            _id: question._id,
            nota: response.note,
            isDone: true,
            responseUser: JSON.stringify({ anwers: newAnswers })
          }

          const find = gameState.questions.find(
            question => question._id === newQuestion._id
          )

          if (find) {
            updatedQuestion(newQuestion)
          } else {
            setQuestion(newQuestion)
          }
        }
      }
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  const removeAnswer = (index: number) => {
    const newOpciones = [...options]
    const oldRespuesta = {
      value: anwers[index]?.response,
      text: anwers[index]?.text,
      color: anwers[index]?.color,
      key: anwers[index]?.key,
      isCorrect: false
    }
    newOpciones.push(oldRespuesta)
    setOptions(newOpciones)

    const newAnswers = [...anwers]
    newAnswers[index] = undefined as any
    setAnswers(newAnswers)
  }

  const verifyDragAndDropChooseText = (
    array: VerifyDragAndDropChooseTextProps[]
  ) => {
    return array.reduce(
      (acc, current, _, array) => {
        if (current.isCorrect) acc.correct++
        return {
          ...acc,
          note: Number((acc.correct / array.length).toFixed(2)),
          new_array_options: [
            ...acc.new_array_options,
            { ...current, correct: current.isCorrect }
          ]
        }
      },
      {
        new_array_options: [],
        note: 0,
        correct: 0
      } as ReturnVerifyDragAndDropChooseTextProps
    )
  }

  return {
    options,
    anwers,
    onDragEnd,
    removeAnswer
  }
}

export default useDragAndDropChooseText
