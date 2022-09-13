import { shuffleArray } from '../../utils'
import { useState } from 'react'
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd'
import DragIcon from '../../components/icons/drag'
import Icon from '../../components/icons'
import shortid from 'shortid'

const data = {
  pregunta:
    'Ordene de manera correcta la escritura de cada números naturales de tres cifras:',
  tipo: 'ordenar',
  opciones: [
    {
      id: 11,
      opcion: '67005',
      texto: 'SESENTA Y SIETE MIL CINCO'
    },
    {
      opcion: '30001',
      texto: 'TREINTA MIL UNO'
    },
    {
      opcion: '78569',
      texto: 'SETENTA Y OCHO MIL QUINIENTOS SESENTA Y NUEVE'
    },
    {
      opcion: '40608',
      texto: 'CUARENTA MIL SESENTA Y OCHO'
    },
    {
      opcion: '78976',
      texto: 'SETENTA Y OCHO MIL NOVECIENTOS SETENTA Y SEIS'
    },
    {
      opcion: '34567',
      texto: 'TREINTA Y CUATRO MIL QUINIENTOS SESENTA Y SIETE'
    }
  ]
}

const data2 = shuffleArray(data.opciones)

const DragAndDropChoose = () => {
  const [opciones, setOpciones] = useState(data2)

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    console.log({ destination, source })

    // dropped outside the list
    if (!destination) return

    // drop within the same list but in a different position

    const items = Array.from(opciones)
    const [reorderedItem] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderedItem)
    setOpciones(items)
  }
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <h1>1. {data.pregunta}</h1>
          <DragDropContext onDragEnd={onDragEnd} key={shortid.generate()}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <div
                  className={`flex flex-wrap justify-start ${
                    snapshot.isDraggingOver && 'bg-gray-200'
                  }`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {opciones.map((item, index) => (
                    <Draggable
                      key={item.opcion}
                      draggableId={item.opcion}
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
                          {item.opcion}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <Droppable droppableId="droppable" direction="vertical">
            {(provided, snapshot) => (
              <div
                className={`flex flex-wrap justify-start ${
                  snapshot.isDraggingOver && 'bg-gray-200'
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {opciones.map((item, index) => (
                  <Draggable
                    key={item.opcion}
                    draggableId={item.opcion}
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
                        {item.opcion}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropChoose
