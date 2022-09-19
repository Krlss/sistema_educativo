export interface DataInterface {
  option: string
  text: string
}

export interface VerifyDragAndDropChooseTextProps {
  response_user: string
  text: string
  original: string
  correct?: boolean
}

export interface ReturnVerifyDragAndDropChooseTextProps {
  new_array_options: VerifyDragAndDropChooseTextProps[]
  correct: number
  qualification: number
}
