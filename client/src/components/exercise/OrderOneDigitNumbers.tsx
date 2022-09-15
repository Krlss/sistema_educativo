import {
  shuffleArray,
  CreateArrayFromText,
  AddKeyToArrayItems
} from '../../utils'
import { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'

const data = {
  id: 10,
  pregunta:
    'Ordena los dígitos 4, 9, 8 y 6 para formar el número más pequeño posible.',
  respuesta: '468924512'
}

// create a array of numbers
const data3 = shuffleArray(CreateArrayFromText(data.respuesta))
const data2 = AddKeyToArrayItems(data3)

const OrderOneDigitNumbers = () => {
  const [opciones, setOpciones] = useState(data2)

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const newOpciones = [...opciones]
    const [removed] = newOpciones.splice(source.index, 1)
    newOpciones.splice(destination.index, 0, removed)
    setOpciones(newOpciones)
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>1. {data.pregunta}</h1>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="items" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className={`flex flex-wrap justify-start ${
                    snapshot.isDraggingOver && 'bg-gray-200'
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {opciones.map((item, index) => (
                    <Draggable
                      key={item.key}
                      draggableId={item.key}
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
                          {item.value}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default OrderOneDigitNumbers
