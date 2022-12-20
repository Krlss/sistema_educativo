import { question, PlaceSing_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { DragDropContext } from 'react-beautiful-dnd'
import ContentDroppable from '../dragAndDrop/contentDroppable'

import TextDraggable from '../dragAndDrop/textDraggable'
import shortid from 'shortid'

import ResponseTextDroppable from '../dragAndDrop/responseTextDroppable'
import QuestionTitle from '../title/questionTitle'
import useDragAndDropChooseText from '../../hooks/useDragAndDropChooseText'

const PlaceSign = (props: question) => {
  const opt = stripquotes(props.options) as PlaceSing_[]

  const opt_ = opt.map(item => {
    return {
      ...item,
      key: shortid.generate()
    }
  })

  const { onDragEnd, options, removeAnswer, anwers } = useDragAndDropChooseText(
    { question: props, defaultData: opt_ }
  )

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable droppableId="items" direction="horizontal">
          {options.map((item, index) => (
            <TextDraggable
              key={index}
              draggableId={index.toString()}
              index={index}
              value={item.value}
              color={item.color}
            />
          ))}
        </ContentDroppable>
        <div className="flex flex-col mt-2 mb-20">
          {opt_.map((item, i) => (
            <ResponseTextDroppable
              key={i}
              droppableId={`respuesta-${i}`}
              direction="horizontal"
              index={i}
              item={item}
              removeAnswer={removeAnswer}
              response={anwers}
              isDropDisabled={!!anwers[i]}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  )
}
export default PlaceSign
