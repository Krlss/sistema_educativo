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

export interface HookProps {
  sets: {
    title: string
    options: DataInterface[]
  }[]
  options: DataInterface[]
}
