import { shuffleArray } from '../utils'
import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { DataInterface, HookProps } from '../types/DragAndDropSet'

const useDragAndDropSets = ({ options, sets }: HookProps) => {
  const [options_, setOptions] = useState(shuffleArray(options))
  const [respuestas, setRespuestas] = useState<any>(Array(sets.length).fill([]))

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    const regex = /respuesta-\d+/g
    const destid = destination.droppableId.match(regex)
    const sourceid = source.droppableId.match(regex)

    // de un conjunto a otro conjunto
    if (destid && sourceid) {
      const [removed] = respuestas[source.droppableId.split('-')[1]].splice(
        source.index,
        1
      )
      respuestas[destination.droppableId.split('-')[1]].splice(
        destination.index,
        0,
        removed
      )
      setRespuestas([...respuestas])

      return
    }

    // del conjunto general a un conjunto especifico
    if (destid) {
      const [removed] = options_.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]

      const newAnswers = [...respuestas[Number(index)]]

      newAnswers.push({
        ...removed
      })

      respuestas[index] = newAnswers

      setRespuestas([...respuestas])

      /* if (!options.length) {
        const response = verifyDragAndDropChooseText(newAnswers)
      } */
      return
    }

    // del conjunto especifico al conjunto general
    if (destination.droppableId === 'items' && sourceid) {
      const [removed] = respuestas[source.droppableId.split('-')[1]].splice(
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
  return {
    options_,
    respuestas,
    onDragEnd
  }
}

export default useDragAndDropSets
