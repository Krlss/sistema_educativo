import { typeQuestion } from '../types/game'
// prettier-ignore
export const data = [
 /* {
    type: 'true_or_false',
    _id: '637370e6fd325626f8d337ca',
    options: "'{\"correct\":true}'",
    subtitle: 'El nombre que recibe el eje vertical es eje y o de ordenadas',
    title: 'Elija la opción correcta: Verdadero o falso'
  },
  {
    type: 'choose_an_option',
    _id: '6373711efd325626f8d337cb',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Ordenadas\"},{\"value\":true,\"text\":\"Abscisas\"}]}'",
    subtitle: '¿Qué nombre recibe el eje horizontal (recta horizontal)?',
    title: 'Elija la opción correcta según corresponda:'
  },
   {
    type: 'put_points_in_cp',
    _id: '63737174fd325626f8d337cc',
    options: "'[{\"x\":2,\"y\":3}]'",
    subtitle: null,
    title: 'Represente las coordenadas (x=2,y=3) en el plano cartesiano:'
  },
  {
    type: 'put_points_in_cp',
    _id: '637371bafd325626f8d337cd',
    options: "'[{\"x\":-3,\"y\":3}]'",
    subtitle: null,
    title: 'Represente las coordenadas (x=-3,y=3) en el plano cartesiano:'
  },
  {
    type: 'put_points_in_cp',
    _id: '637371c4fd325626f8d337ce',
    options: "'[{\"x\":1,\"y\":4}]'",
    subtitle: null,
    title: 'Represente las coordenadas (x=1,y=4) en el plano cartesiano:'
  },
  {
    type: 'put_points_in_cp',
    _id: '637371cdfd325626f8d337cf',
    options: "'[{\"x\":2,\"y\":-4}]'",
    subtitle: null,
    title: 'Represente las coordenadas (x=2,y=-4) en el plano cartesiano:'
  },
  {
    type: 'put_points_in_cp',
    _id: '637371d6fd325626f8d337d0',
    options: "'[{\"x\":4,\"y\":-1},{\"x\":-2,\"y\":4},{\"x\":1,\"y\":1}]'",
    subtitle: '',
    title: 'Ubique las coordenadas en  el punto correspondiente'
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
    _id: '637371ecfd325626f8d337d3',
    options: "'{\"correct\":false,\"points\":[{\"x\":4,\"y\":-1}]}'",
    subtitle: '',
    title: '¿La siguiente coordenada en el plano es la correcta: A(4, -3)?'
  },  {
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
    type: 'true_or_false_cp',
    _id: '6373720bfd325626f8d337d7',
    options: "'{\"correct\":true,\"points\":[{\"x\":4,\"y\":-1},{\"x\":4,\"y\":-2},{\"x\":1,\"y\":-3}]}'",
    subtitle: '',
    title: '¿Las siguientes coordenadas en el plano son correcta: A(4, -1) B(4, -2) C(1, -3)?'
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
    _id: '637372ccfd325626f8d337dd',
    options: "'[{\"value\":\"910 608\",\"text\":\"NOVECIENTOS DIEZ MIL SEISCIENTOS OCHO\"},{\"value\":\"200 457\",\"text\":\"DOSCIENTOS MIL CUATROCIENTOS CINCUENTA Y SIETE\"},{\"value\":\"305 034\",\"text\":\"TRESCIENTOS CINCO MIL TREINTA Y CUATRO\"}]'",
    subtitle: null,
    title: 'Relaciona el valor con su escritura'
  }, */
  {
    type: 'write_value_from_text',
    _id: '637372d2fd325626f8d337de',
    options: "'[{\"text\":\"415874\",\"value\":\"cuatrocientos quince mil ochocientos setenta y cuatro\"},{\"text\":\"924568\",\"value\":\"novecientos veinticuatro mil quinientos sesenta y ocho\"},{\"text\":\"115987\",\"value\":\"ciento quince mil novecientos ochenta y siete\"}]'",
    subtitle: null,
    title: '¿Cómo se leen los siguientes números?:'
  },
  {
    type: 'write_value_from_text',
    _id: '637372dafd325626f8d337df',
    options: "'[{\"text\":\"Doscientos cincuenta  y cinco mil seiscientos\",\"value\":\"255600\"},{\"text\":\"Ciento veinticuatro mil quinientos treinta y nueve\",\"value\":\"124539\"},{\"text\":\"Cuatrocientos cuarenta y siete mil nueve\",\"value\":\"447009\"}]'",
    subtitle: null,
    title: '¿Cómo se leen los siguientes números?:'
  },
  {
    type: 'true_or_false',
    _id: '637372e3fd325626f8d337e0',
    options: "'{\"correct\":true}'",
    subtitle: '¿La escritura de la siguiente cifra es correcta?: 873220 - Ochocientos setenta y tres mil doscientos veinte',
    title: 'Elija la opción correcta: Verdadero o falso'
  },
  {
    type: 'select_place_table_option',
    _id: '637372edfd325626f8d337e1',
    options: "'[{\"text\":\"6963\",\"selects\":[{\"text\":\"Unidades\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Centenas\",\"correct\":false}]},{\"text\":\"853210\",\"selects\":[{\"text\":\"Unidades de millar\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Decenas\",\"correct\":false}]},{\"text\":\"321000\",\"selects\":[{\"text\":\"Centenas de millar\",\"correct\":true},{\"text\":\"Decenas de millar\",\"correct\":false},{\"text\":\"Decenas\",\"correct\":false}]},{\"text\":\"254830\",\"selects\":[{\"text\":\"Centenas\",\"correct\":true},{\"text\":\"Decenas\",\"correct\":false},{\"text\":\"Unidades\",\"correct\":false}]}]'",
    subtitle: null,
    title: '¿Qué valor tiene la cifra 3 en los siguientes números según la tabla posicional?'
  },
  {
    type: 'drag_and_drop_text',
    _id: '637372f4fd325626f8d337e2',
    options: "'[{\"value\":\"696321\",\"text\":\"La suma de las unidades y las centenas es 4\"},{\"value\":\"354840\",\"text\":\"Soy el resultado de multiplicar 59140 x 6\"},{\"value\":\"632152\",\"text\":\"La cifra de las centenas es 1\"},{\"value\":\"693006\",\"text\":\"Mi cifra de las unidades y centenas de millar es 6\"},{\"value\":\"853210\",\"text\":\"Soy el mayor de todos\"}]'",
    subtitle: null,
    title: 'Relaciona lo siguiente:'
  },
  {
    type: 'true_or_false',
    _id: '637372fdfd325626f8d337e3',
    options: "'{\"correct\":true}'",
    subtitle: 'Los Números naturales de hasta seis cifras se escribe separando de derecha a izquierda, de 3 en 3 cifras.',
    title: 'Verdadero o falso según corresponda:'
  },
  {
    type: 'choose_an_option',
    _id: '63737307fd325626f8d337e4',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Cuatrocientos sesenta y tres mil ochocientos cuarenta y seis\"},{\"value\":true,\"text\":\"Ochocientos cuarenta y dos mil quinientos setenta y nueve\"}]}'",
    subtitle: 'Los Números naturales de hasta seis cifras se escribe separando de derecha a izquierda, de 3 en 3 cifras.',
    title: 'Escoja la opción correcta'
  } /*
  {
    type: 'choose_an_option_textnumber',
    _id: '6373730ffd325626f8d337e5',
    options: "'[{\"value\":false,\"text\":\"Cuatrocientos cincuenta y tres mil quinientos sesenta y tres\",\"number\":\"453 563\"},{\"value\":true,\"text\":\"Seiscientos treinta y nueve mil ochocientos cuarenta y dos\",\"number\":\"639 842\"},{\"value\":false,\"text\":\"Novecientos treinta y cinco mil cuatrocientos sesenta y ocho\",\"number\":\"935 468\"}]'",
    subtitle: null,
    title: '¿Qué cifras en números está escrita incorrectamente según su lectura?'
  },
  {
    type: 'choose_an_option_textnumber',
    _id: '63737316fd325626f8d337e6',
    options: "'[{\"value\":false,\"text\":\"Cuatrocientos cincuenta y tres mil quinientos sesenta y tres\",\"number\":\"453 563\"},{\"value\":false,\"text\":\"Seiscientos treinta y nueve mil ochocientos cuarenta y dos\",\"number\":\"639 482\"},{\"value\":true,\"text\":\"Novecientos treinta y cinco mil cuatrocientos setenta y ocho\",\"number\":\"935 478\"}]'",
    subtitle: null,
    title: '¿Qué cifra en letras está escrita incorrectamente?'
  },
  {
    type: 'choose_an_option',
    _id: '6373731dfd325626f8d337e7',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Novecientos treinta y cinco mil cuatrocientos sesenta y ocho\"},{\"value\":false,\"text\":\"Seiscientos treinta y nueve mil ochocientos cuarenta y dos\"},{\"value\":true,\"text\":\"Cuatrocientos sesenta y tres mil ochocientos cuarenta y seis\"}]}'",
    subtitle: null,
    title: 'Escoja la opción correcta según su escrito en letras: 463 846'
  },
  {
    type: 'listen_numbers',
    _id: '63737325fd325626f8d337e8',
    options: "'[{\"text\":\"521489\"},{\"text\":\"254897\"},{\"text\":\"126504\"},{\"text\":\"625301\"}]'",
    subtitle: null,
    title: 'Escucha y escribe los siguientes números'
  },
  {
    type: 'choose_an_option',
    _id: '63737358fd325626f8d337e9',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":false},{\"text\":\"Centenas\",\"value\":true},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 8 en 2,894?'
  },
  {
    type: 'choose_an_option',
    _id: '6373735ffd325626f8d337ea',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":true},{\"text\":\"Centenas\",\"value\":false},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 5 en 3,654?'
  },
  {
    type: 'order',
    _id: '63737367fd325626f8d337eb',
    options: "'{\"value\":\"4689\"}'",
    subtitle: null,
    title: 'Arregla los dígitos 4, 9,8 y 6 para crear el número de cuatros dígitos más pequeño posible.'
  },
  {
    type: 'true_or_false',
    _id: '6373736ffd325626f8d337ec',
    options: "'{\"correct\":true}'",
    subtitle: 'El valor relativo o posicional es aquel número que se lee según la ubicación en la tabla posicional?',
    title: 'Verdadero o falso según corresponda el enunciado:'
  },
  {
    type: 'choose_an_option',
    _id: '63737378fd325626f8d337ed',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":false},{\"text\":\"Centenas\",\"value\":true},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 8 en 2,894?'
  },
  {
    type: 'choose_an_option',
    _id: '6373737ffd325626f8d337ee',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":true},{\"text\":\"Centenas\",\"value\":false},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 5 en 3,654?'
  },
  {
    type: 'choose_an_option',
    _id: '63737386fd325626f8d337ef',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":true},{\"text\":\"Centenas\",\"value\":false},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 7 en 6,872?'
  },
  {
    type: 'choose_an_option',
    _id: '6373738dfd325626f8d337f0',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":false},{\"text\":\"Decenas\",\"value\":false},{\"text\":\"Centenas\",\"value\":false},{\"text\":\"Millares\",\"value\":true}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 7 en 3,872?'
  },
  {
    type: 'choose_an_option',
    _id: '63737394fd325626f8d337f1',
    options: "'{\"options\":[{\"text\":\"Unidades\",\"value\":true},{\"text\":\"Decenas\",\"value\":false},{\"text\":\"Centenas\",\"value\":false},{\"text\":\"Millares\",\"value\":false}]}'",
    subtitle: null,
    title: '¿Cuál es el valor posicional del 7 en 4,591?'
  },
  {
    type: 'order',
    _id: '6373739cfd325626f8d337f2',
    options: "'{\"value\":\"9652\"}'",
    subtitle: null,
    title: 'Arregla los dígitos 6, 2, 9 y 5 para crear el número de cuatro dígitos más alto posible'
  },
  {
    type: 'drag_and_drop_text',
    _id: '637373a3fd325626f8d337f3',
    options: "'[{\"value\":\"CM\",\"text\":\"Centena de mil\"},{\"value\":\"DM\",\"text\":\"Decena de mil\"},{\"value\":\"UM\",\"text\":\"Unidad de mil\"},{\"value\":\"C\",\"text\":\"Centena\"},{\"value\":\"D\",\"text\":\"Decena\"},{\"value\":\"U\",\"text\":\"Unidad\"}]'",
    subtitle: null,
    title: 'Selaciona según corresponda las abreviaturas de las unidades en las lecturas'
  },
  {
    type: 'write_number_positional',
    _id: '637373abfd325626f8d337f4',
    options: "'{\"value\":35002642}'",
    subtitle: 'Valor posicional de 35 002 642:',
    title: 'Observo la siguiente cifra y realizo su valor posicional según su lectura en la tabla posicional.'
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
    _id: '637373bafd325626f8d337f6',
    options: "'{\"value\":26003743}'",
    subtitle: null,
    title: 'Descomposición en base 10 de la siguiente cifra:'
  },
  {
    type: 'base10_descomposition',
    _id: '637373c1fd325626f8d337f7',
    options: "'{\"value\":35002642}'",
    subtitle: null,
    title: 'Descomposición en base 10 de la siguiente cifra:'
  },
  {
    type: 'base10_descomposition',
    _id: '637373c9fd325626f8d337f8',
    options: "'{\"value\":28003731}'",
    subtitle: null,
    title: 'Descomposición en base 10 de la siguiente cifra:'
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
    type: 'choose_an_option',
    _id: '63737412fd325626f8d337fb',
    options: "'{\"options\":[{\"value\":false,\"text\":\"60063\"},{\"value\":true,\"text\":\"97820\"},{\"value\":false,\"text\":\"97734\"},{\"value\":false,\"text\":\"62487\"}]}'",
    subtitle: '4 + 700 + 7000 + 30 + 90000',
    title: 'Elija la respuesta correcta de la siguiente suma de valores posicional:'
  },
  {
    type: 'choose_an_option',
    _id: '6373741bfd325626f8d337fc',
    options: "'{\"options\":[{\"value\":false,\"text\":\"97820\"},{\"value\":true,\"text\":\"97976\"},{\"value\":false,\"text\":\"62487\"}]}'",
    subtitle: '900 + 90000 + 6 + 7000 + 70',
    title: 'Encuentre el resultado de la siguiente suma de valores:'
  },
  {
    type: 'choose_an_option',
    _id: '6373742bfd325626f8d337fd',
    options: "'{\"options\":[{\"value\":true,\"text\":\"37968\"},{\"value\":false,\"text\":\"90076\"},{\"value\":false,\"text\":\"35875\"}]}'",
    subtitle: '900 + 60 + 30000 + 7000 + 8',
    title: 'Elija la respuesta correcta de la siguiente suma de valores posicional:'
  },
  {
    type: 'true_or_false',
    _id: '63737433fd325626f8d337fe',
    options: "'{\"correct\":true}'",
    subtitle: '300 + 90 + 40000 + 7000 + 8 = 47398',
    title: 'Realice la suma de valores y verifique si la respuesta dada es correcta:'
  },
  {
    type: 'true_or_false',
    _id: '6373743afd325626f8d337ff',
    options: "'{\"correct\":false}'",
    subtitle: '6000 + 400 + 20 + 9 + 70000 = 78959',
    title: 'Realice la suma de valores y verifique si la respuesta dada es correcta:'
  },
  {
    type: 'true_or_false',
    _id: '63737442fd325626f8d33800',
    options: "'{\"correct\":true}'",
    subtitle: '700 + 60 + 80000 + 5000 + 4 = 85764',
    title: 'Realice la suma de valores y verifique si la respuesta dada es correcta:'
  },
  {
    type: 'choose_an_option',
    _id: '6373744afd325626f8d33801',
    options: "'{\"options\":[{\"value\":false,\"text\":\"96354\"},{\"value\":false,\"text\":\"95687\"},{\"value\":true,\"text\":\"94908\"},{\"value\":false,\"text\":\"95634\"}]}'",
    subtitle: '8 + 0 + 900 + 4000 + 90000',
    title: 'Realice la suma de valores y escoja entre los resultados dado la respuesta correcta:'
  },
  {
    type: 'choose_an_option',
    _id: '63737452fd325626f8d33802',
    options: "'{\"options\":[{\"value\":false,\"text\":\"86354\"},{\"value\":true,\"text\":\"85360\"},{\"value\":false,\"text\":\"86354\"},{\"value\":false,\"text\":\"89354\"}]}'",
    subtitle: '0 + 60 + 300 + 5000 + 80000',
    title: 'Realice la suma de valores y escoja entre los resultados dado la respuesta correcta:'
  },
  {
    type: 'true_or_false',
    _id: '63737459fd325626f8d33803',
    options: "'{\"correct\":true}'",
    subtitle: '2 + 0 + 700 + 3000 + 50000 = 53702',
    title: 'Realice la suma de valores y verifique si la respuesta dada es correcta:'
  },
  {
    type: 'choose_an_option',
    _id: '63737461fd325626f8d33804',
    options: "'{\"options\":[{\"value\":true,\"text\":\"7 * 100 + 5 * 10 + 8 * 1\"},{\"value\":false,\"text\":\"7 * 1000 + 5 * 10 + 8 * 1\"},{\"value\":false,\"text\":\"7 * 1000 + 5 * 100 + 8 * 1\"}]}'",
    subtitle: '2 + 0 + 700 + 3000 + 50000 = 53702',
    title: 'La Forma expandida de 758 es según su valor posicional:'
  },
  {
    type: 'choose_an_option',
    _id: '63737467fd325626f8d33805',
    options: "'{\"options\":[{\"value\":true,\"text\":\"7895\"},{\"value\":false,\"text\":\"5623\"}],\"columns\":[{\"title\":\"Forma estándar\",\"data\":[\"7895\",\"5623\"]},{\"title\":\"Forma expandida\",\"data\":[\"7 * 1000 + 8 * 100 + 9 * 10 + 5 * 1\",\"5 * 10000 + 6 * 100 + 2 * 10 + 3 * 1\"]}]}'",
    subtitle: null,
    title: 'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:'
  },
  {
    type: 'choose_an_option',
    _id: '6373746ffd325626f8d33806',
    options: "'{\"options\":[{\"option\":false,\"text\":\"789\"},{\"option\":false,\"text\":\"5623\"},{\"option\":true,\"text\":\"8562\"}],\"columns\":[{\"title\":\"Forma estándar\",\"data\":[\"789\",\"5623\",\"8562\"]},{\"title\":\"Forma expandida\",\"data\":[\"7 * 1000 + 8 * 100 + 9 * 10\",\"5 * 10000 + 6 * 100 + 2 * 10 + 3 * 1\",\"8 * 1000 + 5 * 100 + 6 * 10 + 2 * 1\"]}]}'",
    subtitle: null,
    title: 'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:'
  },
  {
    type: 'choose_an_option',
    _id: '63737476fd325626f8d33807',
    options: "'{\"options\":[{\"option\":true,\"text\":\"1547\"},{\"option\":false,\"text\":\"586\"},{\"option\":false,\"text\":\"3257\"}],\"columns\":[{\"title\":\"Forma expandida\",\"data\":[\"1000 + 500 + 40 + 7\",\"800 + 50 + 6\",\"300 + 2000 + 50 + 7\"]},{\"title\":\"Forma estándar\",\"data\":[\"1547\",\"586\",\"3257\"]}]}'",
    subtitle: null,
    title: 'Escoja la opción correcta de la siguiente suma de valores según la Forma expandida:'
  },
  {
    type: 'true_or_false',
    _id: '6373747dfd325626f8d33808',
    options: "'{\"correct\":false,\"columns\":[{\"title\":\"Forma expandida\",\"data\":[\"7000 + 500 + 20 + 1\",\"800 + 50 + 6\",\"3000 + 200 + 50 + 7\"]},{\"title\":\"Forma estándar\",\"data\":[\"7521\",\"586\",\"3257\"]}]}'",
    subtitle: null,
    title: 'Escoja la opción correcta verifique si la forma expandida y estándar están correctas:'
  },
  {
    type: 'true_or_false',
    _id: '637374a8fd325626f8d33809',
    options: "'{\"correct\":false}'",
    subtitle: '8 672 416 > 8 675 316',
    title: 'Verdadero o falso'
  },
  {
    type: 'true_or_false',
    _id: '637374bcfd325626f8d3380a',
    options: "'{\"correct\":false}'",
    subtitle: '2 756 418 < 2 746 518',
    title: 'Verdadero o falso'
  },
  {
    type: 'true_or_false',
    _id: '637374c3fd325626f8d3380b',
    options: "'{\"correct\":false}'",
    subtitle: 'La serie numérica solamente puede ser de 100 en 100',
    title: 'Verdadero o falso'
  },
  {
    type: 'choose_an_option',
    _id: '637374cbfd325626f8d3380c',
    options: "'{\"options\":[{\"value\":false,\"text\":\"546 677\"},{\"value\":true,\"text\":\"546 675\"},{\"value\":false,\"text\":\"546 674\"}]}'",
    subtitle: null,
    title: 'Es un número mayor que 546 674 y menor que 546 676'
  },
  {
    type: 'choose_an_option',
    _id: '637374d1fd325626f8d3380d',
    options: "'{\"options\":[{\"value\":true,\"text\":\"936 782\"},{\"value\":false,\"text\":\"936 787\"},{\"value\":false,\"text\":\"936 785\"}]}'",
    subtitle: null,
    title: 'Es un numero menor que 936 784 y mayor que 936 781'
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
    options: "'[{\"value\":\"<\",\"text1\":\"524 260\",\"text2\":\"854 125\"},{\"value\":\">\",\"text1\":\"658 014\",\"text2\":\"658 010\"},{\"value\":\">\",\"text1\":\"417 520\",\"text2\":\"417 250\"}]'",
    subtitle: null,
    title: 'Coloca los signos > ; < o = en cada caja'
  },
  {
    type: 'true_or_false',
    _id: '637374e7fd325626f8d33810',
    options: "'{\"correct\":true}'",
    subtitle: null,
    title: 'Para ordenar un número de 7 cifras, comparo las unidades de millón; si estas son iguales, comparo las centenas de mil y así sucesivamente'
  },
  {
    type: 'choose_an_option',
    _id: '637374edfd325626f8d33811',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Cuando va de menor a mayor\"},{\"value\":true,\"text\":\"Cuando va de mayor a menor\"}]}'",
    subtitle: null,
    title: 'Patrón decreciente'
  },
  {
    type: 'choose_an_option',
    _id: '637374f4fd325626f8d33812',
    options: "'{\"options\":[{\"value\":true,\"text\":\"Cuando va de menor a mayor\"},{\"value\":false,\"text\":\"Cuando va de mayor a menor\"}]}'",
    subtitle: null,
    title: 'Patrón creciente'
  }, {
    type: 'choose_an_option',
    _id: '637374fbfd325626f8d33813',
    options: "'{\"options\":[{\"value\":true,\"text\":\"Una lista de números que siguen un mismo patrón\"},{\"value\":false,\"text\":\"Es una repetición de números que tienen algún tipo de orden\"}]}'",
    subtitle: null,
    title: 'Un patrón numérico es:'
  },
  {
    type: 'choose_an_option',
    _id: '63737502fd325626f8d33814',
    options: "'{\"options\":[{\"value\":true,\"text\":\"Regla de formación\"},{\"value\":false,\"text\":\"Regla de aumento\"}]}'",
    subtitle: null,
    title: 'El patrón numérico también se conoce cómo:'
  },
  {
    type: 'true_or_false',
    _id: '63737509fd325626f8d33815',
    options: "'{\"correct\":true}'",
    subtitle: null,
    title: 'En una secuencia con patrón podemos encontrar operaciones como suma, resta, multiplicación y división.'
  },
  {
    type: 'choose_an_option',
    _id: '6373750ffd325626f8d33816',
    options: "'{\"options\":[{\"value\":true,\"text\":\"Una lista de números que siguen un mismo patrón.\"},{\"value\":false,\"text\":\"Es una repetición de números que tienen algún tipo de orden.\"}]}'",
    subtitle: null,
    title: 'Una secuencia numérica es:'
  },
  {
    type: 'choose_an_option',
    _id: '63737516fd325626f8d33817',
    options: "'{\"options\":[{\"value\":false,\"text\":\"Cacao - 24 752 230\"},{\"value\":false,\"text\":\"Banano - 41 252 320\"},{\"value\":true,\"text\":\"Café - 62 262 457\"}]}'",
    subtitle: null,
    title: 'Cúal es el producto con más producción'
  } */
] as {
  _id: string
  options: string
  title: string
  type: typeQuestion
  subtitle: string | null
}[]
