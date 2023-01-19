import { registerEnumType } from "type-graphql";

export enum PriorityType {
  low = "low",
  medium = "medium",
  high = "high",
}

registerEnumType(PriorityType, {
  name: "PriorityType",
  description: "Priority type",
  valuesConfig: {
    low: {
      description: "Low priority",
    },
    medium: {
      description: "Medium priority",
    },
    high: {
      description: "High priority",
    },
  },
});

export enum TypeQuestion {
  true_or_false = "true_or_false",
  true_or_false_cp = "true_or_false_cp",
  true_or_false_cp_objects = "true_or_false_cp_objects",
  true_or_false_numbers_and_text = "true_or_false_numbers_and_text",
  put_points_in_cp = "put_points_in_cp",
  choose_an_option = "choose_an_option",
  choose_any_option = "choose_any_option",
  choose_an_option_textnumber = "choose_an_option_textnumber",
  write_coor_cp = "write_coor_cp",
  write_value_from_text = "write_value_from_text",
  write_number_positional = "write_number_positional",
  drag_and_drop_objects = "drag_and_drop_objects",
  drag_and_drop_text = "drag_and_drop_text",
  drag_and_drop_sets = "drag_and_drop_sets",
  selects_points_in_cp = "selects_points_in_cp",
  select_place_table_option = "select_place_table_option",
  positional_table = "positional_table",
  listen_numbers = "listen_numbers",
  listen_text = "listen_text",
  order = "order",
  base10_descomposition = "base10_descomposition",
  positional_sum = "positional_sum",
  positional_mult = "positional_mult",
  table_multiplication = "table_multiplication",
  place_sign = "place_sign",
  positional_rest = "positional_rest",
  drag_and_drop_complete = "drag_and_drop_complete",
  simple_multi = "simple_multi",
  operation_simple = "operation_simple",
}

registerEnumType(TypeQuestion, {
  name: "TypeQuestion",
  description: "Type of question",
});
