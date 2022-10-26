import { Draggable } from 'react-beautiful-dnd'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
import { DataInterface } from '../../types/DragAndDropImages'

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
      {provided => (
        <div
          className="bg-yellow-page/70 flex flex-col items-center justify-center gap-1 w-[90%] h-[90%] rounded-full"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <img src={item.url} alt="" className="w-6 h-6" />
          <button
            className="hover:text-red-400 text-black"
            onClick={() => removeAnswer(item.key)}>
            <Icon viewBox="16 16">
              <CrossIcon />
            </Icon>
          </button>
        </div>
      )}
    </Draggable>
  )
}

export default ObjectDraggableResponse
