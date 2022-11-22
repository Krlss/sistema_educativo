import React, { useState } from 'react'
import QuestionTitle from '../title/questionTitle'
import { question, selectPlaceTableOption_ } from '../../types/game'
import { stripquotes } from '../../utils'
import { getRamdonArrayColors } from '../../constants/colors'

const SelectPlaceTableOption = (props: question) => {
  const options_ = stripquotes(props.options) as selectPlaceTableOption_[]
  const [colors] = useState<string[]>(getRamdonArrayColors(options_.length))

  const [selected, setSelected] = useState(options_)
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const newSelected = [...selected]
    newSelected[index].response =
      e.target.value === 'Selecciona una opción' ? undefined : e.target.value
    setSelected(newSelected)
  }

  return (
    <>
      <QuestionTitle
        title={props.title}
        subtitle={props.subtitle}
        index={props.index}
      />
      <div className="mt-2">
        {selected.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-around py-2 gap-4">
            <div
              className="flex items-center justify-center px-4 py-2 w-44 rounded shadow"
              style={{
                backgroundColor: colors[index]
              }}>
              <h1 className="font-medium text-left">{option.text}</h1>
            </div>
            <select
              className="shadow p-2 w-full rounded"
              placeholder="Selecciona una opción"
              onChange={e => handleChange(e, index)}>
              <option value={undefined}>Selecciona una opción</option>
              {option.selects.map((select, index) => (
                <option key={index} value={select.text}>
                  {select.text}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </>
  )
}

export default SelectPlaceTableOption
