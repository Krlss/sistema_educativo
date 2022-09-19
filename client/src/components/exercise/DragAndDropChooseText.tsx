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
  ReturnVerifyDragAndDropChooseTextProps,
  VerifyDragAndDropChooseTextProps
} from '../../types/DragAndDropChooseText'

const data = {
  title:
    'Ordene de manera correcta la escritura de cada números naturales de tres cifras:',
  type: 'ordenar',
  options: [
    {
      option: '67005',
      text: 'SESENTA Y SIETE MIL CINCO'
    },
    {
      option: '30001',
      text: 'TREINTA MIL UNO'
    },
    {
      option: '78569',
      text: 'SETENTA Y OCHO MIL QUINIENTOS SESENTA Y NUEVE'
    },
    {
      option: '40608',
      text: 'CUARENTA MIL SEISCIENTOS OCHO'
    },
    {
      option: '78976',
      text: 'SETENTA Y OCHO MIL NOVECIENTOS SETENTA Y SEIS'
    },
    {
      option: '34567',
      text: 'TREINTA Y CUATRO MIL QUINIENTOS SESENTA Y SIETE'
    }
  ]
}
const data2 = shuffleArray(data.options) as DataInterface[]

const verifyDragAndDropChooseText = (
  array: VerifyDragAndDropChooseTextProps[]
) => {
  return array.reduce(
    (acc, current, _, array) => {
      if (current.response_user === current.original) acc.correct++
      return {
        ...acc,
        qualification: acc.correct / array.length,
        new_array_options: [
          ...acc.new_array_options,
          { ...current, correct: current.response_user === current.original }
        ]
      }
    },
    {
      new_array_options: [],
      qualification: 0,
      correct: 0
    } as ReturnVerifyDragAndDropChooseTextProps
  )
}

const DragAndDropChooseText = () => {
  const [options, setOptions] = useState(data2)
  const [respuestas, setRespuestas] = useState<
    VerifyDragAndDropChooseTextProps[]
  >(Array(options.length).fill(undefined))

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const regex = /respuesta-\d+/g
    const isRespuesta = destination.droppableId.match(regex)
    if (isRespuesta) {
      const [removed] = options.splice(source.index, 1) as DataInterface[]
      const index = destination.droppableId.split('-')[1]
      const newAnswers = [...respuestas]
      newAnswers[parseInt(index)] = {
        response_user: data.options[parseInt(index)].option,
        text: removed.text,
        original: removed.option
      }
      setRespuestas(newAnswers)

      if (!options.length) {
        const response = verifyDragAndDropChooseText(newAnswers)
      }
      return
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions(items)
    }
  }

  const removeAnswer = (index: number) => {
    const newOpciones = [...options]
    const oldRespuesta = {
      option: respuestas[index]?.original,
      text: respuestas[index]?.text
    }
    newOpciones.push(oldRespuesta)
    setOptions(newOpciones)

    const newAnswers = [...respuestas]
    newAnswers[index] = undefined as any
    setRespuestas(newAnswers)
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
                      key={item.option}
                      draggableId={item.option}
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
                          {item.option}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="flex flex-col">
              {data.options.map((item, index) => (
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
                            key={respuestas[index].response_user}
                            className={
                              'bg-blue-500 shadow rounded px-3 py-2 text-white flex items-center justify-around gap-2'
                            }>
                            <button
                              className="hover:text-red-400 text-white"
                              onClick={() => removeAnswer(index)}>
                              <Icon viewBox="16 16">
                                <CrossIcon />
                              </Icon>
                            </button>
                            {respuestas[index].response_user}
                          </div>
                        )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <h2 key={item.option} className="text-sm">
                    {item.text}
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
