import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'

interface Props {
  draggableId: string
  index: number
  value: string
}

const TextDraggable = ({ draggableId, index, value }: Props) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <div
          className={`bg-blue-500 shadow rounded px-3 py-2 m-1 text-white flex items-center justify-around gap-2 ${
            snapshot.isDragging ? 'bg-blue-700' : ''
          }`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <Icon viewBox="24 24" fill="white">
            <DragIcon />
          </Icon>
          {value}
        </div>
      )}
    </Draggable>
  )
}
export default TextDraggable
