import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import TextDraggable from '../dragAndDrop/textDraggable'
import ContentDroppable from '../dragAndDrop/contentDroppable'
import { dragAndDropComplete_, question } from '../../types/game'
import { stripquotes, createArrayComplete, shuffleArray } from '../../utils'
import shortid from 'shortid'
import GeneralContext from '../../contexts/context'

import { useState, useContext, useEffect } from 'react'
import { getRamdonArrayColors } from '../../constants/colors'
import {
  ReturnVerifyDragAndDropChooseTextProps,
  VerifyDragAndDropChooseTextProps
} from '../../types/DragAndDropChooseText'
import Icon from '../icons'
import CrossIcon from '../icons/cross'
import QuestionTitle from '../title/questionTitle'

const DragAndDropComplete = (props: question) => {
  const { setQuestion, gameState, updatedQuestion } = useContext(GeneralContext)
  const opt = stripquotes(props.options) as dragAndDropComplete_
  const [answers, setAnswers] = useState<VerifyDragAndDropChooseTextProps[]>([])
  const [complete] = useState<
    {
      text: string
      index?: number
    }[]
  >(createArrayComplete(opt.text))
  const colors = getRamdonArrayColors(opt.options.length)
  const [options_, setOptions_] = useState(
    shuffleArray(
      opt.options.map((item, index) => {
        return {
          ...item,
          key: shortid.generate(),
          color: colors[index]
        }
      })
    )
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result
    if (!destination) {
      return
    }

    const regex = /respuesta-\d+/g
    const isRespuesta = destination.droppableId.match(regex)

    const index = Number(destination.droppableId.split('-')[1])

    if (isRespuesta) {
      const itemCopy = [...answers]
      itemCopy[index] = {
        ...options_[source.index],
        response: options_[source.index].value,
        original: opt.correct[index],
        isCorrect: options_[source.index].value === opt.correct[index]
      }
      setAnswers(itemCopy)
      const newOptions = [...options_]
      newOptions.splice(source.index, 1)
      setOptions_(newOptions)
    }

    if (source.droppableId === 'items' && destination.droppableId === 'items') {
      const items = [...options_]
      const [reorderedItem] = items.splice(source.index, 1)
      items.splice(destination.index, 0, reorderedItem)
      setOptions_(items)
    }
  }

  useEffect(() => {
    const isAllFill = answers.every(item => item !== undefined)
    if (answers.length === opt.correct.length && isAllFill) {
      const response = verifyDragAndDropChooseText(answers)
      if (response) {
        const newQuestion = {
          id: props.id,
          nota: response.note,
          isDone: true,
          responseUser: JSON.stringify({ answers })
        }

        const find = gameState.questions.find(
          question => question.id === newQuestion.id
        )

        if (find) {
          updatedQuestion(newQuestion)
        } else {
          setQuestion(newQuestion)
        }
      }
    } else {
      updatedQuestion({
        id: props.id,
        nota: 0,
        isDone: false,
        responseUser: undefined
      })
    }
  }, [answers])

  const removeAnswer = (index: number) => {
    if (!gameState.next) {
      const newOpciones = [...options_]
      const oldRespuesta = {
        value: answers[index]?.response,
        text: answers[index]?.text,
        color: answers[index]?.color,
        key: answers[index]?.key
      }
      newOpciones.push(oldRespuesta)
      setOptions_(newOpciones)

      const newAnswers = [...answers]
      newAnswers[index] = undefined as any
      setAnswers(newAnswers)
    }
  }

  const verifyDragAndDropChooseText = (
    array: VerifyDragAndDropChooseTextProps[]
  ) => {
    return array.reduce(
      (acc, current, _, array) => {
        if (current.isCorrect) acc.correct++
        return {
          ...acc,
          note: Number((acc.correct / array.length).toFixed(2)),
          new_array_options: [
            ...acc.new_array_options,
            { ...current, correct: current.isCorrect }
          ]
        }
      },
      {
        new_array_options: [],
        note: 0,
        correct: 0
      } as ReturnVerifyDragAndDropChooseTextProps
    )
  }

  return (
    <>
      <QuestionTitle
        title={props.title}
        index={props.index}
        subtitle={props.subtitle}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <ContentDroppable droppableId="items" direction="horizontal">
          {options_.map((item, index) => (
            <TextDraggable
              key={item.key}
              draggableId={item.key}
              index={index}
              value={item.value}
              color={item.color}
            />
          ))}
        </ContentDroppable>
        <div className="flex items-center justify-start mt-5">
          {complete.map((item, index) => {
            return item.text !== '__' ? (
              <span className="font-medium" key={index}>
                {item.text}
              </span>
            ) : (
              <Droppable
                key={index}
                droppableId={`respuesta-${item.index}`}
                direction="horizontal"
                isDropDisabled={!!answers[item.index ?? 0] && !gameState.next}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      background: snapshot.isDraggingOver
                        ? 'white'
                        : 'lightgrey',
                      minWidth: 150
                    }}
                    className="flex flex-row mx-2 h-10">
                    {answers[item.index ?? 0] && (
                      <div
                        key={answers[item.index ?? 0].key}
                        className="shadow rounded px-3 text-black flex items-center justify-around gap-2 font-medium w-full"
                        style={{
                          backgroundColor:
                            gameState.next && answers[item.index ?? 0].isCorrect
                              ? '#2563EB'
                              : gameState.next &&
                                !answers[item.index ?? 0].isCorrect
                              ? '#CC2525'
                              : answers[item.index ?? 0].color,
                          color:
                            gameState.next && answers[item.index ?? 0].isCorrect
                              ? 'white'
                              : gameState.next &&
                                !answers[item.index ?? 0].isCorrect
                              ? 'white'
                              : 'black'
                        }}>
                        {!gameState.next && (
                          <button
                            className="hover:text-red-800"
                            onClick={() => removeAnswer(item.index ?? 0)}>
                            <Icon viewBox="16 16">
                              <CrossIcon />
                            </Icon>
                          </button>
                        )}
                        {answers[item.index ?? 0].response}
                      </div>
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            )
          })}
        </div>
      </DragDropContext>
    </>
  )
}
export default DragAndDropComplete
