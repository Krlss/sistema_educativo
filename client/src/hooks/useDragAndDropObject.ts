import { shuffleArray, AddKeyToObj } from '../utils'
import { useState, useEffect } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { DataInterface } from '../types/DragAndDropImages'
import { getCoorValues } from '../utils/CartesianCoordinate'
import { typeCartesian } from '../types/CartesianCoordinate'

const useDragAndDropObject = (
  data: { options: DataInterface[] },
  typeCartesian: typeCartesian
) => {
  const [options, setOptions] = useState<DataInterface[]>([])

  useEffect(() => {
    setOptions(AddKeyToObj(shuffleArray(data.options)))
  }, [])

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta.\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = options.splice(source.index, 1) as DataInterface[]
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

      setOptions([...options, removed])
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  const removeAnswer = (key: string) => {
    const newOpciones = [...options]

    const index = newOpciones.findIndex(item => item.key === key)

    if (index !== -1) {
      const [removed] = newOpciones.splice(index, 1)
      removed.responseX = undefined
      removed.responseY = undefined
      setOptions([...newOpciones, removed])
    }
  }

  return {
    options,
    onDragEnd,
    removeAnswer
  }
}

export default useDragAndDropObject
