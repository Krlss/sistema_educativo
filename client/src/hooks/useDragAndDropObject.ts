import { shuffleArray, AddKeyToObj } from '../utils'
import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { getRamdonArrayColors } from '../constants/colors'

import { DataInterface } from '../types/DragAndDropImages'
import { getCoorValues } from '../utils/CartesianCoordinate'
import { typeCartesian } from '../types/CartesianCoordinate'
import { DragAndDropChooseText_ } from '../types/game'

const useDragAndDropObject = ({
  options,
  typeCartesian
}: {
  options: DragAndDropChooseText_[]
  typeCartesian: typeCartesian
}) => {
  const colors = getRamdonArrayColors(options.length)
  const newOptions = options.map((option, index) => {
    return {
      ...option,
      color: colors[index]
    }
  })
  const [options_, setOptions] = useState<DataInterface[]>(
    AddKeyToObj(shuffleArray(newOptions))
  )

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

      setOptions([...options_, removed])
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options_]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  const removeAnswer = (key: string) => {
    const newOpciones = [...options_]

    const index = newOpciones.findIndex(item => item.key === key)

    if (index !== -1) {
      const [removed] = newOpciones.splice(index, 1)
      removed.responseX = undefined
      removed.responseY = undefined
      setOptions([...newOpciones, removed])
    }
  }

  return {
    options_,
    onDragEnd,
    removeAnswer
  }
}

export default useDragAndDropObject
