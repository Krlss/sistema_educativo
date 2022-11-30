import { DragDropContext } from 'react-beautiful-dnd'
import QuestionTitle from '../title/questionTitle'
import { question } from '../../types/game'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import useOrderOneDigitNumbers from '../../hooks/useOrderOneDigitNumbers'

const OrderOneDigitNumbers = (props: question) => {
  const { onDragEnd, options } = useOrderOneDigitNumbers(props)

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable direction="horizontal" droppableId="items">
          {options.map((item, index) => (
            <TextDraggable
              key={item.key}
              draggableId={item.key}
              index={index}
              value={item.value}
              color={item.color}
            />
          ))}
        </ContentDroppable>
      </DragDropContext>
    </>
  )
}

export default OrderOneDigitNumbers
