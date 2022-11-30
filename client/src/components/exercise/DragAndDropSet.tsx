import { DragDropContext } from 'react-beautiful-dnd'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import TextDraggable from '../dragAndDrop/textDraggable'
import SetDroppable from '../dragAndDrop/setDroppable'
import useDragAndDropSets from '../../hooks/useDragAndDropSets'
import ResponseTextSetDraggable from '../dragAndDrop/responseTextSetDraggable'
import QuestionTitle from '../title/questionTitle'
import { question } from '../../types/game'

const DragAndDropSet = (props: question) => {
  const { onDragEnd, options_, answer, sets } = useDragAndDropSets(props)
  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable direction="horizontal" droppableId="items">
          {options_.map((item, index) => (
            <TextDraggable
              key={item.value}
              draggableId={item.value}
              index={index}
              value={item.text}
              color={item.color}
            />
          ))}
        </ContentDroppable>

        <div className="flex gap-4 mb-40">
          {sets.map((item, set) => (
            <SetDroppable
              droppableId={`respuesta-${set}`}
              key={set}
              title={item.title}>
              {answer[set]?.map((item: any, index: number) => (
                <ResponseTextSetDraggable
                  key={item.value}
                  draggableId={item.value}
                  index={index}
                  value={item.value}
                  color={item.color}
                />
              ))}
            </SetDroppable>
          ))}
        </div>
      </DragDropContext>
    </>
  )
}

export default DragAndDropSet
