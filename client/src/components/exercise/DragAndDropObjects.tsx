import { shuffleArray, AddKeyToObj } from '../../utils'
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
import { DataInterface } from '../../types/DragAndDropImages'
import { getCoorValues } from '../../utils/CartesianCoordinate'
import { typeCartesian } from '../../types/CartesianCoordinate'
import QuadrantDragAndDrop from '../CartesianPlane/QuadrantDragAndDrop'

const data = {
  title:
    'Analice el plano cartesiano y Coloque la imagen en el punto que pertenecen cada par ordenado:',
  type: 'plano_cartesiano_drag_and_drop',
  options: [
    {
      x: 2,
      y: 2,
      url: 'https://cdn-icons-png.flaticon.com/512/781/781291.png'
    },
    {
      x: 5,
      y: 5,
      url: 'https://cdn-icons-png.flaticon.com/512/1507/1507168.png'
    },
    {
      x: 3,
      y: 4,
      url: 'https://cdn-icons-png.flaticon.com/512/2333/2333094.png'
    },
    {
      x: 3,
      y: 4,
      url: 'https://cdn-icons-png.flaticon.com/512/2333/2333094.png'
    },
    {
      x: 3,
      y: 4,
      url: 'https://cdn-icons-png.flaticon.com/512/2333/2333094.png'
    },
    {
      x: 3,
      y: 4,
      url: 'https://cdn-icons-png.flaticon.com/512/2333/2333094.png'
    },
    {
      x: 3,
      y: 4,
      url: 'https://cdn-icons-png.flaticon.com/512/2333/2333094.png'
    }
  ]
}
const data2 = shuffleArray(data.options) as DataInterface[]
const data3 = AddKeyToObj(data2) as DataInterface[]

const DragAndDropChooseText = ({
  typeCartesian
}: {
  typeCartesian: typeCartesian
}) => {
  const [options, setOptions] = useState(data3)

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

  console.log(options)

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
                  {options.map((item, index) => {
                    return (
                      item.responseX === undefined &&
                      item.responseY === undefined && (
                        <Draggable
                          key={item.key}
                          draggableId={item.key}
                          index={index}>
                          {(provided, snapshot) => (
                            <div
                              className={`bg-yellow-page shadow rounded p-2 m-1 text-black flex flex-col items-center gap-1 ${
                                snapshot.isDragging ? 'bg-yellow2-page' : ''
                              }`}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}>
                              <div className="flex items-center justify-center gap-2">
                                <Icon viewBox="24 24">
                                  <DragIcon />
                                </Icon>
                                <img
                                  src={item.url}
                                  alt=""
                                  className="w-6 h-6"
                                />
                              </div>
                              <span className="text-xs">
                                ({item.x}, {item.y})
                              </span>
                            </div>
                          )}
                        </Draggable>
                      )
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <div className="relative flex items-center justify-center">
              <div>
                {[...Array(6)].map((_, y) => {
                  return (
                    <div
                      key={y}
                      className="flex items-center justify-center bg-transparent">
                      {[...Array(6)].map((_, x) => {
                        const { valueX, valueY } = getCoorValues({
                          x,
                          y,
                          type: typeCartesian,
                          length: 5
                        })
                        return (
                          <div
                            key={x}
                            className="w-16 h-16 flex items-center justify-center bg-transparent">
                            <Droppable
                              droppableId={`respuesta.${x}.${y}`}
                              direction="horizontal"
                              isDropDisabled={
                                options.find(
                                  item =>
                                    item.responseX === valueX &&
                                    item.responseY === valueY
                                ) !== undefined
                              }>
                              {(provided, snapshot) => (
                                <div
                                  className={`w-full h-full flex items-center justify-center ${
                                    snapshot.isDraggingOver && 'bg-gray-200/80'
                                  }`}
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}>
                                  {options.map((item, index) => {
                                    return (
                                      item?.responseX === valueX &&
                                      item?.responseY === valueY && (
                                        <Draggable
                                          key={item.key}
                                          draggableId={item.key}
                                          index={index}
                                          isDragDisabled={true}>
                                          {provided => (
                                            <div
                                              className="bg-yellow-page/70 flex flex-col items-center justify-center gap-1 w-[90%] h-[90%] rounded-full"
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              ref={provided.innerRef}>
                                              <img
                                                src={item.url}
                                                alt=""
                                                className="w-6 h-6"
                                              />
                                              <button
                                                className="hover:text-red-400 text-black"
                                                onClick={() =>
                                                  removeAnswer(item.key)
                                                }>
                                                <Icon viewBox="16 16">
                                                  <CrossIcon />
                                                </Icon>
                                              </button>
                                            </div>
                                          )}
                                        </Draggable>
                                      )
                                    )
                                  })}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              <QuadrantDragAndDrop type={typeCartesian} />
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropChooseText
