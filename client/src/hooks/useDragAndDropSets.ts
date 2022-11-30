import { shuffleArray, stripquotes, getFlatArraySets } from '../utils'
import { useState, useEffect, useContext } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import GeneralContext from '../contexts/context'

import { DataInterface } from '../types/dragAndDropSet'
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
  const [lenghtOptions_] = useState(options_.length)
  const [answer, setAnswer] = useState<any>(Array(sets.length).fill([]))

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
        ...removed
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
      options_.splice(destination.index, 0, removed)
      setOptions([...options_])
      return
    }

    // re ordenar el conjunto general
    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options_]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  useEffect(() => {
    if (!options_.length) {
      const correct = answer.reduce(
        (acc: iVerify, current: [], set: number) => {
          const arr = current.map((item: iRespuesta) => item)
          const correct = arr.filter((item: iRespuesta) => {
            return sets[set].options.some(
              (i: iRespuesta) => item.value === i.value
            )
          }).length

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
        _id: props._id,
        nota: correct.note,
        isDone: true,
        responseUser: JSON.stringify({ answer })
      }

      const find = gameState.questions.find(
        question => question._id === newQuestion._id
      )

      if (find) {
        updatedQuestion(newQuestion)
      } else {
        setQuestion(newQuestion)
      }
    } else {
      updatedQuestion({
        _id: props._id,
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
