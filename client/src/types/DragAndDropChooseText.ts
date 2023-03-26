export interface DataInterface {
  value: string
  text?: string
  text1?: string
}

export interface DataInterfaceOriginal {
  options: DataInterface[]
}

export interface VerifyDragAndDropChooseTextProps {
  response: string
  text: string
  original: string
  correct?: boolean
  color?: string
  key: string
  isCorrect?: boolean
}

export interface ReturnVerifyDragAndDropChooseTextProps {
  new_array_options: VerifyDragAndDropChooseTextProps[]
  correct: number
  note: number
}
