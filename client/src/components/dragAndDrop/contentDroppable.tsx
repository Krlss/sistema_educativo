import { ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
  droppableId: string
  direction: 'horizontal' | 'vertical'
  isDropDisabled?: boolean
  children: ReactNode
}

const ContentDroppable = ({
  droppableId,
  direction,
  isDropDisabled,
  children
}: Props) => {
  return (
    <Droppable
      droppableId={droppableId}
      direction={direction}
      isDropDisabled={isDropDisabled}>
      {(provided, snapshot) => (
        <div
          className={`flex flex-wrap justify-start ${
            snapshot.isDraggingOver && 'bg-gray-200'
          }`}
          {...provided.droppableProps}
          ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ContentDroppable
