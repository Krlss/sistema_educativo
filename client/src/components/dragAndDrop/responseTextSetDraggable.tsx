import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'

const ResponseTextSetDraggable = ({
  draggableId,
  index,
  value,
  color,
  isCorrect
}: {
  draggableId: string
  index: number
  value: string
  color?: string
  isCorrect?: boolean
}) => {
  const { gameState } = useContext(GeneralContext)
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={gameState.next}>
      {({ draggableProps, innerRef, dragHandleProps }) => (
        <div
          className={`shadow px-3 py-2 flex items-center justify-around m-2 font-medium ${
            gameState.next && isCorrect ? 'text-white' : 'text-black'
          }`}
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          style={{
            ...draggableProps.style,
            backgroundColor:
              gameState.next && isCorrect
                ? '#2563EB'
                : gameState.next && !isCorrect
                ? '#CC2525'
                : color
          }}>
          {!gameState.next && (
            <Icon viewBox="24 24">
              <DragIcon />
            </Icon>
          )}
          {value}
        </div>
      )}
    </Draggable>
  )
}

export default ResponseTextSetDraggable
