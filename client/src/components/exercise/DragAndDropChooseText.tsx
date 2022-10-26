import { DragDropContext } from 'react-beautiful-dnd'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import ResponseTextDroppable from '../dragAndDrop/responseTextDroppable'
import QuestionTitle from '../title/questionTitle'
import useDragAndDropChooseText from '../../hooks/useDragAndDropChooseText'

const data = {
  title:
    'Ordene de manera correcta la escritura de cada números naturales de tres cifras:',
  type: 'ordenar',
  options: [
    {
      option: '67005',
      text: 'SESENTA Y SIETE MIL CINCO'
    },
    {
      option: '30001',
      text: 'TREINTA MIL UNO'
    },
    {
      option: '78569',
      text: 'SETENTA Y OCHO MIL QUINIENTOS SESENTA Y NUEVE'
    },
    {
      option: '40608',
      text: 'CUARENTA MIL SEISCIENTOS OCHO'
    },
    {
      option: '78976',
      text: 'SETENTA Y OCHO MIL NOVECIENTOS SETENTA Y SEIS'
    },
    {
      option: '34567',
      text: 'TREINTA Y CUATRO MIL QUINIENTOS SESENTA Y SIETE'
    }
  ]
}

const DragAndDropChooseText = () => {
  const { onDragEnd, options, removeAnswer, respuestas } =
    useDragAndDropChooseText(data)

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title={data.title} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ContentDroppable droppableId="items" direction="horizontal">
              {options.map((item, index) => (
                <TextDraggable
                  key={item.option}
                  draggableId={item.option}
                  index={index}
                  value={item.option}
                />
              ))}
            </ContentDroppable>
            <div className="flex flex-col">
              {data.options.map((item, index) => (
                <ResponseTextDroppable
                  key={item.option}
                  droppableId={`respuesta-${index}`}
                  direction="horizontal"
                  index={index}
                  item={item}
                  removeAnswer={removeAnswer}
                  response={respuestas}
                  isDropDisabled={!!respuestas[index]}
                />
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropChooseText
