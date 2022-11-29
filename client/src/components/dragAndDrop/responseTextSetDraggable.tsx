import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'

const ResponseTextSetDraggable = ({
  draggableId,
  index,
  value,
  color
}: {
  draggableId: string
  index: number
  value: string
  color?: string
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {({ draggableProps, innerRef, dragHandleProps }) => (
        <div
          className="shadow px-3 py-2 text-black flex items-center justify-around m-2 font-medium"
          ref={innerRef}
          {...draggableProps}
          {...dragHandleProps}
          style={{
            ...draggableProps.style,
            backgroundColor: color
          }}>
          <Icon viewBox="24 24">
            <DragIcon />
          </Icon>
          {value}
        </div>
      )}
    </Draggable>
  )
}

export default ResponseTextSetDraggable
