import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'
import GeneralContext from '../../contexts/context'
import { useContext } from 'react'

interface Props {
  draggableId: string
  index: number
  value: string
  color?: string
}

const TextDraggable = ({ draggableId, index, value, color }: Props) => {
  const { gameState } = useContext(GeneralContext)

  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={gameState.next}>
      {({ draggableProps, innerRef, dragHandleProps }) => {
        return (
          <div
            className="shadow rounded px-3 py-2 m-1 text-black flex items-center justify-around gap-2 font-medium"
            {...dragHandleProps}
            {...draggableProps}
            ref={innerRef}
            style={{
              ...draggableProps.style,
              backgroundColor: color
            }}>
            {!gameState.next && (
              <Icon viewBox="24 24" fill="white">
                <DragIcon />
              </Icon>
            )}
            {value}
          </div>
        )
      }}
    </Draggable>
  )
}
export default TextDraggable
