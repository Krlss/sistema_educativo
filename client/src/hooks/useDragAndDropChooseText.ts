import { useState } from 'react'
import {
  DataInterface,
  ReturnVerifyDragAndDropChooseTextProps,
  VerifyDragAndDropChooseTextProps,
  DataInterfaceOriginal
} from '../types/DragAndDropChooseText'
import { DropResult } from 'react-beautiful-dnd'
import { shuffleArray } from '../utils'

const useDragAndDropChooseText = (defaultData: DataInterfaceOriginal) => {
  const [options, setOptions] = useState<DataInterface[]>(
    shuffleArray(defaultData.options)
  )
  const [respuestas, setRespuestas] = useState<
    VerifyDragAndDropChooseTextProps[]
  >(Array(options.length).fill(undefined))

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta-\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = options.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]
      const newAnswers = [...respuestas]
      newAnswers[parseInt(index)] = {
        response_user: defaultData.options[parseInt(index)].option,
        text: removed.text,
        original: removed.option
      }
      setRespuestas(newAnswers)

      if (!options.length) {
        const response = verifyDragAndDropChooseText(newAnswers)
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
      option: respuestas[index]?.original,
      text: respuestas[index]?.text
    }
    newOpciones.push(oldRespuesta)
    setOptions(newOpciones)

    const newAnswers = [...respuestas]
    newAnswers[index] = undefined as any
    setRespuestas(newAnswers)
  }

  const verifyDragAndDropChooseText = (
    array: VerifyDragAndDropChooseTextProps[]
  ) => {
    return array.reduce(
      (acc, current, _, array) => {
        if (current.response_user === current.original) acc.correct++
        return {
          ...acc,
          qualification: acc.correct / array.length,
          new_array_options: [
            ...acc.new_array_options,
            { ...current, correct: current.response_user === current.original }
          ]
        }
      },
      {
        new_array_options: [],
        qualification: 0,
        correct: 0
      } as ReturnVerifyDragAndDropChooseTextProps
    )
  }

  return {
    options,
    respuestas,
    onDragEnd,
    removeAnswer
  }
}

export default useDragAndDropChooseText
