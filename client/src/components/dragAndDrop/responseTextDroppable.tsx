import { Droppable } from 'react-beautiful-dnd'

import Icon from '../icons'
import CrossIcon from '../icons/cross'
import { VerifyDragAndDropChooseTextProps } from '../../types/DragAndDropChooseText'

interface Props {
  droppableId: string
  direction: 'horizontal' | 'vertical'
  isDropDisabled?: boolean
  response: VerifyDragAndDropChooseTextProps[]
  index: number
  item: {
    option: string
    text: string
  }
  removeAnswer: (index: number) => void
}

const ResponseTextDroppable = ({
  droppableId,
  direction,
  isDropDisabled,
  response,
  index,
  item,
  removeAnswer
}: Props) => {
  return (
    <div className="flex items-center gap-2 m-1">
      <Droppable
        droppableId={droppableId}
        direction={direction}
        isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <div
            className={`h-10 ${
              !response[index] ? 'border border-blue-300' : ''
            } rounded min-w-[120px] ${
              snapshot.isDraggingOver && 'bg-gray-100 border-2'
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {response[index] && (
              <div
                key={response[index].response_user}
                className={
                  'bg-blue-500 shadow rounded px-3 py-2 text-white flex items-center justify-around gap-2'
                }>
                <button
                  className="hover:text-red-400 text-white"
                  onClick={() => removeAnswer(index)}>
                  <Icon viewBox="16 16">
                    <CrossIcon />
                  </Icon>
                </button>
                {response[index].response_user}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <h2 key={item.option} className="text-sm">
        {item.text}
      </h2>
    </div>
  )
}

export default ResponseTextDroppable
