import { typeQuestion } from '../types/game'
// prettier-ignore
export const data = [
  {
    type: 'true_or_false',
    _id: '63737509fd325626f8d33815',
    options: "'{\"correct\":true}'",
    subtitle: null,
    title: 'En una secuencia con patrón podemos encontrar operaciones como suma, resta, multiplicación y división.'
  },
  {
    type: 'choose_an_option',
    _id: '63737516fd325626f8d33817',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Cacao - 24 752 230\"},{\"value\":false,\"text\":\"Banano - 41 252 320\"},{\"value\":true,\"text\":\"Café - 62 262 457\"}]}'",
    subtitle: null,
    title: 'Cúal es el producto con más producción'
  },
  {
    type: 'put_points_in_cp',
    _id: '637371defd325626f8d337d1',
    options: "'[{\"x\":3,\"y\":5},{\"x\":6,\"y\":7},{\"x\":4,\"y\":2},{\"x\":5,\"y\":8},{\"x\":1,\"y\":4}]'",
    subtitle: '',
    title: 'Marcar estos puntos en la cuadricula'
  },
  {
    type: 'write_coor_cp',
    _id: '637371e5fd325626f8d337d2',
    options: "'[{\"x\":2,\"y\":3,\"url\":\"https://cdn-icons-png.flaticon.com/512/1960/1960021.png\",\"name\":\"León\"},{\"x\":1,\"y\":3,\"url\":\"https://cdn-icons-png.flaticon.com/512/547/547612.png\",\"name\":\"Familia\"},{\"x\":1,\"y\":5,\"url\":\"https://cdn-icons-png.flaticon.com/512/1046/1046283.png\",\"name\":\"Calculadora\"},{\"x\":3,\"y\":1,\"url\":\"https://cdn-icons-png.flaticon.com/512/864/864970.png\",\"name\":\"Escribir\"},{\"x\":3,\"y\":4,\"url\":\"https://cdn-icons-png.flaticon.com/512/2997/2997985.png\",\"name\":\"Reloj\"},{\"x\":5,\"y\":3,\"url\":\"https://cdn-icons-png.flaticon.com/512/6521/6521546.png\",\"name\":\"Mickey\"}]'",
    subtitle: '',
    title: 'Escriba las coordenadas de estos objetos'
  },
  {
    type: 'true_or_false_cp',
    _id: '6373720bfd325626f8d337d7',
    options: "'{\"correct\":true,\"points\":[{\"x\":4,\"y\":-1},{\"x\":4,\"y\":-2},{\"x\":1,\"y\":-3}]}'",
    subtitle: '',
    title: '¿Las siguientes coordenadas en el plano son correcta: A(4, -1) B(4, -2) C(1, -3)?'
  },
  {
    type: 'write_coor_cp',
    _id: '637371f4fd325626f8d337d4',
    options: "'[{\"x\":1,\"y\":1},{\"x\":1,\"y\":-3},{\"x\":2,\"y\":-5}]'",
    subtitle: '',
    title: 'Escribe los puntos del siguiente plano'
  },
  {
    type: 'drag_and_drop_objects',
    _id: '637371fbfd325626f8d337d5',
    options: "'[{\"x\":2,\"y\":2,\"url\":\"https://cdn-icons-png.flaticon.com/512/781/781291.png\"},{\"x\":5,\"y\":5,\"url\":\"https://cdn-icons-png.flaticon.com/512/1507/1507168.png\"},{\"x\":3,\"y\":4,\"url\":\"https://cdn-icons-png.flaticon.com/512/2333/2333094.png\"}]'",
    subtitle: '',
    title: 'Analice el plano cartesiano y Coloque la imagen en el punto que pertenecen cada par ordenado:'
  },
  {
    type: 'selects_points_in_cp',
    _id: '63737202fd325626f8d337d6',
    options: "'{\"correct\":false,\"points\":[{\"x\":2,\"y\":1,\"value\":false},{\"x\":4,\"y\":3,\"value\":true},{\"x\":7,\"y\":1,\"value\":true},{\"x\":3,\"y\":1,\"value\":true},{\"x\":6,\"y\":2,\"value\":false},{\"x\":8,\"y\":2,\"value\":true}]}'",
    subtitle: '',
    title: 'Observe la tabla y el sistema de coordenadas. Luego, señalo dando clic qué pares ordenados no corresponden a los puntos del plano.'
  },
  {
    type: 'true_or_false_cp_objects',
    _id: '63737216fd325626f8d337d8',
    options: "'{\"correct\":true,\"points\":[{\"x\":3,\"y\":2,\"url\":\"https://cdn-icons-png.flaticon.com/512/3307/3307015.png\",\"name\":\"Bolsa\",\"value\":true,\"resposable\":\"Carlos\"},{\"x\":7,\"y\":3,\"url\":\"https://cdn-icons-png.flaticon.com/512/685/685388.png\",\"name\":\"Caja\",\"value\":true,\"resposable\":\"Viviana\"},{\"x\":6,\"y\":1,\"url\":\"https://cdn-icons-png.flaticon.com/512/1236/1236977.png\",\"name\":\"Latas\",\"value\":true,\"resposable\":\"Jorge\"},{\"x\":1,\"y\":3,\"url\":\"https://cdn-icons-png.flaticon.com/512/1996/1996969.png\",\"name\":\"Botellas\",\"value\":true,\"resposable\":\"Priscila\"}]}'",
    subtitle: 'Con el fin de reducir la contaminación ambiental, 4 estudiantes de quinto año reciclaron diferentes deshechos.',
    title: 'Leo la información y analizo en la tabla el par ordenado que le corresponde a cada estudiante. Luego, verifico si los materiales que los estudiantes reciclaron están ubicados correctamente en el sistema de coordenadas.'
  },
  {
    type: 'drag_and_drop_text',
    _id: '6373728afd325626f8d337da',
    options: "'[{\"value\":\"67005\",\"text\":\"SESENTA Y SIETE MIL CINCO\"},{\"value\":\"30001\",\"text\":\"TREINTA MIL UNO\"},{\"value\":\"78569\",\"text\":\"SETENTA Y OCHO MIL QUINIENTOS SESENTA Y NUEVE\"},{\"value\":\"40608\",\"text\":\"CUARENTA MIL SEISCIENTOS OCHO\"},{\"value\":\"78976\",\"text\":\"SETENTA Y OCHO MIL NOVECIENTOS SETENTA Y SEIS\"},{\"value\":\"34567\",\"text\":\"TREINTA Y CUATRO MIL QUINIENTOS SESENTA Y SIETE\"}]'",
    subtitle: null,
    title: 'Ordene de manera correcta la escritura de cada números naturales de tres cifras:'
  },
  {
    type: 'true_or_false_numbers_and_text',
    _id: '637372bbfd325626f8d337db',
    options: "'{\"correct\":true,\"options\":[{\"name\":\"En números:\",\"text\":\"toneladas de basura al día.\",\"value\":\"4 700\"},{\"name\":\"En letras:\",\"text\":\"toneladas de basura reciclada al día.\",\"value\":\"Ciento cuarenta y un\"}]}'",
    subtitle: 'Según el diario La Prensa de La Paz, Bolivia produce aproximadamente cuatro mil setecientas toneladas de basura al día y, de esta cantidad, recicla 141 toneladas.',
    title: 'Analizo la información y con base en la información anterior, verifico si están escritas correctamente las cifras.'
  },
  {
    type: 'positional_table',
    _id: '637372c5fd325626f8d337dc',
    options: "'[{\"value\":\"123003\",\"response\":[]},{\"value\":\"560329\",\"response\":[]},{\"value\":\"325471\",\"response\":[]}]'",
    subtitle: null,
    title: 'Escriba las siguientes cantidades en la tabla posicional:'
  },
  {
    type: 'drag_and_drop_text',
    _id: '637373a3fd325626f8d337f3',
    options: "'[{\"value\":\"910 608\",\"text\":\"NOVECIENTOS DIEZ MIL SEISCIENTOS OCHO\"},{\"value\":\"200 457\",\"text\":\"DOSCIENTOS MIL CUATROCIENTOS CINCUENTA Y SIETE\"},{\"value\":\"305 034\",\"text\":\"TRESCIENTOS CINCO MIL TREINTA Y CUATRO\"}]'",
    subtitle: null,
    title: 'Relaciona el valor con su escritura'
  },
  {
    type: 'drag_and_drop_text',
    _id: '637373a3fd325626f8d337f6',
    options: "'[{\"value\":\"696321\",\"text\":\"La suma de las unidades y las centenas es 4\"},{\"value\":\"354840\",\"text\":\"Soy el resultado de multiplicar 59140 x 6\"},{\"value\":\"632152\",\"text\":\"La cifra de las centenas es 1\"},{\"value\":\"693006\",\"text\":\"Mi cifra de las unidades y centenas de millar es 6\"},{\"value\":\"853210\",\"text\":\"Soy el mayor de todos\"}]'",
    subtitle: null,
    title: 'Relaciona lo siguiente:'
  },
  {
    type: 'write_value_from_text',
    _id: '637372dafd325626f8d337df',
    options: "'[{\"text\":\"Doscientos cincuenta  y cinco mil seiscientos\",\"value\":\"255600\"},{\"text\":\"Ciento veinticuatro mil quinientos treinta y nueve\",\"value\":\"124539\"},{\"text\":\"Cuatrocientos cuarenta y siete mil nueve\",\"value\":\"447009\"}]'",
    subtitle: null,
    title: '¿Cómo se leen los siguientes números?:'
  },
  {
    type: 'select_place_table_option',
    _id: '637372edfd325626f8d337e1',
    options: "'[{\"text\":\"6963\",\"selects\":[{\"text\":\"Unidades\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Centenas\",\"correct\":false}]},{\"text\":\"853210\",\"selects\":[{\"text\":\"Unidades de millar\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Decenas\",\"correct\":false}]},{\"text\":\"321000\",\"selects\":[{\"text\":\"Centenas de millar\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Decenas\",\"correct\":false}]},{\"text\":\"254830\",\"selects\":[{\"text\":\"Centenas\",\"correct\":true},{\"text\":\"Decenas\",\"correct\":false},{\"text\":\"Unidades\",\"correct\":false}]}]'",
    subtitle: null,
    title: '¿Qué valor tiene la cifra 3 en los siguientes números según la tabla posicional?'
  },
  {
    type: 'choose_an_option_textnumber',
    _id: '63737316fd325626f8d337e6',
    options: "'[{\"value\":false,\"text\":\"Cuatrocientos cincuenta y tres mil quinientos sesenta y tres\",\"number\":\"453 563\"},{\"option\":false,\"text\":\"Seiscientos treinta y nueve mil ochocientos cuarenta y dos\",\"number\":\"639 482\"},{\"option\":true,\"text\":\"Novecientos treinta y cinco mil cuatrocientos setenta y ocho\",\"number\":\"935 478\"}]'",
    subtitle: null,
    title: '¿Qué cifra en letras está escrita incorrectamente?'
  },
  {
    type: 'listen_numbers',
    _id: '63737325fd325626f8d337e8',
    options: "'[{\"text\":\"521489\"},{\"text\":\"254897\"},{\"text\":\"126504\"},{\"text\":\"625301\"}]'",
    subtitle: null,
    title: 'Escucha y escribe los siguientes números'
  },
  {
    type: 'order',
    _id: '63737367fd325626f8d337eb',
    options: "'[\"4\", \"9\", \"8\", \"6\"]'",
    subtitle: null,
    title: 'Arregla los dígitos 4, 9,8 y 6 para crear el número de cuatros dígitos más pequeño posible.'
  },
  {
    type: 'order_max',
    _id: '6373739cfd325626f8d337f2',
    options: "'[\"4\", \"9\", \"8\", \"6\"]'",
    subtitle: null,
    title: 'Arregla los dígitos 6, 2, 9 y 5 para crear el número de cuatro dígitos más alto posible'
  },
  {
    type: 'write_number_positional',
    _id: '637373b3fd325626f8d337f5',
    options: "'{\"value\":26003743}'",
    subtitle: 'Valor posicional de 26 003 743:',
    title: 'Observo la siguiente cifra y realizo su valor posicional según su lectura en la tabla posicional.'
  },
  {
    type: 'base10_descomposition',
    _id: '637373cffd325626f8d337f9',
    options: "'{\"value\":54003821}'",
    subtitle: null,
    title: 'Descomposición en base 10 de la siguiente cifra:'
  },
  {
    type: 'positional_sum',
    _id: '637373f8fd325626f8d337fa',
    options: "'{\"value\":[60000,60,3,0,0]}'",
    subtitle: null,
    title: 'Realizar la siguiente suma de valores posicionales'
  },
  {
    type: 'drag_and_drop_sets',
    _id: '637374d8fd325626f8d3380e',
    options: "'{\"sets\":[{\"title\":\"Números mayores a 700 000\",\"options\":[{\"text\":\"700 001\",\"value\":\"700001\"},{\"text\":\"800 020\",\"value\":\"800020\"},{\"text\":\"900 030\",\"value\":\"900030\"}]},{\"title\":\"Números menores a 500 000\",\"options\":[{\"text\":\"499 600\",\"value\":\"499600\"},{\"text\":\"499 000\",\"value\":\"499000\"},{\"text\":\"400 999\",\"value\":\"400999\"}]}]}'",
    subtitle: null,
    title: 'Lleva los números a cada conjunto'
  },
  {
    type: 'place_sign',
    _id: '637374dffd325626f8d3380f',
    options: "'{\"operators\":[\">\",\"<\",\"=\"],\"values\":[[{\"value\":524260,\"text\":\"524 260\"},{\"value\":854125,\"text\":\"854 125\"}],[{\"value\":658014,\"text\":\"658 014\"},{\"value\":658010,\"text\":\"658 010\"}],[{\"value\":417520,\"text\":\"417 520\"},{\"value\":417250,\"text\":\"417 250\"}]]}'",
    subtitle: null,
    title: 'Coloca los signos > ; < o = en cada caja'
  }
] as {
  _id: string
  options: string
  title: string
  type: typeQuestion
  subtitle: string | null
}[]
