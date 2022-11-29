import { dragAndDropSets_ } from './game'
export interface DataInterface {
  value: string
  text: string
}

export interface VerifyDragAndDropSetProps {
  response_user: string
  text: string
  original: string
  correct?: boolean
}

export interface ReturnVerifyDragAndDropSetProps {
  new_array_options: VerifyDragAndDropSetProps[]
  correct: number
  qualification: number
}

export interface HookProps extends dragAndDropSets_ {
  options: DataInterface[]
}
