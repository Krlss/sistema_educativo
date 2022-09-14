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

const data = {
  pregunta:
    'Ordene de manera correcta la escritura de cada números naturales de tres cifras:',
  tipo: 'ordenar',
  opciones: [
    {
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

interface DataInterface {
  opcion: string
  texto: string
}

const DragAndDropChooseText = () => {
  const [opciones, setOpciones] = useState(data2)
  const [respuestas, setRespuestas] = useState(
    Array(opciones.length).fill(undefined)
  )
  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta-\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = opciones.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]
      const newRespuestas = [...respuestas]
      newRespuestas[parseInt(index)] = removed
      setRespuestas(newRespuestas)
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...opciones]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOpciones(items)
    }
  }

  const removeRespuesta = (index: number) => {
    const newOpciones = [...opciones]
    newOpciones.push(respuestas[index])
    setOpciones(newOpciones)

    const newRespuestas = [...respuestas]
    newRespuestas[index] = undefined
    setRespuestas(newRespuestas)
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
            <div className="flex flex-col">
              {data.opciones.map((item, index) => (
                <div key={index} className="flex items-center gap-2 m-1">
                  <Droppable
                    droppableId={`respuesta-${index}`}
                    direction="horizontal"
                    isDropDisabled={!!respuestas[index]}>
                    {(provided, snapshot) => (
                      <div
                        className={`h-10 ${
                          !respuestas[index] ? 'border border-blue-300' : ''
                        } rounded min-w-[120px] ${
                          snapshot.isDraggingOver && 'bg-gray-100 border-2'
                        }`}
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {respuestas[index] && (
                          <div
                            key={respuestas[index]?.opcion}
                            className={
                              'bg-blue-500 shadow rounded px-3 py-2 text-white flex items-center justify-around gap-2'
                            }>
                            <button
                              className="hover:text-red-400 text-white"
                              onClick={() => removeRespuesta(index)}>
                              <Icon viewBox="16 16">
                                <CrossIcon />
                              </Icon>
                            </button>
                            {respuestas[index]?.opcion}
                          </div>
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <h2 key={item.opcion} className="text-sm">
                    {item.texto}
                  </h2>
                </div>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropChooseText
