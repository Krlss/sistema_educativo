import { DragDropContext } from 'react-beautiful-dnd'
import { getCoorValues, getQuadrant } from '../../utils/cartesianCoordinate'
import QuadrantDragAndDrop from '../CartesianPlane/quadrantDragAndDrop'

import ObjectDraggable from '../dragAndDrop/objectDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import ObjectContectDroppable from '../dragAndDrop/objectContectDroppable'
import ObjectDraggableResponse from '../dragAndDrop/objectDraggableResponse'

import useDragAndDropObject from '../../hooks/useDragAndDropObject'
import QuestionTitle from '../title/questionTitle'
import { question, DragAndDropChooseText_ } from '../../types/game'
import { stripquotes } from '../../utils'

const DragAndDropChooseText = (props: question) => {
  const options = stripquotes(props.options) as DragAndDropChooseText_[]
  const typeCartesian = getQuadrant(options)

  const { onDragEnd, options_, removeAnswer, response } = useDragAndDropObject({
    options,
    typeCartesian,
    question: props
  })

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable droppableId="items" direction="horizontal">
          {options_.map((item, index) => {
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
                          response.find(
                            item =>
                              item.responseX === valueX &&
                              item.responseY === valueY
                          ) !== undefined
                        }>
                        {response.map((item, index) => {
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
    </>
  )
}

export default DragAndDropChooseText
