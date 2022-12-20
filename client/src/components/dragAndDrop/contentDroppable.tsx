import { ReactNode, useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import GeneralContext from '../../contexts/context'

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
  const { gameState } = useContext(GeneralContext)

  return (
    <Droppable
      droppableId={droppableId}
      direction={direction}
      isDropDisabled={isDropDisabled || gameState.next}>
      {(provided, snapshot) => (
        <div
          className={`flex flex-wrap justify-start ${
            snapshot.isDraggingOver && 'bg-gray-300'
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
