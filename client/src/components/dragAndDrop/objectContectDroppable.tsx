import { ReactNode, useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import GeneralContext from '../../contexts/context'

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
  const { gameState } = useContext(GeneralContext)

  return (
    <div className="w-16 h-16 flex items-center justify-center bg-transparent">
      <Droppable
        droppableId={droppableId}
        direction={direction}
        isDropDisabled={isDropDisabled || gameState.next}>
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
