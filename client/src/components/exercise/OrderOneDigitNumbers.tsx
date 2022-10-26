import { DragDropContext } from 'react-beautiful-dnd'
import QuestionTitle from '../title/questionTitle'

import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import useOrderOneDigitNumbers from '../../hooks/useOrderOneDigitNumbers'

const data = {
  id: 10,
  pregunta:
    'Ordena los dígitos 4, 9, 8 y 6 para formar el número más pequeño posible.',
  respuesta: '468924512'
}

const OrderOneDigitNumbers = () => {
  const { onDragEnd, opciones } = useOrderOneDigitNumbers(data.respuesta)

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title={data.pregunta} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ContentDroppable direction="horizontal" droppableId="items">
              {opciones.map((item, index) => (
                <TextDraggable
                  draggableId={item.key}
                  index={index}
                  value={item.value}
                  key={item.key}
                />
              ))}
            </ContentDroppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default OrderOneDigitNumbers
