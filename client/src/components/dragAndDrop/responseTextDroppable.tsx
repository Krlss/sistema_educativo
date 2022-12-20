import { Droppable } from 'react-beautiful-dnd'
import GeneralContext from '../../contexts/context'
import { useContext } from 'react'

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
    value: string
    text?: string
    text1?: string
    text2?: string
    key: string
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
  const { gameState } = useContext(GeneralContext)

  return (
    <div className="flex items-center gap-2 m-1 w-full">
      {item.text1 && (
        <div className="w-full">
          <h2 className="text-sm">{item.text1}</h2>
        </div>
      )}
      <Droppable
        droppableId={droppableId}
        direction={direction}
        isDropDisabled={isDropDisabled}>
        {(provided, snapshot) => (
          <div
            className={`h-10 ${
              !response[index] ? 'border border-gray-400' : ''
            } rounded min-w-[120px] ${snapshot.isDraggingOver && 'bg-white'}`}
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {response[index] && (
              <div
                key={response[index].response}
                className={`shadow rounded px-3 py-2 flex items-center justify-around gap-2 font-medium ${
                  gameState.next && 'text-white'
                }`}
                style={{
                  backgroundColor: gameState.next
                    ? response[index].isCorrect
                      ? '#2563EB'
                      : '#CC2525'
                    : response[index].color
                }}>
                {!gameState.next && (
                  <button
                    className="hover:text-red-800"
                    onClick={() => removeAnswer(index)}>
                    <Icon viewBox="16 16">
                      <CrossIcon />
                    </Icon>
                  </button>
                )}
                {response[index].response}
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {item.text && (
        <div className="w-full">
          <h2 className="text-sm">{item.text}</h2>
        </div>
      )}
      {item.text2 && (
        <div className="w-full">
          <h2 className="text-sm">{item.text2}</h2>
        </div>
      )}
    </div>
  )
}

export default ResponseTextDroppable
