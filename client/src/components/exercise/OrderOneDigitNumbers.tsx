import { DragDropContext } from 'react-beautiful-dnd'
import QuestionTitle from '../title/questionTitle'
import { question } from '../../types/game'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import useOrderOneDigitNumbers from '../../hooks/useOrderOneDigitNumbers'

const OrderOneDigitNumbers = (props: question) => {
  const { onDragEnd, options, value, gameState, image } =
    useOrderOneDigitNumbers(props)

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      {image && (
        <img src={image} alt="exercise" className="max-w-[15rem] w-full mb-4" />
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable direction="horizontal" droppableId="items">
          {options.map((item, index) => {
            return (
              <TextDraggable
                key={item.key}
                draggableId={item.key}
                index={index}
                value={item.value}
                color={
                  gameState.next && value[index] === item.value
                    ? '#2563EB'
                    : gameState.next && value[index] !== item.value
                    ? '#CC2525'
                    : item.color
                }
                textColor={
                  gameState.next && value[index] === item.value
                    ? 'white'
                    : gameState.next && value[index] !== item.value
                    ? 'black'
                    : 'black'
                }
              />
            )
          })}
        </ContentDroppable>
      </DragDropContext>
    </>
  )
}

export default OrderOneDigitNumbers
