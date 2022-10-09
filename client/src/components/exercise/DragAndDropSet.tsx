import { shuffleArray } from '../../utils'
import { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
import {
  DataInterface,
  ReturnVerifyDragAndDropSetProps,
  VerifyDragAndDropSetProps
} from '../../types/DragAndDropSet'

const data = {
  title: 'Lleve los números a cada conjunto',
  sets: [
    {
      title: 'Números mayores a 700 000',
      options: [
        { text: '700 001', value: '700001' },
        { text: '800 020', value: '800020' },
        { text: '900 030', value: '900030' }
      ]
    },
    {
      title: 'Números menores a 500 000',
      options: [
        { text: '499 600', value: '499600' },
        { text: '499 000', value: '499000' },
        { text: '400 999', value: '400999' }
      ]
    }
  ],
  options: [
    {
      value: '800020',
      text: '800 020'
    },
    {
      value: '499000',
      text: '499 000'
    },
    {
      value: '400999',
      text: '400 999'
    },
    {
      value: '900030',
      text: '900 030'
    },
    {
      value: '499600',
      text: '499 600'
    },
    {
      value: '700001',
      text: '700 001'
    }
  ]
}
const data2 = shuffleArray(data.options) as DataInterface[]

const DragAndDropSet = () => {
  const [options, setOptions] = useState(data2)
  const [respuestas, setRespuestas] = useState<any>(
    Array(data.sets.length).fill([])
  )

  console.log(respuestas)

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
      const [removed] = options.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]

      const newAnswers = [...respuestas[index]]

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
      options.splice(destination.index, 0, removed)
      setOptions([...options])
      return
    }

    // re ordenar el conjunto general
    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>1. {data.title}</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="items" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className={`flex flex-wrap justify-start ${
                    snapshot.isDraggingOver && 'bg-gray-200'
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {options.map((item, index) => (
                    <Draggable
                      key={item.value}
                      draggableId={item.value}
                      index={index}>
                      {(provided, snapshot) => (
                        <div
                          className={`bg-blue-500 shadow rounded px-3 py-2 m-1 text-white flex items-center justify-around gap-2 ${
                            snapshot.isDragging ? 'bg-blue-700' : ''
                          }`}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <Icon viewBox="24 24" fill="white">
                            <DragIcon />
                          </Icon>
                          {item.text}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="flex gap-4">
              {data.sets.map((item, set) => (
                <div key={set} className="flex flex-col items-center gap-2 m-1">
                  <span>{item.title}</span>
                  <Droppable droppableId={`respuesta-${set}`}>
                    {(provided, snapshot) => (
                      <div
                        className={`h-56 min-h-full border border-blue-300 rounded min-w-full overflow-y-auto ${
                          snapshot.isDraggingOver && 'bg-gray-100'
                        }`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {respuestas[set].map(
                          (item: DataInterface, index: number) => (
                            <Draggable
                              key={item.value}
                              draggableId={item.value}
                              index={index}>
                              {(provided, snapshot) => (
                                <div
                                  key={index}
                                  className={`shadow px-3 py-2 text-white flex items-center justify-around m-2 ${
                                    snapshot.isDragging
                                      ? 'bg-blue-700'
                                      : 'bg-blue-500'
                                  }`}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}>
                                  <Icon viewBox="24 24" fill="white">
                                    <DragIcon />
                                  </Icon>
                                  {item.value}
                                </div>
                              )}
                            </Draggable>
                          )
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropSet
