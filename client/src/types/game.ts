export type typeQuestion =
  | 'true_or_false'
  | 'true_or_false_cp'
  | 'true_or_false_cp_objects'
  | 'true_or_false_numbers_and_text'
  | 'put_points_in_cp'
  | 'choose_an_option'
  | 'choose_an_option_textnumber'
  | 'write_coor_cp'
  | 'write_points_cp'
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
  | 'order_max'
  | 'base10_descomposition'
  | 'positional_sum'
  | 'place_sign'

export type chooseAnOptionType = {
  text: string
  value: boolean
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
  index: number
  _id: string
  title: string
  subtitle: string | null
  type: typeQuestion
  options: string
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
  text: string
}

export interface ListenAndWrite_ {
  text: string
  response?: string
}
