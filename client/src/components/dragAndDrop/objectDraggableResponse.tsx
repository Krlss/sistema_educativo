import { Draggable } from 'react-beautiful-dnd'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
import { DataInterface } from '../../types/dragAndDropImages'

const ObjectDraggableResponse = ({
  draggableId,
  index,
  isDragDisabled,
  item,
  removeAnswer
}: {
  draggableId: string
  index: number
  isDragDisabled?: boolean
  item: DataInterface
  removeAnswer: (index: string) => void
}) => {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={isDragDisabled}>
      {({ draggableProps, innerRef, dragHandleProps }) => (
        <div
          className="flex flex-col items-center justify-center gap-1 w-[95%] h-[95%] rounded"
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          style={{
            ...draggableProps.style,
            backgroundColor: item.color
          }}>
          <div className="flex items-center">
            <button
              className="hover:text-red-800 text-black"
              onClick={() => removeAnswer(item.key)}>
              <Icon viewBox="16 16">
                <CrossIcon />
              </Icon>
            </button>
            <img src={item.url} alt="" className="w-6 h-6" />
          </div>
          <span className="text-xs font-medium">
            ({item.x}, {item.y})
          </span>
        </div>
      )}
    </Draggable>
  )
}

export default ObjectDraggableResponse
