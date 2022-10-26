import { DragDropContext } from 'react-beautiful-dnd'
import { getCoorValues } from '../../utils/CartesianCoordinate'
import { typeCartesian } from '../../types/CartesianCoordinate'
import QuadrantDragAndDrop from '../CartesianPlane/QuadrantDragAndDrop'

import ObjectDraggable from '../dragAndDrop/objectDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import ObjectContectDroppable from '../dragAndDrop/objectContectDroppable'
import ObjectDraggableResponse from '../dragAndDrop/objectDraggableResponse'

import useDragAndDropObject from '../../hooks/useDragAndDropObject'
import { DataInterface } from '../../types/DragAndDropImages'
import QuestionTitle from '../title/questionTitle'

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
} as {
  title: string
  type: string
  options: DataInterface[]
}

const DragAndDropChooseText = ({
  typeCartesian
}: {
  typeCartesian: typeCartesian
}) => {
  const { onDragEnd, options, removeAnswer } = useDragAndDropObject(
    data,
    typeCartesian
  )

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title={data.title} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ContentDroppable droppableId="items" direction="horizontal">
              {options.map((item, index) => {
                return (
                  item.responseX === undefined &&
                  item.responseY === undefined && (
                    <ObjectDraggable
                      key={item.key}
                      draggableId={item.key}
                      index={index}
                      item={item}
                    />
                  )
                )
              })}
            </ContentDroppable>
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
                          <ObjectContectDroppable
                            key={x}
                            direction="horizontal"
                            droppableId={`respuesta.${x}.${y}`}
                            isDropDisabled={
                              options.find(
                                item =>
                                  item.responseX === valueX &&
                                  item.responseY === valueY
                              ) !== undefined
                            }>
                            {options.map((item, index) => {
                              return (
                                item?.responseX === valueX &&
                                item?.responseY === valueY && (
                                  <ObjectDraggableResponse
                                    key={item.key}
                                    draggableId={item.key}
                                    index={index}
                                    removeAnswer={removeAnswer}
                                    isDragDisabled={true}
                                    item={item}
                                  />
                                )
                              )
                            })}
                          </ObjectContectDroppable>
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
