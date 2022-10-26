import { DragDropContext } from 'react-beautiful-dnd'
import { DataInterface } from '../../types/DragAndDropSet'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import TextDraggable from '../dragAndDrop/textDraggable'
import SetDroppable from '../dragAndDrop/setDroppable'
import useDragAndDropSets from '../../hooks/useDragAndDropSets'
import ResponseTextSetDraggable from '../dragAndDrop/responseTextSetDraggable'
import QuestionTitle from '../title/questionTitle'

const data = {
  title: 'Lleve los números a cada conjunto',
  sets: [
    {
      title: 'Números mayores a 700 000',
      options: [
        { text: '700 001', value: '700001' },
        { text: '800 020', value: '800020' },
        { text: '900 030', value: '900030' }
      ]
    },
    {
      title: 'Números menores a 500 000',
      options: [
        { text: '499 600', value: '499600' },
        { text: '499 000', value: '499000' },
        { text: '400 999', value: '400999' }
      ]
    }
  ],
  options: [
    {
      value: '800020',
      text: '800 020'
    },
    {
      value: '499000',
      text: '499 000'
    },
    {
      value: '400999',
      text: '400 999'
    },
    {
      value: '900030',
      text: '900 030'
    },
    {
      value: '499600',
      text: '499 600'
    },
    {
      value: '700001',
      text: '700 001'
    }
  ]
}

const DragAndDropSet = () => {
  const { onDragEnd, options, respuestas } = useDragAndDropSets(data)

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-screen-calculator flex-col">
          <QuestionTitle title={data.title} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ContentDroppable direction="horizontal" droppableId="items">
              {options.map((item, index) => (
                <TextDraggable
                  key={item.value}
                  draggableId={item.value}
                  index={index}
                  value={item.text}
                />
              ))}
            </ContentDroppable>
            <div className="flex gap-4">
              {data.sets.map((item, set) => (
                <SetDroppable
                  droppableId={`respuesta-${set}`}
                  key={set}
                  title={item.title}>
                  {respuestas[set].map((item: DataInterface, index: number) => (
                    <ResponseTextSetDraggable
                      key={item.value}
                      draggableId={item.value}
                      index={index}
                      value={item.value}
                    />
                  ))}
                </SetDroppable>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}

export default DragAndDropSet
