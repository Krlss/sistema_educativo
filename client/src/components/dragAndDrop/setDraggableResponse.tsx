import { Key } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'
import { DataInterface } from '../../types/DragAndDropSet'

const SetDraggableResponse = ({
  Key,
  item,
  index
}: {
  Key: Key
  item: DataInterface
  index: number
}) => {
  return (
    <Draggable key={item.value} draggableId={item.value} index={index}>
      {(provided, snapshot) => (
        <div
          className={`shadow px-3 py-2 text-white flex items-center justify-around m-2 ${
            snapshot.isDragging ? 'bg-blue-700' : 'bg-blue-500'
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <Icon viewBox="24 24" fill="white">
            <DragIcon />
          </Icon>
          {item.value}
        </div>
      )}
    </Draggable>
  )
}

export default SetDraggableResponse
