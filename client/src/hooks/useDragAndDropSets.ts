import { shuffleArray, stripquotes, getFlatArraySets } from '../utils'
import { useState, useEffect, useContext } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import GeneralContext from '../contexts/context'

import { DataInterface } from '../types/DragAndDropSet'
import { question, dragAndDropSets_ } from '../types/game'

interface iVerify {
  correct: number
  note: number
}

interface iRespuesta {
  text: string
  value: string
  color?: string
}

const useDragAndDropSets = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const { sets } = stripquotes(props.options) as dragAndDropSets_
  const options = getFlatArraySets({ sets })

  const [options_, setOptions] = useState(shuffleArray(options))
  const [lenghtOptions_] = useState(options_.filter(e => e.isValid).length)
  const [answer, setAnswer] = useState<any>(
    Array(sets.filter(e => e.title).length).fill([])
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    const regex = /respuesta-\d+/g
    const destid = destination.droppableId.match(regex)
    const sourceid = source.droppableId.match(regex)

    // de un conjunto a otro conjunto
    if (destid && sourceid) {
      const [removed] = answer[source.droppableId.split('-')[1]].splice(
        source.index,
        1
      )
      removed.isCorrect = sets[Number(destid[0].split('-')[1])].options.some(
        (item: iRespuesta) => item.value === removed.value
      )
      answer[destination.droppableId.split('-')[1]].splice(
        destination.index,
        0,
        removed
      )
      setAnswer([...answer])

      return
    }

    // del conjunto general a un conjunto especifico
    if (destid) {
      const [removed] = options_.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]

      const newAnswers = [...answer[Number(index)]]

      newAnswers.push({
        ...removed,
        isCorrect: sets[Number(index)].options.some(
          (item: iRespuesta) => item.value === removed.value
        )
      })

      answer[index] = newAnswers

      setAnswer([...answer])
      return
    }

    // del conjunto especifico al conjunto general
    if (destination.droppableId === 'items' && sourceid) {
      const [removed] = answer[source.droppableId.split('-')[1]].splice(
        source.index,
        1
      )
      removed.isCorrect = false
      options_.splice(destination.index, 0, removed)
      setOptions([...options_])
      return
    }

    // re ordenar el conjunto general
    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options_]
      const [reorderedItem] = items.splice(source.index, 1)
      reorderedItem.isCorrect = false
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  useEffect(() => {
    const someAnswer = answer.some((item: any) => item.length)

    if (someAnswer) {
      const correct = answer.reduce(
        (acc: iVerify, current: [], set: number) => {
          const correct = current.filter((item: any) => item.isCorrect).length
          if (correct) {
            acc.correct = acc.correct + correct
          }
          return {
            ...acc,
            note: Number((acc.correct / lenghtOptions_).toFixed(2))
          }
        },
        {
          correct: 0,
          note: 0
        }
      )

      const newQuestion = {
        id: props.id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ answer })
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
        id: props.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [answer])

  return {
    options_,
    answer,
    onDragEnd,
    sets
  }
}

export default useDragAndDropSets
