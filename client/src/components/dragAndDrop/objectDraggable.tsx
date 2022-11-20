import { Draggable } from 'react-beautiful-dnd'
import DragIcon from '../icons/drag'
import Icon from '../icons'
import { DataInterface } from '../../types/DragAndDropImages'

const ObjectDraggable = ({
  draggableId,
  index,
  item
}: {
  draggableId: string
  index: number
  item: DataInterface
}) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {({ draggableProps, innerRef, dragHandleProps }) => (
        <div
          className="shadow rounded p-2 m-1 text-black flex flex-col items-center gap-1 font-medium"
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          style={{
            ...draggableProps.style,
            backgroundColor: item.color
          }}>
          <div className="flex items-center justify-center gap-2">
            <Icon viewBox="24 24">
              <DragIcon />
            </Icon>
            <img src={item.url} alt="" className="w-6 h-6" />
          </div>
          <span className="text-xs">
            ({item.x}, {item.y})
          </span>
        </div>
      )}
    </Draggable>
  )
}

export default ObjectDraggable
