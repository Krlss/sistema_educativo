export type typeQuestion =
  | 'true_or_false'
  | 'true_or_false_cp'
  | 'true_or_false_cp_objects'
  | 'true_or_false_numbers_and_text'
  | 'put_points_in_cp'
  | 'choose_an_option'
  | 'choose_any_option'
  | 'choose_an_option_textnumber'
  | 'write_coor_cp'
  | 'write_value_from_text'
  | 'write_number_positional'
  | 'drag_and_drop_objects'
  | 'drag_and_drop_text'
  | 'drag_and_drop_sets'
  | 'selects_points_in_cp'
  | 'select_place_table_option'
  | 'positional_table'
  | 'listen_numbers'
  | 'listen_text'
  | 'order'
  | 'base10_descomposition'
  | 'positional_sum'
  | 'positional_mult'
  | 'table_multiplication'
  | 'place_sign'
  | 'positional_rest'
  | 'drag_and_drop_complete'
  | 'simple_multi'
  | 'operation_simple'
  | 'simple_fraction_simplification'
  | 'simple_fraction_decimal'
  | 'image_write_answer'

export type fraction_ = {
  numerator: number
  denominator: number
  correctNumerator: number
  correctDenominator: number
}

export type fraction_decimal = {
  numerator: number
  denominator: number
  value: number
}

export type ImageWriteAnswer_ = {
  image: string
  correct: string
}

export type chooseAnOptionType = {
  text: string
  value: boolean
  image?: string
  isCorrect?: boolean
}

export interface chooseAnOption_ {
  options: chooseAnOptionType[]
  columns?: {
    title: string
    data: string[]
  }[]
  urlDescription?: string
}

export interface question {
  index?: number
  id: string
  title: string
  subtitle: string | null
  type: typeQuestion
  options: string
  difficulty: 'LOW' | 'HIGH'
}

export interface DragAndDropChooseText_ {
  x: number
  y: number
  url: string
  color?: string
}

export interface chooseaAndOptionTextNumber_ {
  value: boolean
  text: string
  number: number
}

export interface valueBase10Descomposition {
  value: number
}

export interface dragAndDropObjects_ {
  x: number
  y: number
  url: string
}

export interface dragAndDropSets_ {
  sets: {
    title: string
    options: {
      color?: string
      text: string
      value: string
    }[]
  }[]
}

export interface dragAndDropChooseText_ {
  value: string
  text?: string
  image?: string
}

export interface dragAndDropComplete_ {
  options: {
    value: string
    text: string
  }[]
  correct: string[]
  text: string
}

export interface ListenAndWrite_ {
  text: string
  response?: string
}

export interface PlaceSing_ {
  value: string
  text1: string
  text2: string
}

export interface positionalSum_ {
  value: number[]
}

export interface positionalTable_ {
  value: string
  response: string[]
}

export interface cartesianCoordinateFull_ {
  x: number
  y: number
}

export interface selectPlaceTableOption_ {
  text: string
  selects: {
    text: string
    correct: boolean
  }[]
  response?: string
  isCorrect?: boolean
}

export interface selectPointsCoordinatePlane_ {
  correct: boolean
  points: {
    x: number
    y: number
    value: boolean
  }[]
}

export interface trueOrFalse_ {
  correct: boolean
  columns?: {
    title: string
    data: string[]
  }[]
  image?: string
}

export interface trueOrFalseCartesianCoord_ {
  correct: boolean
  points: {
    x: number
    y: number
  }[]
}

export interface trueOrFalseCartesianCoordObjects_ {
  correct: boolean
  points: {
    x: number
    y: number
    url: string
    name: string
    value: boolean
    resposable: string
  }[]
}

export interface trueOrFalseNumbersAndText_ {
  correct: boolean
  options: {
    name: string
    text: string
    value: string
  }[]
}

export interface writePointsCoordinatePlane_ {
  x: number
  y: number
  url?: string
  key?: string
  responseX?: number
  responseY?: number
  isCorrect?: boolean
  isResponse?: boolean
}

export interface writeNumberPositional_ {
  value: number
}

export interface writeValueFromText_ {
  text: string
  value: string
  response?: string
  isCorrect?: boolean
}

export interface getRandomQuestionsProps {
  getRandomUnitQuestions: question[]
}

export interface getRandomQuestionsByAsignatures {
  questionsByAsignature: question[]
}

export interface operationBaseN_ {
  base: number[]
  digits: number[]
}

export interface simpleMulti_ {
  value: number
  text: string
}

export interface operationSimple_ {
  operation: string
  correct: number
  residuo?: number
}
