import { ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'

const ObjectContectDroppable = ({
  droppableId,
  direction,
  isDropDisabled,
  children
}: {
  droppableId: string
  direction: 'horizontal' | 'vertical'
  isDropDisabled?: boolean
  children: ReactNode
}) => {
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-transparent">
      <Droppable
        droppableId={droppableId}
        direction={direction}
        isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <div
            className={`w-full h-full flex items-center justify-center ${
              snapshot.isDraggingOver && 'bg-gray-300'
            }`}
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default ObjectContectDroppable
