import { DragDropContext } from 'react-beautiful-dnd'
import QuestionTitle from '../title/questionTitle'
import { question } from '../../types/game'
import { stripquotes } from '../../utils'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import useOrderOneDigitNumbers from '../../hooks/useOrderOneDigitNumbers'

const OrderOneDigitNumbers = (props: question) => {
  const options_ = stripquotes(props.options) as string[]
  const { onDragEnd, options } = useOrderOneDigitNumbers({
    numbers: options_,
    type: props.type === 'order_max' ? 'order_max' : 'order'
  })

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
              draggableId={item.key}
              index={index}
              value={item.value}
              key={item.key}
              color={item.color}
            />
          ))}
        </ContentDroppable>
      </DragDropContext>
    </>
  )
}

export default OrderOneDigitNumbers
