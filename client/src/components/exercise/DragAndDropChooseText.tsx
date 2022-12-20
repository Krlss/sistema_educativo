import { DragDropContext } from 'react-beautiful-dnd'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import ResponseTextDroppable from '../dragAndDrop/responseTextDroppable'
import QuestionTitle from '../title/questionTitle'
import useDragAndDropChooseText from '../../hooks/useDragAndDropChooseText'
import { dragAndDropChooseText_, question } from '../../types/game'
import { stripquotes } from '../../utils'
import shortid from 'shortid'

const DragAndDropChooseText = (props: question) => {
  const opt = stripquotes(props.options) as dragAndDropChooseText_[]

  const options_ = opt.map(item => {
    return {
      ...item,
      key: shortid.generate()
    }
  })

  const { onDragEnd, options, removeAnswer, anwers } = useDragAndDropChooseText(
    { question: props, defaultData: options_ }
  )

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable droppableId="items" direction="horizontal">
          {options.map((item, index) => (
            <TextDraggable
              key={item.value}
              draggableId={item.value}
              index={index}
              value={item.value}
              color={item.color}
            />
          ))}
        </ContentDroppable>
        <div className="flex flex-col mt-2 mb-20 justify-start">
          {options_.map(
            (item, index) =>
              item?.text && (
                <ResponseTextDroppable
                  key={item.value}
                  droppableId={`respuesta-${index}`}
                  direction="horizontal"
                  index={index}
                  item={item}
                  removeAnswer={removeAnswer}
                  response={anwers}
                  isDropDisabled={!!anwers[index]}
                />
              )
          )}
        </div>
      </DragDropContext>
    </>
  )
}

export default DragAndDropChooseText
