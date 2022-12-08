import { question, PlaceSing_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { DragDropContext } from 'react-beautiful-dnd'
import ContentDroppable from '../dragAndDrop/contentDroppable'

import TextDraggable from '../dragAndDrop/textDraggable'
import shortid from 'shortid'

import ResponseTextDroppable from '../dragAndDrop/responseTextDroppable'
import QuestionTitle from '../title/questionTitle'
import useDragAndDropChooseText from '../../hooks/useDragAndDropChooseText'

const props = {
  type: 'place_sign',
  _id: '637374dffd325626f8d3380f',
  options:
    '\'[{"value":"<","text1":"524 260","text2":"854 125"},{"value":">","text1":"658 014","text2":"658 010"},{"value":">","text1":"417 520","text2":"417 250"}]\'',
  subtitle: null,
  title: 'Coloca los signos > ; < o = en cada caja',
  index: 1
} as question

const PlaceSign = () => {
  const opt = stripquotes(props.options) as PlaceSing_[]

  const opt_ = opt.map(item => {
    return {
      ...item,
      key: shortid.generate()
    }
  })

  const options_ = opt_.map(item => {
    return {
      value: item.value,
      key: item.key,
      text: `${item.text1} ${item.value} ${item.text2}`
    }
  })

  const { onDragEnd, options, removeAnswer, anwers } = useDragAndDropChooseText(
    { question: props, defaultData: options_ }
  )

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable droppableId="items" direction="horizontal">
          {options.map((item, index) => (
            <TextDraggable
              key={item.key}
              draggableId={item.key}
              index={index}
              value={item.value}
              color={item.color}
            />
          ))}
        </ContentDroppable>
        <div className="flex flex-col mt-2 mb-20">
          {opt_.map((item, index) => (
            <ResponseTextDroppable
              key={item.key}
              droppableId={`respuesta-${index}`}
              direction="horizontal"
              index={index}
              item={item}
              removeAnswer={removeAnswer}
              response={anwers}
              isDropDisabled={!!anwers[index]}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  )
}
export default PlaceSign
