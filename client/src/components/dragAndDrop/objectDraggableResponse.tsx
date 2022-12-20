import { Draggable } from 'react-beautiful-dnd'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
import { DataInterface } from '../../types/DragAndDropImages'
import { useContext } from 'react'
import GeneralContext from '../../contexts/context'

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
  const { gameState } = useContext(GeneralContext)

  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={isDragDisabled || !gameState.next}>
      {({ draggableProps, innerRef, dragHandleProps }) => (
        <div
          className={`flex flex-col items-center justify-center gap-1 w-[95%] h-[95%] rounded ${
            gameState.next && item.isCorrect && 'text-white'
          }`}
          {...draggableProps}
          {...dragHandleProps}
          ref={innerRef}
          style={{
            ...draggableProps.style,
            backgroundColor:
              gameState.next && item.isCorrect
                ? '#2563EB'
                : gameState.next && !item.isCorrect
                ? '#CC2525'
                : item.color
          }}>
          <div className="flex items-center">
            {!gameState.next && (
              <button
                className="hover:text-red-800 text-black"
                onClick={() => removeAnswer(item.key)}>
                <Icon viewBox="16 16">
                  <CrossIcon />
                </Icon>
              </button>
            )}
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
