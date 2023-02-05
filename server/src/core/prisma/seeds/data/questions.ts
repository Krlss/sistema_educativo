enum QuestionType {
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

interface Question {
  options: string;
  title: string;
  type: QuestionType;
  subtitle?: string;
  asignature: string;
  unit: string;
  topic: string;
}

export const questions: Question[] = [
  {
    options: '{"correct":true}',
    title: 'Elija la opción correcta: Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'El nombre que recibe el eje vertical es eje y o de ordenadas',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Ordenadas"},{"value":true,"text":"Abscisas"}]}',
    title: 'Elija la opción correcta según corresponda:',
    type: QuestionType.choose_an_option,
    subtitle: '¿Qué nombre recibe el eje horizontal (recta horizontal)?',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":2,"y":3}]',
    title: 'Represente las coordenadas (x=2,y=3) en el plano cartesiano:',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":-3,"y":3}]',
    title: 'Represente las coordenadas (x=-3,y=3) en el plano cartesiano:',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":1,"y":4}]',
    title: 'Represente las coordenadas (x=1,y=4) en el plano cartesiano:',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":2,"y":-4}]',
    title: 'Represente las coordenadas (x=2,y=-4) en el plano cartesiano:',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":4,"y":-1},{"x":-2,"y":4},{"x":1,"y":1}]',
    title: 'Ubique las coordenadas en  el punto correspondiente',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '[{"x":3,"y":5},{"x":6,"y":7},{"x":4,"y":2},{"x":5,"y":8},{"x":1,"y":4}]',
    title: 'Marcar estos puntos en la cuadricula',
    type: QuestionType.put_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '[{"x":2,"y":3,"url":"https://cdn-icons-png.flaticon.com/512/1960/1960021.png","name":"León"},{"x":1,"y":3,"url":"https://cdn-icons-png.flaticon.com/512/547/547612.png","name":"Familia"},{"x":1,"y":5,"url":"https://cdn-icons-png.flaticon.com/512/1046/1046283.png","name":"Calculadora"},{"x":3,"y":1,"url":"https://cdn-icons-png.flaticon.com/512/864/864970.png","name":"Escribir"},{"x":3,"y":4,"url":"https://cdn-icons-png.flaticon.com/512/2997/2997985.png","name":"Reloj"},{"x":5,"y":3,"url":"https://cdn-icons-png.flaticon.com/512/6521/6521546.png","name":"Mickey"}]',
    title: 'Escriba las coordenadas de estos objetos',
    type: QuestionType.write_coor_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '{"correct":false,"points":[{"x":4,"y":-1}]}',
    title: '¿La siguiente coordenada en el plano es la correcta: A(4, -3)?',
    type: QuestionType.true_or_false_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options: '[{"x":1,"y":1},{"x":1,"y":-3},{"x":2,"y":-5}]',
    title: 'Escribe los puntos del siguiente plano',
    type: QuestionType.write_coor_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '[{"x":2,"y":2,"url":"https://cdn-icons-png.flaticon.com/512/781/781291.png"},{"x":5,"y":5,"url":"https://cdn-icons-png.flaticon.com/512/1507/1507168.png"},{"x":3,"y":4,"url":"https://cdn-icons-png.flaticon.com/512/2333/2333094.png"}]',
    title:
      'Analice el plano cartesiano y Coloque la imagen en el punto que pertenecen cada par ordenado:',
    type: QuestionType.drag_and_drop_objects,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '{"correct":false,"points":[{"x":2,"y":1,"value":false},{"x":4,"y":3,"value":true},{"x":7,"y":1,"value":true},{"x":3,"y":1,"value":true},{"x":6,"y":2,"value":false},{"x":8,"y":2,"value":true}]}',
    title:
      'Observe la tabla y el sistema de coordenadas. Luego, señalo dando clic qué pares ordenados no corresponden a los puntos del plano.',
    type: QuestionType.selects_points_in_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '{"correct":true,"points":[{"x":4,"y":-1},{"x":4,"y":-2},{"x":1,"y":-3}]}',
    title:
      '¿Las siguientes coordenadas en el plano son correcta: A(4, -1) B(4, -2) C(1, -3)?',
    type: QuestionType.true_or_false_cp,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '{"correct":true,"points":[{"x":3,"y":2,"url":"https://cdn-icons-png.flaticon.com/512/3307/3307015.png","name":"Bolsa","value":true,"resposable":"Carlos"},{"x":7,"y":3,"url":"https://cdn-icons-png.flaticon.com/512/685/685388.png","name":"Caja","value":true,"resposable":"Viviana"},{"x":6,"y":1,"url":"https://cdn-icons-png.flaticon.com/512/1236/1236977.png","name":"Latas","value":true,"resposable":"Jorge"},{"x":1,"y":3,"url":"https://cdn-icons-png.flaticon.com/512/1996/1996969.png","name":"Botellas","value":true,"resposable":"Priscila"}]}',
    title:
      'Leo la información y analizo en la tabla el par ordenado que le corresponde a cada estudiante. Luego, verifico si los materiales que los estudiantes reciclaron están ubicados correctamente en el sistema de coordenadas.',
    type: QuestionType.true_or_false_cp_objects,
    subtitle:
      'Con el fin de reducir la contaminación ambiental, 4 estudiantes de quinto año reciclaron diferentes deshechos.',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Sistema de coordenadas rectangulares',
  },
  {
    options:
      '[{"value":"67005","text":"SESENTA Y SIETE MIL CINCO"},{"value":"30001","text":"TREINTA MIL UNO"},{"value":"78569","text":"SETENTA Y OCHO MIL QUINIENTOS SESENTA Y NUEVE"},{"value":"40608","text":"CUARENTA MIL SEISCIENTOS OCHO"},{"value":"78976","text":"SETENTA Y OCHO MIL NOVECIENTOS SETENTA Y SEIS"},{"value":"34567","text":"TREINTA Y CUATRO MIL QUINIENTOS SESENTA Y SIETE"}]',
    title:
      'Ordene de manera correcta la escritura de cada números naturales de tres cifras:',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '{"correct":true,"options":[{"name":"En números:","text":"toneladas de basura al día.","value":"4 700"},{"name":"En letras:","text":"toneladas de basura reciclada al día.","value":"Ciento cuarenta y un"}]}',
    title:
      'Analizo la información y con base en la información anterior, verifico si están escritas correctamente las cifras.',
    type: QuestionType.true_or_false_numbers_and_text,
    subtitle:
      'Según el diario La Prensa de La Paz, Bolivia produce aproximadamente cuatro mil setecientas toneladas de basura al día y, de esta cantidad, recicla 141 toneladas.',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"value":"123003","response":[]},{"value":"560329","response":[]},{"value":"325471","response":[]}]',
    title: 'Escriba las siguientes cantidades en la tabla posicional:',
    type: QuestionType.positional_table,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"value":"910 608","text":"NOVECIENTOS DIEZ MIL SEISCIENTOS OCHO"},{"value":"200 457","text":"DOSCIENTOS MIL CUATROCIENTOS CINCUENTA Y SIETE"},{"value":"305 034","text":"TRESCIENTOS CINCO MIL TREINTA Y CUATRO"}]',
    title: 'Relaciona el valor con su escritura',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"text":"415874","value":"cuatrocientos quince mil ochocientos setenta y cuatro"},{"text":"924568","value":"novecientos veinticuatro mil quinientos sesenta y ocho"},{"text":"115987","value":"ciento quince mil novecientos ochenta y siete"}]',
    title: '¿Cómo se leen los siguientes números?:',
    type: QuestionType.write_value_from_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"text":"Doscientos cincuenta  y cinco mil seiscientos","value":"255600"},{"text":"Ciento veinticuatro mil quinientos treinta y nueve","value":"124539"},{"text":"Cuatrocientos cuarenta y siete mil nueve","value":"447009"}]',
    title: '¿Cómo se leen los siguientes números?:',
    type: QuestionType.write_value_from_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options: '{"correct":true}',
    title: 'Elija la opción correcta: Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      '¿La escritura de la siguiente cifra es correcta?: 873220 - Ochocientos setenta y tres mil doscientos veinte',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"text":"6963","selects":[{"text":"Unidades","correct":true},{"text":"Decenas de millar","correct":false},{"text":"Centenas","correct":false}]},{"text":"853210","selects":[{"text":"Unidades de millar","correct":true},{"text":"Decenas de millar","correct":false},{"text":"Decenas","correct":false}]},{"text":"321000","selects":[{"text":"Centenas de millar","correct":true},{"text":"Decenas de millar","correct":false},{"text":"Decenas","correct":false}]},{"text":"254830","selects":[{"text":"Centenas","correct":true},{"text":"Decenas","correct":false},{"text":"Unidades","correct":false}]}]',
    title:
      '¿Qué valor tiene la cifra 3 en los siguientes números según la tabla posicional?',
    type: QuestionType.select_place_table_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"value":"696321","text":"La suma de las unidades y las centenas es 4"},{"value":"354840","text":"Soy el resultado de multiplicar 59140 x 6"},{"value":"632152","text":"La cifra de las centenas es 1"},{"value":"693006","text":"Mi cifra de las unidades y centenas de millar es 6"},{"value":"853210","text":"Soy el mayor de todos"}]',
    title: 'Relaciona lo siguiente:',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso según corresponda:',
    type: QuestionType.true_or_false,
    subtitle:
      'Los Números naturales de hasta seis cifras se escribe separando de derecha a izquierda, de 3 en 3 cifras.',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuatrocientos sesenta y tres mil ochocientos cuarenta y seis"},{"value":true,"text":"Ochocientos cuarenta y dos mil quinientos setenta y nueve"}]}',
    title: 'Escoja la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Los Números naturales de hasta seis cifras se escribe separando de derecha a izquierda, de 3 en 3 cifras.',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"value":false,"text":"Cuatrocientos cincuenta y tres mil quinientos sesenta y tres","number":"453 563"},{"value":true,"text":"Seiscientos treinta y nueve mil ochocientos cuarenta y dos","number":"639 842"},{"value":false,"text":"Novecientos treinta y cinco mil cuatrocientos sesenta y ocho","number":"935 468"}]',
    title:
      '¿Qué cifras en números está escrita incorrectamente según su lectura?',
    type: QuestionType.choose_an_option_textnumber,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"value":false,"text":"Cuatrocientos cincuenta y tres mil quinientos sesenta y tres","number":"453 563"},{"value":false,"text":"Seiscientos treinta y nueve mil ochocientos cuarenta y dos","number":"639 482"},{"value":true,"text":"Novecientos treinta y cinco mil cuatrocientos setenta y ocho","number":"935 478"}]',
    title: '¿Qué cifra en letras está escrita incorrectamente?',
    type: QuestionType.choose_an_option_textnumber,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Novecientos treinta y cinco mil cuatrocientos sesenta y ocho"},{"value":false,"text":"Seiscientos treinta y nueve mil ochocientos cuarenta y dos"},{"value":true,"text":"Cuatrocientos sesenta y tres mil ochocientos cuarenta y seis"}]}',
    title: 'Escoja la opción correcta según su escrito en letras: 463 846',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '[{"text":"521489"},{"text":"254897"},{"text":"126504"},{"text":"625301"}]',
    title: 'Escucha y escribe los siguientes números',
    type: QuestionType.listen_numbers,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Números naturales de hasta seis cifras',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":false},{"text":"Centenas","value":true},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 8 en 2,894?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":true},{"text":"Centenas","value":false},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 5 en 3,654?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":"4689"}',
    title:
      'Arregla los dígitos 4, 9,8 y 6 para crear el número de cuatros dígitos más pequeño posible.',
    type: QuestionType.order,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso según corresponda el enunciado:',
    type: QuestionType.true_or_false,
    subtitle:
      'El valor relativo o posicional es aquel número que se lee según la ubicación en la tabla posicional?',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":false},{"text":"Centenas","value":true},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 8 en 2,894?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":true},{"text":"Centenas","value":false},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 5 en 3,654?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":true},{"text":"Centenas","value":false},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 7 en 6,872?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":false},{"text":"Decenas","value":false},{"text":"Centenas","value":false},{"text":"Millares","value":true}]}',
    title: '¿Cuál es el valor posicional del 7 en 3,872?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '{"options":[{"text":"Unidades","value":true},{"text":"Decenas","value":false},{"text":"Centenas","value":false},{"text":"Millares","value":false}]}',
    title: '¿Cuál es el valor posicional del 7 en 4,591?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":"9864"}',
    title:
      'Arregla los dígitos 6, 2, 9 y 5 para crear el número de cuatro dígitos más alto posible',
    type: QuestionType.order,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options:
      '[{"value":"CM","text":"Centena de mil"},{"value":"DM","text":"Decena de mil"},{"value":"UM","text":"Unidad de mil"},{"value":"C","text":"Centena"},{"value":"D","text":"Decena"},{"value":"U","text":"Unidad"}]',
    title:
      'Selaciona según corresponda las abreviaturas de las unidades en las lecturas',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":35002642}',
    title:
      'Observo la siguiente cifra y realizo su valor posicional según su lectura en la tabla posicional.',
    type: QuestionType.write_number_positional,
    subtitle: 'Valor posicional de 35 002 642:',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":26003743}',
    title:
      'Observo la siguiente cifra y realizo su valor posicional según su lectura en la tabla posicional.',
    type: QuestionType.write_number_positional,
    subtitle: 'Valor posicional de 26 003 743:',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":26003743}',
    title: 'Descomposición en base 10 de la siguiente cifra:',
    type: QuestionType.base10_descomposition,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":35002642}',
    title: 'Descomposición en base 10 de la siguiente cifra:',
    type: QuestionType.base10_descomposition,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":28003731}',
    title: 'Descomposición en base 10 de la siguiente cifra:',
    type: QuestionType.base10_descomposition,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":54003821}',
    title: 'Descomposición en base 10 de la siguiente cifra:',
    type: QuestionType.base10_descomposition,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Valor posicional',
  },
  {
    options: '{"value":[60000,60,3,0,0]}',
    title: 'Realizar la siguiente suma de valores posicionales',
    type: QuestionType.positional_sum,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"60063"},{"value":true,"text":"97820"},{"value":false,"text":"97734"},{"value":false,"text":"62487"}]}',
    title:
      'Elija la respuesta correcta de la siguiente suma de valores posicional:',
    type: QuestionType.choose_an_option,
    subtitle: '4 + 700 + 7000 + 30 + 90000',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"97820"},{"value":true,"text":"97976"},{"value":false,"text":"62487"}]}',
    title: 'Encuentre el resultado de la siguiente suma de valores:',
    type: QuestionType.choose_an_option,
    subtitle: '900 + 90000 + 6 + 7000 + 70',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"37968"},{"value":false,"text":"90076"},{"value":false,"text":"35875"}]}',
    title:
      'Elija la respuesta correcta de la siguiente suma de valores posicional:',
    type: QuestionType.choose_an_option,
    subtitle: '900 + 60 + 30000 + 7000 + 8',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options: '{"correct":true}',
    title:
      'Realice la suma de valores y verifique si la respuesta dada es correcta:',
    type: QuestionType.true_or_false,
    subtitle: '300 + 90 + 40000 + 7000 + 8 = 47398',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options: '{"correct":false}',
    title:
      'Realice la suma de valores y verifique si la respuesta dada es correcta:',
    type: QuestionType.true_or_false,
    subtitle: '6000 + 400 + 20 + 9 + 70000 = 78959',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options: '{"correct":true}',
    title:
      'Realice la suma de valores y verifique si la respuesta dada es correcta:',
    type: QuestionType.true_or_false,
    subtitle: '700 + 60 + 80000 + 5000 + 4 = 85764',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"96354"},{"value":false,"text":"95687"},{"value":true,"text":"94908"},{"value":false,"text":"95634"}]}',
    title:
      'Realice la suma de valores y escoja entre los resultados dado la respuesta correcta:',
    type: QuestionType.choose_an_option,
    subtitle: '8 + 0 + 900 + 4000 + 90000',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"86354"},{"value":true,"text":"85360"},{"value":false,"text":"86354"},{"value":false,"text":"89354"}]}',
    title:
      'Realice la suma de valores y escoja entre los resultados dado la respuesta correcta:',
    type: QuestionType.choose_an_option,
    subtitle: '0 + 60 + 300 + 5000 + 80000',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options: '{"correct":true}',
    title:
      'Realice la suma de valores y verifique si la respuesta dada es correcta:',
    type: QuestionType.true_or_false,
    subtitle: '2 + 0 + 700 + 3000 + 50000 = 53702',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"7 * 100 + 5 * 10 + 8 * 1"},{"value":false,"text":"7 * 1000 + 5 * 10 + 8 * 1"},{"value":false,"text":"7 * 1000 + 5 * 100 + 8 * 1"}]}',
    title: 'La Forma expandida de 758 es según su valor posicional:',
    type: QuestionType.choose_an_option,
    subtitle: '2 + 0 + 700 + 3000 + 50000 = 53702',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"7895"},{"value":false,"text":"5623"}],"columns":[{"title":"Forma estándar","data":["7895","5623"]},{"title":"Forma expandida","data":["7 * 1000 + 8 * 100 + 9 * 10 + 5 * 1","5 * 10000 + 6 * 100 + 2 * 10 + 3 * 1"]}]}',
    title:
      'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"option":false,"text":"789"},{"option":false,"text":"5623"},{"option":true,"text":"8562"}],"columns":[{"title":"Forma estándar","data":["789","5623","8562"]},{"title":"Forma expandida","data":["7 * 1000 + 8 * 100 + 9 * 10","5 * 10000 + 6 * 100 + 2 * 10 + 3 * 1","8 * 1000 + 5 * 100 + 6 * 10 + 2 * 1"]}]}',
    title:
      'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"options":[{"option":true,"text":"1547"},{"option":false,"text":"586"},{"option":false,"text":"3257"}],"columns":[{"title":"Forma expandida","data":["1000 + 500 + 40 + 7","800 + 50 + 6","300 + 2000 + 50 + 7"]},{"title":"Forma estándar","data":["1547","586","3257"]}]}',
    title:
      'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options:
      '{"correct":false,"columns":[{"title":"Forma expandida","data":["7000 + 500 + 20 + 1","800 + 50 + 6","3000 + 200 + 50 + 7"]},{"title":"Forma estándar","data":["7521","586","3257"]}]}',
    title:
      'Escoja la opción correcta verifique si la forma expandida y estándar están correctas:',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Suma de los valores posicionales',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: '8 672 416 > 8 675 316',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: '2 756 418 < 2 746 518',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La serie numérica solamente puede ser de 100 en 100',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"546 677"},{"value":true,"text":"546 675"},{"value":false,"text":"546 674"}]}',
    title: 'Es un número mayor que 546 674 y menor que 546 676',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"936 782"},{"value":false,"text":"936 787"},{"value":false,"text":"936 785"}]}',
    title: 'Es un numero menor que 936 784 y mayor que 936 781',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"sets":[{"title":"Números mayores a 700 000","options":[{"text":"700 001","value":"700001"},{"text":"800 020","value":"800020"},{"text":"900 030","value":"900030"}]},{"title":"Números menores a 500 000","options":[{"text":"499 600","value":"499600"},{"text":"499 000","value":"499000"},{"text":"400 999","value":"400999"}]}]}',
    title: 'Lleva los números a cada conjunto',
    type: QuestionType.drag_and_drop_sets,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '[{"value":"<","text1":"524 260","text2":"854 125"},{"value":">","text1":"658 014","text2":"658 010"},{"value":">","text1":"417 520","text2":"417 250"}]',
    title: 'Coloca los signos > ; < o = en cada caja',
    type: QuestionType.place_sign,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options: '{"correct":true}',
    title:
      'Para ordenar un número de 7 cifras, comparo las unidades de millón; si estas son iguales, comparo las centenas de mil y así sucesivamente',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuando va de menor a mayor"},{"value":true,"text":"Cuando va de mayor a menor"}]}',
    title: 'Patrón decreciente',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Cuando va de menor a mayor"},{"value":false,"text":"Cuando va de mayor a menor"}]}',
    title: 'Patrón creciente',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Una lista de números que siguen un mismo patrón"},{"value":false,"text":"Es una repetición de números que tienen algún tipo de orden"}]}',
    title: 'Un patrón numérico es:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Regla de formación"},{"value":false,"text":"Regla de aumento"}]}',
    title: 'El patrón numérico también se conoce cómo:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options: '{"correct":true}',
    title:
      'En una secuencia con patrón podemos encontrar operaciones como suma, resta, multiplicación y división.',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Una lista de números que siguen un mismo patrón."},{"value":false,"text":"Es una repetición de números que tienen algún tipo de orden."}]}',
    title: 'Una secuencia numérica es:',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cacao - 24 752 230"},{"value":false,"text":"Banano - 41 252 320"},{"value":true,"text":"Café - 62 262 457"}]}',
    title: 'Cúal es el producto con más producción',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Secuencia y orden de números naturales',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Reactas paralelas"},{"value":false,"text":"Rectas numéricas"},{"value":false,"text":"Rectas secantes"},{"value":false,"text":"Rectas perpendiculares"}],"urlDescription":"https://drive.google.com/uc?id=1zSm3JMtIUd7LsJ6wP6CcGmY2NXqZGTSs&export=view"}',
    title:
      'Rectas que siempre mantienen una misma distancia entre sí entre sí y nunca se cruzan',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Reactas paralelas"},{"value":false,"text":"Rectas numéricas"},{"value":true,"text":"Rectas secantes"},{"value":false,"text":"Rectas perpendiculares"}],"urlDescription":"https://drive.google.com/uc?id=1AFoGAqf_hlQ8GQGvdvv0jME1oRAuKnFf&export=view"}',
    title:
      'Rectas que se cruzan en un punto en común, formando ángulos distintos',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Reactas paralelas"},{"value":false,"text":"Rectas numéricas"},{"value":false,"text":"Rectas secantes"},{"value":true,"text":"Rectas perpendiculares"}]}',
    title:
      'Rectas que se cruzan en un punto formando cuatro ángulos iguales de 90º',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"20 vasos"},{"value":false,"text":"22 vasos"},{"value":false,"text":"25 vasos"},{"value":false,"text":"18 vasos"}],"urlDescription":"https://drive.google.com/uc?id=1gmCocRfhIPIvdfNUNwRGbWQa8Q3bqcrM&export=view"}',
    title: '¿Cuántos vasos puedes llenar con el garrafón de agua?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Robin Street es paralela a Owl Street"},{"value":false,"text":"Robin Street es perpendicular a Owl Street"},{"value":false,"text":"Robin Street no es paralela ni perpendicular a Owl Street"}],"urlDescription":"https://drive.google.com/uc?id=14vGoeo7DBSkHxPZSgNJM01JrFtoZC7wg&export=view"}',
    title:
      'Observa el siguiente mapa y responde la pregunta de acuerdo con la apariencia de las rectas que vemos ahí',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cuál de las siguientes afirmaciones sobre Robin Street y Owl Street es correcta?',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Rectas paralelas"},{"value":false,"text":"Rectas perpendiculares"},{"value":false,"text":"Ninguna de las opciones anteriores"}],"urlDescription":"https://drive.google.com/uc?id=1Ar4ZyASpI10oejxAvArO5sgFhGyesVdg&export=view"}',
    title: '¿Cuál término describe al diagrama?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Rectas perpendiculares","image":"https://drive.google.com/uc?id=1-1SRUkK1_3VhMXeTlrcta2LRCsXrg84V&export=view"},{"value":true,"text":"Rectas paralelas","image":"https://drive.google.com/uc?id=1LHEu06iPZgWka-KuNH3QKP2s-oty56rb&export=view"},{"value":false,"text":"Rectas","image":"https://drive.google.com/uc?id=1lG3GS5QuL1SeH0NhxDl34nJPAI2FOYFr&export=view"}]}',
    title: '¿Cuál de estos diagramas muestra rectas paralelas?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"2nd Street es paralela a Market Street"},{"value":true,"text":"2nd2 Street es perpendicular a Market Street"},{"value":false,"text":"2nd2 Street no es paralela ni perpendicular a Market Street"}],"urlDescription":"https://drive.google.com/uc?id=1DS38Pa70y37_-HvqthhJR4ldALltWYvE&export=view"}',
    title:
      'Observa el siguiente mapa y responde la pregunta de acuerdo a la apariencia de las rectas en el mapa',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cuál de las siguientes afirmaciones sobre 2	ext{nd}2nd2, start text, n, d, end text Street y Market Street es correcta?',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Rectas paralelas"},{"value":true,"text":"Rectas perpendiculares"},{"value":false,"text":"Ninguna de las opciones anteriores"}],"urlDescription":"https://drive.google.com/uc?id=1456qtehYL2Lm3uXWxX4a-lmVwZDCOo6_&export=view"}',
    title: '¿Cuál término describe al diagrama?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Rectas perpendicular","image":"https://drive.google.com/uc?id=1ealknapmoFmGktD2EJXeA-Uwt-oqy84M&export=view"},{"value":true,"text":"iguales","image":"https://drive.google.com/uc?id=1MyDlL017s8mpt3HYoLsRcLm83Fsr3g4_&export=view"},{"value":false,"text":"viradas","image":"https://drive.google.com/uc?id=1wmeea7uau6mmN-S_rHm2eu5BCYjkmJ2B&export=view"}]}',
    title: '¿Cuál de estos diagramas muestra rectas perpendiculares?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Las franjas blancas son paralelas entre sí"},{"value":false,"text":"Las franjas blancas son perpendiculares entre sí"},{"value":false,"text":"Las franjas blancas no son paralelas ni perpendiculares entre sí"}],"urlDescription":"https://drive.google.com/uc?id=1xUfhVhYHjA4byOQlf_XK18F5pISIyg6G&export=view"}',
    title:
      'Observa la bandera de Trinidad y Tobago. Responde la pregunta de acuerdo con la apariencia de las franjas en la bandera.',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cuál afirmación sobre las dos franjas blancas en la bandera de Trinidad y Tobago es correcta?',
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Rectas perpendiculares"},{"value":false,"text":"Rectas paralelas"},{"value":true,"text":"Ninguna de las opciones anteriores"}],"urlDescription":"https://drive.google.com/uc?id=1-1SRUkK1_3VhMXeTlrcta2LRCsXrg84V&export=view"}',
    title: '¿Cuál término describe al diagrama?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Las franjas amarillas son paralelas entre sí"},{"value":false,"text":"Las franjas amarillas son perpendiculares entre sí"},{"value":false,"text":"Las franjas amarillas no son paralelas ni perpendiculares entre sí"}],"urlDescription":"https://drive.google.com/uc?id=1fC10lXRO9M7pJhW9M3E3L8nqSHJv7rSZ&export=view"}',
    title:
      '¿Cuál afirmación sobre las dos franjas amarillas en la bandera de Aruba es correcta?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Las dos franjas amarillas en la bandera de Suecia son paralelas entre sí"},{"value":true,"text":"Las dos franjas amarillas en la bandera de Suecia son perpendiculares entre sí"},{"value":false,"text":"Las dos franjas amarillas en la bandera de Suecia no son paralelas ni perpendiculares entre sí"}],"urlDescription":"https://drive.google.com/uc?id=1GhBtzb9WwaG35KQN5AYCBL_Pj1IQ-sVB&export=view"}',
    title:
      '¿Cuál afirmación sobre las dos franjas amarillas en la bandera de Suecia es correcta?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Rectas paralelas"},{"value":true,"text":"Rectas perpendiculares"},{"value":false,"text":"Ninguna de las opciones anteriores"}],"urlDescription":"https://drive.google.com/uc?id=1pCBL-yLoTuIVM4T5OU_SCxtjLMJu5knL&export=view"}',
    title: '¿Cuál término describe al diagrama?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Rectas: paralelas, perpendiculares y secantes',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Es la parte del plano comprendida entre dos semirrectas que tienen el mismo punto de origen"},{"value":false,"text":"Figura formada por dos elementos separados de un extremo a otro sin medida alguna"},{"value":false,"text":"Es la porción de una recta limitada por otras dos  con un limite de distancia en un mismo punto finito"}]}',
    title: '¿Que es un ángulo?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Agudo, llano, completo"},{"value":false,"text":"Agudo, cóncavo, llano"},{"value":true,"text":"Agudo, obtuso, recto"}]}',
    title:
      '¿Cuáles son los tipos de ángulos que miden menos de 90 grados, mas de 90 grados y exactamente 90 grados?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"El metro"},{"value":false,"text":"La regla"},{"value":true,"text":"El transportador"}]}',
    title: '¿Cuál es el instrumento que se usa para medir ángulos?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=134SuRlBqrnaG6jLO5sPZrH8TmA6K5Z8w&export=view"}',
    title: '¿Es este un ángulo recto?',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=1fr4t7cyJcsHKp8qEE_i2lYqnPjODNO9Z&export=view"}',
    title:
      '¿Un ángulo llano no cambia de dirección para apuntar en la contraria?',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1gwkhtSzX1A9-9LJFxuAYEO-H-Bk59pcg&export=view"}',
    title:
      'Un ángulo obtuso es un ángulo que mide más de 90° pero menos de 180°',
    type: QuestionType.true_or_false,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Angulo agudo"},{"value":false,"text":"Angulo llano"},{"value":false,"text":"Angulo recto"},{"value":false,"text":"Angulo obtuso"}],"urlDescription":"https://drive.google.com/uc?id=1B2LacqUb0633105Gd_aal5rs0r7QOgKh&export=view"}',
    title: '¿El siguiente ángulo es agudo, recto, obtuso o llano?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Angulo recto"},{"value":false,"text":"Angulo agudo"},{"value":false,"text":"Angulo llano"},{"value":true,"text":"Angulo obtuso"}],"urlDescription":"https://drive.google.com/uc?id=1o4BxY8I2rLyC6cP8LDOyqryZxQwJkAUX&export=view"}',
    title: '¿El siguiente ángulo es agudo, recto, obtuso o llano?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Angulo llano"},{"value":false,"text":"Angulo recto"},{"value":false,"text":"Angulo obtuso"},{"value":false,"text":"Angulo agudo"}],"urlDescription":"https://drive.google.com/uc?id=1fr4t7cyJcsHKp8qEE_i2lYqnPjODNO9Z&export=view"}',
    title: '¿El siguiente ángulo es agudo, recto, obtuso o llano?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Angulo llano"},{"value":true,"text":"Angulo recto"},{"value":false,"text":"Angulo obtuso"},{"value":false,"text":"Angulo agudo"}],"urlDescription":"https://drive.google.com/uc?id=134SuRlBqrnaG6jLO5sPZrH8TmA6K5Z8w&export=view"}',
    title: '¿El siguiente ángulo es agudo, recto, obtuso o llano?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Un ángulo agudo"},{"value":false,"text":"Un ángulo obtuso"},{"value":false,"text":"Un ángulo recto"}],"urlDescription":"https://drive.google.com/uc?id=1MO6VfL09AbgD4KbzhIo-Ve_TUapXUp5w&export=view"}',
    title:
      '¿Qué tipo de ángulo es el ángulo resaltado en verde a continuación?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Un ángulo obtuso"},{"value":false,"text":"Un ángulo recto"},{"value":true,"text":"Un ángulo agudo"}],"urlDescription":"https://drive.google.com/uc?id=1jvAJE3gI1eCQFSFjjqUKFyymNoeJS7j5&export=view"}',
    title: '¿Qué tipo de ángulo es ∠ A?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Un ángulo obtuso"},{"value":true,"text":"Un ángulo recto"},{"value":false,"text":"Un ángulo agudo"}],"urlDescription":"https://drive.google.com/uc?id=1VO0jp8kj8Q59r4klKM0agtTch2fXucsu&export=view"}',
    title: '¿Qué tipo de ángulo es el ángulo resaltado?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"∠ 1"},{"value":true,"text":"∠ 2"},{"value":false,"text":"∠ 3"},{"value":true,"text":"∠ 4"}],"urlDescription":"https://drive.google.com/uc?id=14oYs0JbHTUEQEhErs0CWvbGsu0auU7O8&export=view"}',
    title: 'En el siguiente diagrama, ¿cuáles son ángulos agudos?',
    type: QuestionType.choose_any_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Un ángulo obtuso"},{"value":false,"text":"Un ángulo recto"},{"value":true,"text":"Un ángulo agudo"}],"urlDescription":"https://drive.google.com/uc?id=1MqjXkuZ6Wo1uEt8WPPvZqzwBHIkqdzKw&export=view"}',
    title: '¿Qué tipo de ángulo es ∠A?',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 1',
    topic: 'Ángulos: rectos, agudos y obtusos',
  },
  {
    options: '{"value":[234543,567896,348432]}',
    title: 'El resultado de la siguiente adición es:',
    type: QuestionType.positional_sum,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"value":[671874,547543,658532]}',
    title: 'El resultado de la siguiente adición es:',
    type: QuestionType.positional_sum,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1108761"},{"value":true,"text":"1359699"},{"value":false,"text":"1527761"}],"urlDescription":"https://drive.google.com/uc?id=1d-XoEgy1w3VF2Rrddy0RLx0QMuJn_2Oj&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1888761"},{"value":false,"text":"1577946"},{"value":false,"text":"1877949"}],"urlDescription":"https://drive.google.com/uc?id=1CCR9CHdZh4q_5t3py2o0OLEqSIiW-CPb&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1838781"},{"value":false,"text":"1564721"},{"value":true,"text":"2471431"}],"urlDescription":"https://drive.google.com/uc?id=1GpS2egSMK5MOec-RSMyH01aTMJB7BvXe&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente respuesta de la adición es correcta: 125628 + 542965 = 668593',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente respuesta de la adición es correcta: 467328 + 328252 = 795580',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"value":[654980,432739]}',
    title: 'Encuentre la diferencia de la resta:',
    type: QuestionType.positional_rest,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1-TSUePSqEmFKlRVb6sh1IB1_8BTJn-R5&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'Los terminos de la sustracción son: ',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"152532"},{"value":false,"text":"268486"},{"value":true,"text":"136446"}],"urlDescription":"https://drive.google.com/uc?id=1x0rvo-QiTigivEFOGkc5nXpcNjeYD_vc&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":true,"text":"548978"},{"value":false,"text":"136446"},{"value":false,"text":"412532"}],"urlDescription":"https://drive.google.com/uc?id=1sXv2QW1MglNyBjuCsG61tz5p0bU6-G14&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cuál es el minuendo de la siguiente resta:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"value":[287576,134265]}',
    title: 'Realice la siguiente sustracción',
    type: QuestionType.positional_rest,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"value":[23902,18746]}',
    title: 'Realice la siguiente sustracción',
    type: QuestionType.positional_rest,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente prueba de la resta es correcta?: 75.216 – 49.609 = 25.607 PRUEBA: 49.609 - 25.607= 75.216',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":"sustraendo","text":"sustraendo"},{"value":"diferencia","text":"diferencia"}],"correct":["sustraendo","diferencia"],"text":"El resultado de la resta es el __ + __ = minuendo"}',
    title: 'Complete lo siguiente',
    type: QuestionType.drag_and_drop_complete,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Adiciones y sustracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Minuendo, sustraendo, diferencia"},{"value":false,"text":"Sumando, sumado,minuendo"},{"value":true,"text":"Conmutativa, Asociativa, Elemento Neutro"},{"value":false,"text":"Sustraendo, diferencia,Elemeto Neutro"}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle: 'Cuáles son las propiedades de la adicción:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"100+50=60+100 150=160"},{"value":false,"text":"150+1=150+2 151=152"},{"value":true,"text":"100+50=50+100 150=150"},{"value":false,"text":"140+96=140+97 236=237"}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle: 'Cuál de los  siguientes ejemplo es una propiedad Conmutativa',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente propiedad Elemento Neutro es correcta?: 1.200 + 0 = 1.200',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"260 = 130"},{"value":false,"text":"200 = 120"},{"value":false,"text":"240 = 240"},{"value":true,"text":"250 = 250"}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cual es el resultado correcto de la siguiente propiedad asociativa?: (130 + 70) + 50 = 130 + (70 + 50)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Para sumar 3 sumandos podemos agruparlos de distintas maneras y siempre tendremos el mismo resultado"},{"value":true,"text":"El orden de los sumandos no altera la suma o el total. 142 = 142"},{"value":false,"text":"El elemento neutro de la adición es el cero. El cero al sumarlo con cualquier otro número natural da como resultado es mismo número."}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el concepto de la propiedad conmutativa',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Para sumar 3 sumandos podemos agruparlos de distintas maneras y siempre tendremos el mismo resultado"},{"value":false,"text":"El orden de los sumandos no altera la suma o el total. 142 = 142"},{"value":false,"text":"El elemento neutro de la adición es el cero. El cero al sumarlo con cualquier otro número natural da como resultado es mismo número."}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el concepto de la propiedad asociativa',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Elemento neutro: El elemento neutro de la adición es el cero. El cero al sumarlo con cualquier otro número natural da como resultado es mismo número',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '[{"text":"Para sumar 3 sumandos podemos agruparlos de distintas maneras y siempre tendremos el mismo resultado","selects":[{"text":"CONMUTATIVA","correct":false},{"text":"ELEMENTO NEUTRO","correct":false},{"text":"ASOCIATIVA","correct":true}]},{"text":"El orden de los sumandos no altera la suma o el total. 142 = 142","selects":[{"text":"CONMUTATIVA","correct":true},{"text":"ELEMENTO NEUTRO","correct":false},{"text":"ASOCIATIVA","correct":false}]},{"text":"El elemento neutro de la adición es el cero. El cero al sumarlo con cualquier otro número natural da como resultado es mismo número.","selects":[{"text":"CONMUTATIVA","correct":false},{"text":"ELEMENTO NEUTRO","correct":true},{"text":"ASOCIATIVA","correct":false}]}]',
    title: 'Seleccione la respuesta correcta de cada concepto',
    type: QuestionType.select_place_table_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"260 = 130"},{"value":true,"text":"200 = 200"},{"value":false,"text":"240 = 240"},{"value":false,"text":"250 = 250"}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cual es el resultado correcto de la siguiente propiedad asociativa?: 125 + 75 = 75 + 125 ',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"240 = 240"},{"value":false,"text":"200 = 200"},{"value":true,"text":"230 = 230"},{"value":false,"text":"250 = 250"}]}',
    title: 'Elija la opción correcta ',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cual es el resultado correcto de la siguiente propiedad asociativa?: (120 + 60) + 50 = 120 + (60 + 50)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4 = 4"},{"value":true,"text":"6 = 6"},{"value":false,"text":"7 = 7"}],"urlDescription":"https://drive.google.com/uc?id=1XKdfWUr3gS78377p3EQ0AwgXrKpb2C94&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cuál es la respuesta de las siguientes operaciones',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"567 + 789"},{"value":true,"text":"(34 + 12) + 26"},{"value":true,"text":"34 + (12 + 26)"},{"value":true,"text":"1.789 + 678"},{"value":true,"text":"678 + 1.789"},{"value":false,"text":"(60 + 40) + 34"}]}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle: 'Selecciones las adiciones  que tengan el mismo resultados',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente adición es una propiedad elemento neutro: (244 + 55) + 25 = 244 + (55 + 25)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options:
      '{"options":[{"value":false,"text":"0 + 46.578"},{"value":true,"text":"145+78 = 78+145"},{"value":false,"text":"96 + (12 + 23) = 12 + (96 + 23)"}]}',
    title: 'Selecciones la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'La siguiente operación es una propiedad conmutativa',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedades de la adición',
  },
  {
    options: '{"value":[1342,208]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[2482,315]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[3256,286]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[4589,125]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[138,32]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[635,69]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[9258,28]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[5872,13]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[1254,45]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"value":[2547,54]}',
    title: 'Realizar la siguiente operación',
    type: QuestionType.positional_mult,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"17.155.516"},{"value":false,"text":"17.851.369"},{"value":false,"text":"15.972.34"},{"value":false,"text":"17.156.89"}],"urlDescription":"https://drive.google.com/uc?id=1qxpwGtWX3wC6hGHHxdao--P7MZlfa7WZ&export=view"}',
    title: 'Seleccione el resultado correcto de la multiplicación',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"90.636"},{"value":false,"text":"14.972.63"},{"value":false,"text":"15.972"},{"value":false,"text":"15.972.58"}],"urlDescription":"https://drive.google.com/uc?id=1VHEAujOrmqLTzXcHT28RLis98v5XJSuO&export=view"}',
    title: 'Seleccione el resultado correcto de la multiplicación',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"146.389"},{"value":true,"text":"736.389"},{"value":false,"text":"756.269"}],"urlDescription":"https://drive.google.com/uc?id=1oSOmAI8nXTe7ayihZyudjFPj1NKNbFOG&export=view"}',
    title: 'Seleccione el resultado correcto de la multiplicación',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"825.588"},{"value":false,"text":"258.368"},{"value":false,"text":"584.678"}],"urlDescription":"https://drive.google.com/uc?id=16-zldSRWIWa9orGweWRiJsTUSyf9j9xc&export=view"}',
    title: 'Seleccione el resultado correcto de la multiplicación',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5.786.32"},{"value":false,"text":"12.5883"},{"value":true,"text":"1.847.664"}],"urlDescription":"https://drive.google.com/uc?id=1oCk8kLwIzdKsoMfIGY3lsZ5Tneu6n77m&export=view"}',
    title: 'Seleccione el resultado correcto de la multiplicación',
    type: QuestionType.choose_an_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Multiplicación',
  },
  {
    options: '{"base":[10,100,1000],"digits":[24,13,5]}',
    title:
      'Complete  la siguientes operaciones, tomando en cuenta los factores 10, 100 y 1 000.',
    type: QuestionType.table_multiplication,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"base":[100],"digits":[74,36,45]}',
    title:
      'Complete  la siguientes operaciones, tomando en cuenta los factores 100',
    type: QuestionType.table_multiplication,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"base":[100],"digits":[85,37,29]}',
    title:
      'Complete la siguientes operaciones, tomando en cuenta los factores 100',
    type: QuestionType.table_multiplication,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":2700,"text":"270 × 10"}',
    title: 'Resuelva la siguiente operación con base 10',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":74000,"text":"74 × 1000"}',
    title: 'Resuelva la siguiente operación con base 1000',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":21400,"text":"214 × 100"}',
    title: 'Resuelva la siguiente operación con base 100',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":23.25,"text":"2.325 × 10"}',
    title: 'Multiplicar decimales por 10',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":5149.2,"text":"51.492 × 100"}',
    title: 'Multiplicar decimales por 100',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"value":31264.1,"text":"31.2641 × 1000"}',
    title: 'Multiplicar decimales por 1000',
    type: QuestionType.simple_multi,
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 60 × 100 = 6000',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 56 × 100 = 56000',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 10 × 1000 = 12000',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 65 × 100 = 65000',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 49 × 10 = 490',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es 61 × 100 = 6100',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Producto de un número natural',
  },
  {
    options:
      '{"options":[{"value":true,"text":"(8 × 4) + (8 × 2)"},{"value":false,"text":"8 × 4 × 2"},{"value":false,"text":"(8 × 2) × 4"},{"value":false,"text":"Todas son falsas"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'La igualdad aplicando la propiedad distributiva 8 x (4 + 2) es...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Una división y una multiplicación."},{"value":true,"text":"Una suma y una resta."},{"value":false,"text":"Una resta y una potenciación."},{"value":false,"text":"Una Resta y una división."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'La propiedad distributiva puede aplicarse con...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      '¿Está bien aplicada la propiedad distributiva? 11 x (5 + 7) = 5 x (7 + 11)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"45"},{"value":false,"text":"65"},{"value":true,"text":"35"},{"value":false,"text":"25"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Resuelve: 5x(4+3) = (5x4) +(5x3)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5x15"},{"value":false,"text":"5x4 - 5x11"},{"value":true,"text":"5x4 + 5x11"},{"value":false,"text":"que no es posible aplicar propiedad distributiva"}],"urlDescription":"https://drive.google.com/uc?id=1xUhfpxFkKopasf2FGfikmxTbjJH5GIyH&export=view"}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Al aplicar la propiedad distributiva de la imagen, obtenemos... (recuerda que si no hay signo delante del paréntesis, es una multiplicación)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"45"},{"value":false,"text":"65"},{"value":true,"text":"54"},{"value":false,"text":"25"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Resuelve: 6x(4+5) = (6x4) +(6x5)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"42"},{"value":false,"text":"54"},{"value":false,"text":"63"},{"value":false,"text":"75"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Calcula 7 x (8-2) =',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"9"},{"value":false,"text":"12"},{"value":false,"text":"24"},{"value":false,"text":"28"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Calcula 3 x (8 - 5) =',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":true,"text":"3 X (2 + 4 ) = ( 3 X 2 ) + ( 3 X 4 )"},{"value":false,"text":"(2 X 3) X 4 = 2 X (3 X 4)"},{"value":false,"text":"9 x 8 = 8 X 9"},{"value":false,"text":"5 + 6 X 2"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Señala la operación que aplica la propiedad distributiva.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Propiedad Asociativa"},{"value":false,"text":"Propiedad Conmutativa"},{"value":true,"text":"Propiedad Distributiva con respecto a la suma"},{"value":false,"text":"Propiedad distributiva con respecto a la resta"}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Señala qué propiedad se represente 5(3+6)= (5x3)+(5x6)',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente operación es correcta?: 6 x (8 + 7) = 6 x 8 + 6 x 7',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente operación es correcta?: (5 + 2) x 10 = 5 x 10 + 2 x 10',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente operación es correcta?: (5+2)x10 = 5x10+4x5 10x(5+7) = 10x5+10x7',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La siguiente operación es correcta?: 12x(10-7) = 12x10 - 12x7',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente operación es correcta?: 12x(10-7) = 12x10-12x7 (8-7)x10 = 8x10-7x10',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Propiedad distributiva de la multiplicación',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Porque tiene dos lados"},{"value":false,"text":"Porque tiene tres lados"},{"value":true,"text":"Porque tiene cuatro lados"},{"value":false,"text":"Porque son figuras"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Por qué los paralelogramos y trapecios se llaman cuadriláteros?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"2 ángulos de 90 grados"},{"value":true,"text":"4 ángulos de 90 grados"},{"value":false,"text":"1 ángulo de 90 grados"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuántos ángulos de 90 grados tiene un rectángulo?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Tiene todos sus lados de diferente medida."},{"value":false,"text":"Tiene los lados paralelos de igual medida."},{"value":true,"text":"Tiene dos lados que forman una perpendicular."}],"urlDescription":"https://drive.google.com/uc?id=19TEWvobhGS4rapc4HAvjpgQsG9On3s3h&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'El trapecio rectángulo...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Lados no paralelos de igual medida"},{"value":false,"text":"Lados paralelos de igual medida"},{"value":false,"text":"Un lado no paralelo"}],"urlDescription":"https://drive.google.com/uc?id=14DPh0XFu0XCkeprFgN3VA4SNqrO55aal&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un trapecio isósceles tiene',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"un trapecio"},{"value":false,"text":"un triángulo"},{"value":false,"text":"un rombo"}],"urlDescription":"https://drive.google.com/uc?id=1uoeeVo2yPvaTIO7s3HM734wwMta95DmC&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Qué figura es...?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrado"},{"value":false,"text":"cuadrado rombo"},{"value":true,"text":"cuadrilátero paralelogramo rombo"},{"value":false,"text":"cuadrilátero paralelogramo cuadrado"}],"urlDescription":"https://drive.google.com/uc?id=12ZgUY5jQjfWyGLhb8_-_8vbchrYzhafJ&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Nombra la figura.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrilátero, paralelogramo"},{"value":false,"text":"cuadrilátero"},{"value":false,"text":"cuadrilátero, diamante"},{"value":true,"text":"cuadrilátero, trapecio"}],"urlDescription":"https://drive.google.com/uc?id=1XyqCkf-rYzxKv7H1IOUF-Om_jAIUZCRK&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Nombra la figura.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrilátero, paralelogramo, rectángulo, rombo, cuadrado"},{"value":false,"text":"cuadrado"},{"value":true,"text":"cuadrilátero, paralelogramo, cuadrado"},{"value":false,"text":"cuadrilátero, paralelogramo, rombo, cuadrado"}],"urlDescription":"https://drive.google.com/uc?id=1vsa52Fa4QrOWChNpUv07KgysEFGXcqeE&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Nombra la figura.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrilátero, rectángulo"},{"value":false,"text":"cuadrilátero, rectángulo, cuadrado"},{"value":true,"text":"cuadrilátero, paralelogramo, rectángulo"},{"value":false,"text":"cuadrilátero, paralelogramo, rectángulo, cuadrado"}],"urlDescription":"https://drive.google.com/uc?id=1tUcW37Tkc8EcEpN6KGwXf_CSm4yPxpcA&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Nombra la figura.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrilátero"},{"value":true,"text":"cuadrilátero, paralelogramo romboide"},{"value":false,"text":"cuadrilátero, rectángulo"},{"value":false,"text":"cuadrilátero, rombo"}],"urlDescription":"https://drive.google.com/uc?id=1gSdIDE0B_uXUDCAPXWZm4hrAMFiMRBAy&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Nombra la figura.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Paralelogramos - Trapecios - Trapezoides"},{"value":false,"text":"Paralelogramos - Cuadrados - rectángulos"},{"value":false,"text":"Cuadrado-rectángulo-rombo-romboide"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Los cuadriláteros pueden ser:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"romboides, rectángulo, rombos y cuadrados."},{"value":false,"text":"romboides, rectángulo, rombos y trapecios."},{"value":false,"text":"Todas son validas"},{"value":false,"text":"ninguna es valida"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Los paralelogramos pueden ser:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Son cuadriláteros todas aquellas figuras geométricas planas y cerradas con 4 lados.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Trapecios: tienen sólo 2 lados paralelos entre si. Los otros dos lados no son paralelos.',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"En cuadrados, rombos y trapecios"},{"value":false,"text":"En paralelogramos, trapecios y romboides"},{"value":true,"text":"En paralelogramos, trapecios y trapezoides"},{"value":false,"text":"En romboides, trapecios y rectángulos"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cómo clasificamos los cuadriláteros?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Tiene sus lados iguales"},{"value":false,"text":"Tiene sus ángulos iguales"},{"value":true,"text":"Tiene los lados paralelos dos en dos"},{"value":false,"text":"Tiene dos lados paralelos"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un paralelogramos es un cuadrilátero que',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrado","image":"https://drive.google.com/uc?id=1K_NTqcO8H6CjcLpddXb1teC87-65rmm8&export=view"},{"value":false,"text":"cuadrado-2","image":"https://drive.google.com/uc?id=1GRpdk9yAk16b7_Jk5Ulzd6cQezwGqPL0&export=view"},{"value":true,"text":"cuadrado-3","image":"https://drive.google.com/uc?id=1BqoCZl_FhAcsyrtxqouRfLQMCZjZSSlQ&export=view"},{"value":false,"text":"rombo","image":"https://drive.google.com/uc?id=1lgfnyvxo-1mj4dwjMxHcZ_juBw1ouOAo&export=view"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cuál de las siguientes figuras, tienen todos los lados paralelos 2 en 2 y 4 ángulos rectos?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"cuadrado","image":"https://drive.google.com/uc?id=1K_NTqcO8H6CjcLpddXb1teC87-65rmm8&export=view"},{"value":false,"text":"cuadrado-2","image":"https://drive.google.com/uc?id=1GRpdk9yAk16b7_Jk5Ulzd6cQezwGqPL0&export=view"},{"value":false,"text":"cuadrado-3","image":"https://drive.google.com/uc?id=1BqoCZl_FhAcsyrtxqouRfLQMCZjZSSlQ&export=view"},{"value":false,"text":"rombo","image":"https://drive.google.com/uc?id=1lgfnyvxo-1mj4dwjMxHcZ_juBw1ouOAo&export=view"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Cuál de las siguientes figuras, tiene sus lados y ángulos iguales?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"cuadrado","image":"https://drive.google.com/uc?id=1K_NTqcO8H6CjcLpddXb1teC87-65rmm8&export=view"},{"value":false,"text":"cuadrado-2","image":"https://drive.google.com/uc?id=1GRpdk9yAk16b7_Jk5Ulzd6cQezwGqPL0&export=view"},{"value":true,"text":"cuadrado-3","image":"https://drive.google.com/uc?id=14APR7MpJCgIVgmrxPKAGiNoX-_jBZygP&export=view"},{"value":false,"text":"rara","image":"https://drive.google.com/uc?id=1rbzVBdDS9nHI6wOK77PauoTYl4vgjRpa&export=view"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuál de estas figuras es un trapecio?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":false,"text":"cuadrado","image":"https://drive.google.com/uc?id=1K_NTqcO8H6CjcLpddXb1teC87-65rmm8&export=view"},{"value":true,"text":"cuadrado-2","image":"https://drive.google.com/uc?id=1GRpdk9yAk16b7_Jk5Ulzd6cQezwGqPL0&export=view"},{"value":false,"text":"cuadrado-3","image":"https://drive.google.com/uc?id=14APR7MpJCgIVgmrxPKAGiNoX-_jBZygP&export=view"},{"value":false,"text":"rara","image":"https://drive.google.com/uc?id=1rbzVBdDS9nHI6wOK77PauoTYl4vgjRpa&export=view"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuál de estas figuras es un trapecio?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Paralelogramos y trapecios',
  },
  {
    options:
      '{"options":[{"value":true,"text":"6 décadas"},{"value":false,"text":"12 décadas"},{"value":false,"text":"10 décadas"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Laika la perrita rusa que viajo al espacio hace 60 años, cuántos décadas han pasado',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"10 años"},{"value":false,"text":"100 años"},{"value":true,"text":"5 años"},{"value":false,"text":"1000 años"}],"urlDescription":"https://drive.google.com/uc?id=1GgzjQRFfobc-Yiv3F2MNCTAzlKwaoFt6&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un lustro es un periodo de tiempo de...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"10 años"},{"value":false,"text":"100 años"},{"value":false,"text":"5 años"},{"value":false,"text":"1000 años"}],"urlDescription":"https://drive.google.com/uc?id=1MzPXWG-gZ8FAH_0ioyp5gk1RgBgNhRSZ&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Una década es un periodo de tiempo de....',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"10 años"},{"value":true,"text":"100 años"},{"value":false,"text":"5 años"},{"value":false,"text":"1000 años"}],"urlDescription":"https://drive.google.com/uc?id=1jxOIpQPbW_umoweMJnOs9Mthhj2_QtzL&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un siglo es un periodo de tiempo de....',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"10.000 Años"},{"value":false,"text":"Siglos"},{"value":true,"text":"1000 Años"}],"urlDescription":"https://drive.google.com/uc?id=1Bwmjc9HGQ4T2d4xy8lYvcqiTjw1HLmEk&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un milenio equivale a...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"12 meses"},{"value":false,"text":"6 meses"},{"value":false,"text":"11 meses"}],"urlDescription":"https://drive.google.com/uc?id=1Bwmjc9HGQ4T2d4xy8lYvcqiTjw1HLmEk&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Un Año equivale a...',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"2 lustros"},{"value":false,"text":"5 Lustros"},{"value":false,"text":"1 Lustro"}],"urlDescription":"https://drive.google.com/uc?id=1Bwmjc9HGQ4T2d4xy8lYvcqiTjw1HLmEk&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Una Década ¿Cuántos lustros tiene?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Presente "},{"value":true,"text":"Pasado"},{"value":false,"text":"Futuro"}],"urlDescription":"https://drive.google.com/uc?id=1Ibz_Oid3cY0DPKin_iut62BtCBiHY8xO&export=view"}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cómo nombramos al tiempo de lo que ya ha pasado?',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"55 años "},{"value":false,"text":"40 años"},{"value":false,"text":"9 años"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Gustavo tiene 5 décadas y 1 lustro, su edad en años es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"30 años"},{"value":false,"text":"30 siglos"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '3 décadas es :',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1 lustro y una década"},{"value":false,"text":"una década y 2 lustros"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '15 años es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4 lustros y 5 lustros"},{"value":true,"text":"4 décadas y 1 lustro"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '45 años es :',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1 lustro y dos años"},{"value":false,"text":"2 lustros y dos años"},{"value":false,"text":"7 lustros y dos años"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '7 años es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"10 décadas"},{"value":false,"text":"10 lustros"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '100 años es',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"3 lustros y 5 años"},{"value":true,"text":"tres décadas y 1 lustro"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '35 años es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Dos lustros y dos años"},{"value":false,"text":"2 décadas y dos años"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '12 años es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5 años"},{"value":true,"text":"50 años"},{"value":false,"text":"5 lustros"}]}',
    title: 'Selecciona la respuesta correcta',
    type: QuestionType.choose_an_option,
    subtitle: '5 décadas es :',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'En un siglo hay 5 décadas',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'Los números romanos ya no se utilizan para nada',
    asignature: 'Matemáticas',
    unit: 'Unidad 2',
    topic: 'Siglo, década y lustro',
  },
  {
    options: '{"operation":"78 ÷ 4","correct":19,"residuo":2}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar mentalmente la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"33 ÷ 3","correct":11,"residuo":0}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar mentalmente la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"98 ÷ 6","correct":16,"residuo":2}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar mentalmente la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"90 ÷ 5","correct":18,"residuo":0}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar mentalmente la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"96 ÷ 8","correct":12,"residuo":0}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar mentalmente la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"12 ÷ 2","correct":6}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división de 1 cifra',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"36 ÷ 4","correct":9}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división de 1 cifra',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"28 ÷ 3","correct":9}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división de 1 cifra',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"39 ÷ 9","correct":4}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división de 1 cifra',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"52 ÷ 2","correct":26}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"73 ÷ 6","correct":12}',
    title: 'Resuelve la operación',
    type: QuestionType.operation_simple,
    subtitle: 'Realizar la siguiente división',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=10pr9r3qEbh5e98iRrGL3CZ5jIOb8x0q9&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'Verificar si la siguiente división es la correcta',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1d5TbnR0F7zo7DdFgPWaOnkdj_82mdgJh&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si la siguiente división y su comprobación son correcta ',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1"},{"value":true,"text":"2"},{"value":false,"text":"3"},{"value":false,"text":"6"},{"value":true,"text":"8"}]}',
    title: 'Selecciona los divisores de 8',
    type: QuestionType.choose_any_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1"},{"value":true,"text":"2"},{"value":true,"text":"3"},{"value":true,"text":"4"},{"value":true,"text":"6"},{"value":false,"text":"8"},{"value":false,"text":"10"},{"value":true,"text":"12"},{"value":false,"text":"14"},{"value":false,"text":"18"}]}',
    title: 'Selecciona los divisores de 12',
    type: QuestionType.choose_any_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options:
      '{"options":[{"value":true,"text":"1"},{"value":true,"text":"2"},{"value":true,"text":"3"},{"value":true,"text":"4"},{"value":true,"text":"6"},{"value":false,"text":"14"},{"value":true,"text":"24"},{"value":true,"text":"12"},{"value":true,"text":"8"}]}',
    title: 'Selecciona los divisores de 24',
    type: QuestionType.choose_any_option,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'División con una cifra en el divisor',
  },
  {
    options: '{"operation":"6 + 4 × 5","correct":26}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '{"operation":"8 × 2 - 6","correct":10}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '{"operation":"15 ÷ 50 x 2 – 4  + 6","correct":8}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '{"operation":"7 x 20 ÷ 5 – 8  + 6","correct":26}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '{"operation":"45 – 60  ÷ 2","correct":15}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '{"operation":"5 x 15 ÷ 3","correct":25}',
    title: 'Evalúa la expresión combinada',
    type: QuestionType.operation_simple,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"26","text":"7 x 4 – 2 ="},{"value":"6","text":"9 – (4 – 1) ="},{"value":"2"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"23","text":"7 x 3 + 2"},{"value":"21"},{"value":"35"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"22","text":"6 x 3 + 4"},{"value":"18"},{"value":"42"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '[{"value":"15","text":"7 + 2 x 4"},{"value":"8"},{"value":"36"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '[{"value":"7","text":"7 x 2 / 2"},{"value":"1"},{"value":"7"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"17","text":"5x 3 + 2/1"},{"value":"3"},{"value":"21"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"11","text":"3 x 3 + 2/1"},{"value":"21"},{"value":"8"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options: '[{"value":"2","text":"5 x 2 - 8"},{"value":"10"},{"value":"30"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '[{"value":"30","text":"7 x 4 -2+ 4"},{"value":"21"},{"value":"31"}]',
    title: 'Resuelve y arrastre la solución de cada operación combinada',
    type: QuestionType.drag_and_drop_text,
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Operaciones combinadas con números naturales',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5/2"},{"value":true,"text":"2/5"},{"value":false,"text":"3/6"},{"value":false,"text":"1/5"}],"urlDescription":"https://drive.google.com/uc?id=1imh393qcknmxMaKKW8V2E2OseiTPIrDM&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1/9"},{"value":false,"text":"8/1"},{"value":false,"text":"1/7"},{"value":true,"text":"1/8"}],"urlDescription":"https://drive.google.com/uc?id=1TJ5H0eyqqUHcMpkaP66EqE0U8hQ1iJgK&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":true,"text":"7/8"},{"value":false,"text":"7/9"},{"value":false,"text":"6/8"},{"value":false,"text":"8/7"}],"urlDescription":"https://drive.google.com/uc?id=1_8u1q5dP4wVAKc7de7pUfFgUq1v_Tk2X&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":true,"text":"4/8"},{"value":false,"text":"8/4"},{"value":false,"text":"5/8"},{"value":false,"text":"8/5"}],"urlDescription":"https://drive.google.com/uc?id=1rtOnh0p8ZUR0p1TZMu7YBQ4UEvVOO8eZ&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1/3"},{"value":true,"text":"1/4"},{"value":false,"text":"1/5"},{"value":false,"text":"4/1"}],"urlDescription":"https://drive.google.com/uc?id=1dQoeNZUrS0O4wlKZ5KSzooZH2s5Yq1Gu&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"3/2"},{"value":true,"text":"3/5"},{"value":false,"text":"3/6"},{"value":false,"text":"5/3"}],"urlDescription":"https://drive.google.com/uc?id=1rzNtsYe6uGkTrvDIDeluxiDOcZ5LdY9d&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5/7"},{"value":true,"text":"4/8"},{"value":false,"text":"4/4"},{"value":false,"text":"8/4"}],"urlDescription":"https://drive.google.com/uc?id=1-vrVSVcL4elMOKZ3jhjvJVHwU8ZVEY5_&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4/2"},{"value":true,"text":"2/4"},{"value":false,"text":"4/4"},{"value":false,"text":"4/1"}],"urlDescription":"https://drive.google.com/uc?id=17HiOhKgqYYdkyWISR7qI-TrtStvlzBgH&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1/2"},{"value":false,"text":"1/1"},{"value":true,"text":"2/2"},{"value":false,"text":"4/4"}],"urlDescription":"https://drive.google.com/uc?id=1HVho5NwDkLSE6SJMyWMxbM4d3Y1cmpHR&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4/2"},{"value":false,"text":"3/4"},{"value":true,"text":"1/4"},{"value":false,"text":"4/1"}],"urlDescription":"https://drive.google.com/uc?id=1zWPRYBR0-mNaoCyYSzJFdk3lVVcICMZY&export=view"}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Cual es el valor que representa la siguiente imagen?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4/2","image":"https://drive.google.com/uc?id=1rtOnh0p8ZUR0p1TZMu7YBQ4UEvVOO8eZ&export=view"},{"value":false,"text":"3/4","image":"https://drive.google.com/uc?id=1_8u1q5dP4wVAKc7de7pUfFgUq1v_Tk2X&export=view"},{"value":false,"text":"1/4","image":"https://drive.google.com/uc?id=1-vrVSVcL4elMOKZ3jhjvJVHwU8ZVEY5_&export=view"},{"value":true,"text":"4/1","image":"https://drive.google.com/uc?id=1gOfxQsdFTxRcORsXb93919GxWRwXVEhT&export=view"}]}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Esoja la figura que representa la siguiente fracción: 6/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4/2","image":"https://drive.google.com/uc?id=1dVLEuuIr5bf66DhqoXCdxevHXz0aZ1_g&export=view"},{"value":true,"text":"3/4","image":"https://drive.google.com/uc?id=1Yf5Y-mrt5rEbqXhf9DMccRHtxkKvUfuQ&export=view"},{"value":false,"text":"1/4","image":"https://drive.google.com/uc?id=1zerxGjJQx2telHHpz7l6PHzkyInknMaP&export=view"}]}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Esoja la figura que representa la siguiente fracción: 5/6',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"4/2","image":"https://drive.google.com/uc?id=1UjQGzOzn1jXwTYX9GWkUyIeB7tJsi-bY&export=view"},{"value":false,"text":"3/4","image":"https://drive.google.com/uc?id=1O6NYUc5Z_cxMDojU4UEJzBzj1oyZ0Y7O&export=view"},{"value":true,"text":"1/4","image":"https://drive.google.com/uc?id=1w_LiJHlUkrg2bAHQLSe_LmTZTYLRMIvo&export=view"}]}',
    title: 'Escoge la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Esoja la figura que representa la siguiente fracción: 4/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options: '{"correct":true}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente fracción se lee de la siguiente manera: Dos séptimos 2/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options: '{"correct":false}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'La siguiente fracción se lee de la siguiente manera: Seis  quintos 5/6',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Fracciones como números',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuando el numerador es mayor que el denominador"},{"value":false,"text":"Cuando los denominadores son iguales."},{"value":true,"text":"Cuando el numerador es menor que el denominador."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Propia:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Cuando el numerador es mayor que el denominador."},{"value":false,"text":"Cuando el numerador es menor que el denominador"},{"value":false,"text":"Cuando los denominadores son iguales."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Impropia:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuando el numerador es divisible para el denominador."},{"value":true,"text":"Cuando dos fracciones representan la misma cantidad o valor aunque se escriban diferente."},{"value":false,"text":"Cuando los denominadores son iguales."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Equivalente:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuando el numerador es menor que el denominador."},{"value":false,"text":"Cuando dos fracciones representan la misma cantidad."},{"value":true,"text":"Cuando el numerador es divisible para el denominador."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Aparente:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cuando el numerador es divisible para el denominador."},{"value":false,"text":"Cuando los denominadores son diferentes."},{"value":true,"text":"Cuando los denominadores son iguales."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Homogénea:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Cuando los denominadores son diferentes."},{"value":false,"text":"Cuando los denominadores son iguales."},{"value":false,"text":"Cuando el numerador es mayor que el denominador."}]}',
    title: 'Elige la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Elija la respuesta correcta de la siguiente definición de la fracción Heterogénea:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=1nhhW1__M2jhsSVHt8gL-dqwSfJE43DMI&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción. 2/3',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=1xtQ6qvORFxAOYB66IFDTbIziECo_Yw2N&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  4/8',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1o5j5eC04BqdkK51bkeL0eN9PRaik51fM&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción. .  8/4=2',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=1yB60cigcwuZPHe5VV6YlC13j23Hu3u3n&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  5/6  ',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=1W20pRi_PPyShOu_6w5rCCkITiQ4adKu3&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  4/5',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1-U_LK_PfFzKHfwBzkoGwMZvyGna1n9Sb&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  2/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1iV6RVtSBgAPWvMBET2BfP2bGy53_z0oj&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  5/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=1dDX8Yd1V1EzInBwrQiZvEouD31XuPTxn&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle:
      'Verificar si es correcto o incorrecto la siguiente representación gráfica de la fracción.  6/7',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Tipos de fracciones',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Triangulo escaleno"},{"value":true,"text":"Triangulo isósceles"},{"value":false,"text":"Triangulo equilátero"},{"value":false,"text":"Ninguna de las anteriores"}],"urlDescription":"https://drive.google.com/uc?id=1-Oj-lDV5jJD4p8xY-S8lX0njortHxAUp&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'El siguiente triangulo según sus lados es:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Todos sus lados iguales. "},{"value":false,"text":"No tiene nada de especial."},{"value":true,"text":"Todos sus lados diferentes."},{"value":false,"text":"Dos de sus lados iguales y uno diferente. "}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'El triangulo escaleno tiene ',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"correct":false,"image":"https://drive.google.com/uc?id=16qMPxaxWfQiSNtjFGztlKT7A8u9C2Iax&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'La suma de los ángulos internos de un triángulo es 150°',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Triángulo rectángulo."},{"value":false,"text":"Triángulo acutángulo."},{"value":false,"text":"Triángulo obtusángulo."}],"urlDescription":"https://drive.google.com/uc?id=159wdBhxiTAYUkI0ohnbitFejvmhd5wzd&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Según la medida de sus ángulos, este triángulo es...',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Poseer ángulos interiores agudos."},{"value":false,"text":"Poseer ángulos exteriores agudos."},{"value":false,"text":"Poseer ángulos interiores rectos."},{"value":false,"text":"Poseer ángulos."}],"urlDescription":"https://drive.google.com/uc?id=1sky19G9fA1H9QJ5RvopmHq-OTQqwsGQI&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'El triángulo acutángulo se caracteriza por...',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"180°"},{"value":false,"text":"360°"},{"value":false,"text":"280°"},{"value":false,"text":"150°"}],"urlDescription":"https://drive.google.com/uc?id=1hgvi7UL-IDC_eXKPblB8soKFcErQqG-B&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'La suma de los ángulos internos de un triángulo es',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"correct":true,"image":"https://drive.google.com/uc?id=17zUacOMA0E2lfU7Q28-PhQKLvBb2DafD&export=view"}',
    title: 'Verdadero o falso',
    type: QuestionType.true_or_false,
    subtitle: 'El siguiente triángulo es un triángulo obtusángulo.',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"X = 60"},{"value":false,"text":"X = 70"},{"value":false,"text":"X = 50"},{"value":false,"text":"X = 80"}],"urlDescription":"https://drive.google.com/uc?id=14njECipLX-w8ls7Cue8Ep9sG8qRUx5e2&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Encuentra el valor del Angulo faltante',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"95"},{"value":false,"text":"85"},{"value":false,"text":"35"},{"value":true,"text":"45"}],"urlDescription":"https://drive.google.com/uc?id=1_sKQ1fwW-TIvdgxWKRgoM0ZU7wlxxQR9&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Encuentra la medida desconocida "X"',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"100º"},{"value":true,"text":"140"},{"value":false,"text":"80"},{"value":false,"text":"18"}],"urlDescription":"https://drive.google.com/uc?id=1Y1PqAOEfjmRW2yXuQ4ZmfaIY7esG5xPq&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Calcular “x”:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"72"},{"value":false,"text":"108"},{"value":true,"text":"7"},{"value":false,"text":"12"}],"urlDescription":"https://drive.google.com/uc?id=1L7ib27rpsbCGWVEn-_DE105ckXKMjn9Q&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Determina el valor de "y"  en el siguiente ejercicio',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"36"},{"value":false,"text":"24"},{"value":false,"text":"7"},{"value":false,"text":"12"}],"urlDescription":"https://drive.google.com/uc?id=1m76jN0qukch2mamnG5GwTkH4i7WVU9X8&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Determina el valor de "x"  en el siguiente ejercicio',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"X=23"},{"value":true,"text":"X=18"},{"value":false,"text":"X=15"},{"value":false,"text":"X=25"}],"urlDescription":"https://drive.google.com/uc?id=1hr9k0Db46iFeA1zOJHz0ULSitaiNc27x&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Encuentra el valor de X',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"X=20"},{"value":false,"text":"X=40"},{"value":true,"text":"X=15"},{"value":false,"text":"X=25"}],"urlDescription":"https://drive.google.com/uc?id=1Ui9-qIsLbvR15R28jMgU7uyiICn9M4xM&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Encuentra el valor de X ',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Isósceles, acutángulo y obtusángulo"},{"value":false,"text":"Escaleno, acutángulo y obtusángulo"},{"value":false,"text":"Rectángulo, acutángulo y obtusángulo"},{"value":true,"text":"Rectángulo, acutángulo y equilátero"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: 'Según sus ángulos, existen tres tipos de triángulos:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Triángulos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"Unidad de referencia del Sistema Internacional de Unidades"},{"value":false,"text":"Objeto con el que se miden todas las longitudes"},{"value":true,"text":"Instrumento de medidas de longitud"}],"urlDescription":"https://drive.google.com/uc?id=1qiOOuM0pIEx8vFFBTZF3k2HuYjDhnM4o&export=view"}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle: '¿Qué es un metro?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Km"},{"value":true,"text":"M"},{"value":true,"text":"Cm"}],"urlDescription":"https://drive.google.com/uc?id=1t6VjO8zE1zR1vJbvlYJF4SiMzBfS9ugE&export=view"}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle:
      '¿Qué medidas podemos obtener utilizando el objeto de la fotografía?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Decimetro"},{"value":true,"text":"Decámetro"},{"value":false,"text":"Milimetro"},{"value":true,"text":"Hectómetro"}]}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle: '¿Qué medidas existen entre el metro y el kilómetro?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Cm"},{"value":false,"text":"Dam"},{"value":true,"text":"Mm"},{"value":false,"text":"Km"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuál de las siguientes es la unidad de longitud más pequeña?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Decímetros"},{"value":false,"text":"Decámetros "},{"value":false,"text":"Metros "},{"value":true,"text":"Kilómetros "}],"urlDescription":"https://drive.google.com/uc?id=1TV0bl3SKzvYVvMY9ZekR9M-c0bJ9C0Bg&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Imagina que vas en coche desde Madrid hasta Valencia. La distancia recorrida ¿en qué medida la pondrías?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Decímetros","image":"https://drive.google.com/uc?id=1-kR6GpYGV0BEumb5bgEgj0Phlao5e8Nm&export=view"},{"value":true,"text":"Decámetros ","image":"https://drive.google.com/uc?id=1VVqA1YHF1GlvqodutpH-QHGC9WVVde5K&export=view"},{"value":false,"text":"Metros ","image":"https://drive.google.com/uc?id=1PvflmTcJG_ntsU5U8l3XQa7r9EWlp_dn&export=view"},{"value":true,"text":"Kilómetros ","image":"https://drive.google.com/uc?id=1t1CfVNbrxLMY9UbR7Zd67qvKFqP-FiOR&export=view"}]}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle: '¿En qué casos utilizarías la unidad de longitud METRO?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Decímetros"},{"value":false,"text":"Decámetros "},{"value":true,"text":"Metros "},{"value":false,"text":"Kilómetros "}],"urlDescription":"https://drive.google.com/uc?id=1vs7VTvohVzEO9SNoRCZWCsO4loubiDvb&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      '7¿Qué medida utilizarías(la más acertada) para medir la longitud de un coche?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1 Km"},{"value":false,"text":"13 Km "},{"value":true,"text":"1.3 Km"},{"value":false,"text":"2 Km"}],"urlDescription":"https://drive.google.com/uc?id=1WQ15KnE0K6-5IGD4XD-3GKdsVlkBCYlH&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Si entre la casa de Pablo y la de Pedro hay 1300 metros. ¿Cuántos kilómetros hay?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"50 dm"},{"value":false,"text":"1 dm"},{"value":true,"text":"3 dm"},{"value":false,"text":"5 dm"}],"urlDescription":"https://drive.google.com/uc?id=1MzW7ofuvMI8AEnHQj2p5OjAacoNG6CQ3&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuántos dm mide esta sandía?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"30000 Km"},{"value":false,"text":"30 Km"},{"value":false,"text":"300 Km"},{"value":true,"text":"3 Km"}],"urlDescription":"https://drive.google.com/uc?id=1AjUiYPm2ITxbo9MnNBXDhsv6mQX5jieI&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuántos kilómetros mide este puente?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"111 mm"},{"value":false,"text":"110 mm"},{"value":true,"text":"210 mm"},{"value":false,"text":"21 mm"}],"urlDescription":"https://drive.google.com/uc?id=13AnDUNfZyu_GkTNlUjkldMCRMXcj9zQ5&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '¿Cuántos milímetros mide este libro?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1 Km"},{"value":false,"text":"1,350 Km"},{"value":true,"text":"1,3 Km"}],"urlDescription":"https://drive.google.com/uc?id=1OAtaCB2_moLnFh9ChggQ7lvS9RdXZwZM&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Roberto y sus amigos van a correr en un campeonato. Roberto corre 1 kilómetro, Javier corre 850 metros y David corre 450 metros. ¿ Cuántos kilómetros corren entre los tres?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"1 Km"},{"value":false,"text":"13 Km"},{"value":true,"text":"1,3 Km"},{"value":false,"text":"2 Km"}],"urlDescription":"https://drive.google.com/uc?id=1WQ15KnE0K6-5IGD4XD-3GKdsVlkBCYlH&export=view"}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      'Si entre la casa de Pablo y la de Pedro hay 1300 metros. ¿Cuántos kilómetros hay?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"Kilómetros"},{"value":true,"text":"Metros"},{"value":false,"text":"Centimetros"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle:
      '¿Qué medida de longitud utilizarías para calcular la suma de las alturas de todos tus compañeros de clase?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":false,"text":"13582 m"},{"value":true,"text":"13,5 Km"},{"value":false,"text":"1352 dam"},{"value":true,"text":"13,582 Km"}]}',
    title: 'Elija las opciones correctas',
    type: QuestionType.choose_any_option,
    subtitle:
      '¿Qué medida de longitud utilizarías para calcular la suma de las alturas de todos tus compañeros de clase?',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Medidas de longitud y sus múltiplos',
  },
  {
    options:
      '{"options":[{"value":true,"text":"3 590 decímetros cuadrados"},{"value":false,"text":"3,59 decímetros cuadrados "},{"value":false,"text":"359 decímetros cuadrados"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '35,9 metros cuadrados es igual a:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"0,85 decímetros cuadrados"},{"value":false,"text":"8,5 decímetros cuadrados"},{"value":true,"text":"0,0085 decímetros cuadrados"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '85 milímetros cuadrados es igual a:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"13 km "},{"value":true,"text":"1,3 km"},{"value":false,"text":"0,13 km"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '1300 m es igual a',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"37 000 centímetros cúbicos"},{"value":true,"text":"37 000 000 centímetros cúbicos"},{"value":false,"text":"3 700 centímetros cúbicos"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '37 metros cúbicos equivale a:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"0,011 metros cúbicos"},{"value":true,"text":"11 metros cúbicos"},{"value":false,"text":"11 000 metros cúbicos"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '11 000 000 de centímetros cúbicos equivalen a:',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":true,"text":"8000m"},{"value":false,"text":"800m"},{"value":false,"text":"80m"},{"value":false,"text":"0,008m"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '8 km = _________ m',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"7600 m"},{"value":false,"text":"760 m"},{"value":true,"text":"76 m"},{"value":false,"text":"7,6 m"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '0,76 km = _________ m',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"0,05 km"},{"value":false,"text":"0,005 km"},{"value":false,"text":"0,0005 km"},{"value":true,"text":"0,00005 km"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '0,5 dm = _________ km',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"2400 cm"},{"value":false,"text":"24000 cm"},{"value":true,"text":"240000 cm"},{"value":false,"text":"2400000 cm"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '24 hm =_______ cm',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"0,45 hm"},{"value":true,"text":"0,045 hm"},{"value":false,"text":"0,0045 hm"},{"value":false,"text":"0,00045 hm"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '45 dm =__________hm',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"470 cm"},{"value":false,"text":"4700 cm"},{"value":false,"text":"47000 cm"},{"value":true,"text":"470000 cm"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '4,7 km =________ cm',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"32 mm"},{"value":false,"text":"320 mm"},{"value":true,"text":"3200 mm"},{"value":false,"text":"32000 mm"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '3,2 m =________ mm',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"23 mm"},{"value":true,"text":"230 mm"},{"value":false,"text":"2300 mm"},{"value":false,"text":"32000 mm"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '0,23 m =_______ mm',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"9000m"},{"value":false,"text":"900m"},{"value":false,"text":"90"},{"value":true,"text":"9"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '900 cm = _____ m',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
  {
    options:
      '{"options":[{"value":false,"text":"5,5 km"},{"value":false,"text":"0,55 km"},{"value":true,"text":"0,055 km"},{"value":false,"text":"0,0055 km"}]}',
    title: 'Elija la opción correcta',
    type: QuestionType.choose_an_option,
    subtitle: '55 m =_____km',
    asignature: 'Matemáticas',
    unit: 'Unidad 3',
    topic: 'Conversiones de medidas de longitud',
  },
];
