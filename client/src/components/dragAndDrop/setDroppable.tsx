import { ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'

const SetDroppable = ({
  droppableId,
  title,
  children
}: {
  droppableId: string
  title: string
  children: ReactNode
}) => {
  return (
    <div className="flex flex-col items-center gap-2 m-1">
      <span>{title}</span>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            className={`h-56 min-h-full border border-blue-300 rounded min-w-full overflow-y-auto ${
              snapshot.isDraggingOver && 'bg-gray-100'
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

export default SetDroppable
