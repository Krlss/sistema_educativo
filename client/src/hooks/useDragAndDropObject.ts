import { shuffleArray, AddKeyToObj } from '../utils'
import { useState, useEffect, useContext } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { getRamdonArrayColors } from '../constants/colors'

import { DataInterface } from '../types/DragAndDropImages'
import { getCoorValues } from '../utils/CartesianCoordinate'
import { typeCartesian } from '../types/CartesianCoordinate'
import { DragAndDropChooseText_, question } from '../types/game'
import GeneralContext from '../contexts/context'

const useDragAndDropObject = ({
  options,
  typeCartesian,
  question
}: {
  options: DragAndDropChooseText_[]
  typeCartesian: typeCartesian
  question: question
}) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const colors = getRamdonArrayColors(options.length)
  const newOptions = AddKeyToObj(
    shuffleArray(
      options.map((option, index) => {
        return {
          ...option,
          color: colors[index]
        }
      })
    )
  ) as DataInterface[]
  const [options_, setOptions] = useState<DataInterface[]>(newOptions)
  const [response, setResponse] = useState<DataInterface[]>([])

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta.\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = options_.splice(source.index, 1) as DataInterface[]
      const x = destination.droppableId.split('.')[1]
      const y = destination.droppableId.split('.')[2]

      const { valueX, valueY } = getCoorValues({
        x: Number(x),
        y: Number(y),
        type: typeCartesian,
        length: 5
      })

      removed.responseX = valueX
      removed.responseY = valueY
      removed.isCorrect = removed.x === valueX && removed.y === valueY

      setResponse([...response, removed])
      setOptions([...options_])
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options_]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  const verifyFinal = (array: DataInterface[]) => {
    return array.reduce(
      (acc, current, _, array) => {
        if (current.isCorrect) acc.correct++
        return {
          ...acc,
          note: Number((acc.correct / array.length).toFixed(2))
        }
      },
      {
        note: 0,
        correct: 0
      }
    )
  }

  const removeAnswer = (key: string) => {
    const newOpciones = [...response]

    const index = newOpciones.findIndex(item => item.key === key)

    if (index !== -1) {
      const [removed] = response.splice(index, 1)
      removed.responseX = undefined
      removed.responseY = undefined
      removed.isCorrect = false
      setOptions([...options_, removed])
    }
  }

  useEffect(() => {
    if (!options_.length) {
      const correct = verifyFinal(response)
      const newQuestion = {
        id: question.id,
        nota: correct.note,
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
    } else {
      updatedQuestion({
        id: question.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [response])

  return {
    options_,
    onDragEnd,
    removeAnswer,
    response
  }
}

export default useDragAndDropObject
