import { registerEnumType } from '@nestjs/graphql';

export enum QuestionType {
  order = 'order',
  place_sign = 'place_sign',
  listen_text = 'listen_text',
  simple_multi = 'simple_multi',
  write_coor_cp = 'write_coor_cp',
  true_or_false = 'true_or_false',
  positional_sum = 'positional_sum',
  listen_numbers = 'listen_numbers',
  positional_rest = 'positional_rest',
  positional_mult = 'positional_mult',
  choose_an_option = 'choose_an_option',
  operation_simple = 'operation_simple',
  put_points_in_cp = 'put_points_in_cp',
  true_or_false_cp = 'true_or_false_cp',
  positional_table = 'positional_table',
  choose_any_option = 'choose_any_option',
  drag_and_drop_text = 'drag_and_drop_text',
  drag_and_drop_sets = 'drag_and_drop_sets',
  table_multiplication = 'table_multiplication',
  selects_points_in_cp = 'selects_points_in_cp',
  write_value_from_text = 'write_value_from_text',
  base10_descomposition = 'base10_descomposition',
  drag_and_drop_objects = 'drag_and_drop_objects',
  drag_and_drop_complete = 'drag_and_drop_complete',
  write_number_positional = 'write_number_positional',
  true_or_false_cp_objects = 'true_or_false_cp_objects',
  select_place_table_option = 'select_place_table_option',
  choose_an_option_textnumber = 'choose_an_option_textnumber',
  true_or_false_numbers_and_text = 'true_or_false_numbers_and_text',
}

registerEnumType(QuestionType, {
  name: 'QuestionType',
});