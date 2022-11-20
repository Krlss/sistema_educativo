export interface DataInterface {
  value: string
  text: string
}

export interface DataInterfaceOriginal {
  options: DataInterface[]
}

export interface VerifyDragAndDropChooseTextProps {
  response_user: string
  text: string
  original: string
  correct?: boolean
  color?: string
}

export interface ReturnVerifyDragAndDropChooseTextProps {
  new_array_options: VerifyDragAndDropChooseTextProps[]
  correct: number
  qualification: number
}
