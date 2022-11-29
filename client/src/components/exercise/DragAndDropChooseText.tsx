import { DragDropContext } from 'react-beautiful-dnd'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import ResponseTextDroppable from '../dragAndDrop/responseTextDroppable'
import QuestionTitle from '../title/questionTitle'
import useDragAndDropChooseText from '../../hooks/useDragAndDropChooseText'
import { dragAndDropChooseText_, question } from '../../types/game'
import { stripquotes } from '../../utils'

const DragAndDropChooseText = (props: question) => {
  const options_ = stripquotes(props.options) as dragAndDropChooseText_[]
  const { onDragEnd, options, removeAnswer, respuestas } =
    useDragAndDropChooseText({ options: options_ })

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
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
            <div className="flex flex-col">
              {options_.map((item, index) => (
                <ResponseTextDroppable
                  key={item.value}
                  droppableId={`respuesta-${index}`}
                  direction="horizontal"
                  index={index}
                  item={item}
                  removeAnswer={removeAnswer}
                  response={respuestas}
                  isDropDisabled={!!respuestas[index]}
                />
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropChooseText
