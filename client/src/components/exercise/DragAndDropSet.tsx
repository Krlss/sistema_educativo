import { DragDropContext } from 'react-beautiful-dnd'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import TextDraggable from '../dragAndDrop/textDraggable'
import SetDroppable from '../dragAndDrop/setDroppable'
import useDragAndDropSets from '../../hooks/useDragAndDropSets'
import ResponseTextSetDraggable from '../dragAndDrop/responseTextSetDraggable'
import QuestionTitle from '../title/questionTitle'
import { question, dragAndDropSets_ } from '../../types/game'

import { stripquotes, getFlatArraySets } from '../../utils'

const DragAndDropSet = (props: question) => {
  const { sets } = stripquotes(props.options) as dragAndDropSets_
  const options = getFlatArraySets({ sets })
  const { onDragEnd, options_, respuestas } = useDragAndDropSets({
    options,
    sets
  })
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
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

            <div className="flex gap-4">
              {sets.map((item, set) => (
                <SetDroppable
                  droppableId={`respuesta-${set}`}
                  key={set}
                  title={item.title}>
                  {respuestas[set]?.map((item: any, index: number) => (
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
        </div>
      </div>
    </div>
  )
}

export default DragAndDropSet
