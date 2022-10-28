import { shuffleArray, CreateArrayFromText, AddKeyToArrayItems } from '../utils'
import { useState } from 'react'
import { DropResult } from 'react-beautiful-dnd'

const useOrderOneDigitNumbers = (data: string) => {
  const [opciones, setOpciones] = useState(
    AddKeyToArrayItems(shuffleArray(CreateArrayFromText(data)))
  )

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return

    const newOpciones = [...opciones]
    const [removed] = newOpciones.splice(source.index, 1)
    newOpciones.splice(destination.index, 0, removed)
    setOpciones(newOpciones)
  }
  return {
    opciones,
    onDragEnd
  }
}

export default useOrderOneDigitNumbers
