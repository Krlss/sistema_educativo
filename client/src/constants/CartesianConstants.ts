export const smallSize = 350
export const smallPadding = 40

export const dataPointsToF = {
  subtitle: '2. ¿La siguiente coordenada en el plano es la correcta: A(4, -3)?',
  points: [{ x: 4, y: -3 }],
  value: true
}

export const namePoints = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

export const objectCartesianPoints = [
  {
    x: 2,
    y: 3,
    url: 'https://cdn-icons-png.flaticon.com/512/1960/1960021.png',
    name: 'León'
  },
  {
    x: 1,
    y: 3,
    url: 'https://cdn-icons-png.flaticon.com/512/547/547612.png',
    name: 'Familia'
  },
  {
    x: 1,
    y: 5,
    url: 'https://cdn-icons-png.flaticon.com/512/1046/1046283.png',
    name: 'Calculadora'
  },
  {
    x: 3,
    y: 1,
    url: 'https://cdn-icons-png.flaticon.com/512/864/864970.png',
    name: 'Escribir'
  },
  {
    x: 3,
    y: 4,
    url: 'https://cdn-icons-png.flaticon.com/512/2997/2997985.png',
    name: 'Reloj'
  },
  {
    x: 5,
    y: 3,
    url: 'https://cdn-icons-png.flaticon.com/512/6521/6521546.png',
    name: 'Mickey'
  }
]

export const selectPointsCoordinatePlane = {
  title:
    '13. Observo la tabla y el sistema de coordenadas. Luego, señalo dando clic qué pares ordenados no corresponden a los puntos del plano.',
  response: true,
  points: [
    { x: 1, y: 1, value: false },
    { x: -8, y: 2, value: true },
    { x: 1, y: 3, value: false },
    { x: 3, y: 9, value: true },
    { x: 5, y: -5, value: true },
    { x: 2, y: 1, value: true }
  ]
}

export const dataCartesianPlaneImagesTrueOrFalse = {
  title:
    'Leo la información y analizo en la tabla el par ordenado que le corresponde a cada estudiante. Luego, verifico si los materiales que los estudiantes reciclaron están ubicados correctamente en el sistema de coordenadas.',
  subtitle:
    'Con el fin de reducir la contaminación ambiental, 4 estudiantes de quinto año reciclaron diferentes deshechos.',
  response: false,
  points: [
    {
      x: 3,
      y: 2,
      url: 'https://cdn-icons-png.flaticon.com/512/3307/3307015.png',
      name: 'Bolsa',
      value: true,
      resposable: 'Carlos'
    },
    {
      x: 7,
      y: 3,
      url: 'https://cdn-icons-png.flaticon.com/512/685/685388.png',
      name: 'Caja',
      value: true,
      resposable: 'Viviana'
    },
    {
      x: 6,
      y: 1,
      url: 'https://cdn-icons-png.flaticon.com/512/1236/1236977.png',
      name: 'Latas',
      value: true,
      resposable: 'Jorge'
    },
    {
      x: 1,
      y: 3,
      url: 'https://cdn-icons-png.flaticon.com/512/1996/1996969.png',
      name: 'Botellas',
      value: true,
      resposable: 'Priscila'
    }
  ]
}
