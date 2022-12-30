import { typeQuestion } from '../types/game'
// prettier-ignore
export const data = [
  {
  // ver
 _id: '6397c25dc09cce2ff451ebff',
options: "'{\"base\":[10,100,1000],\"digits\":[24,13,5]}'",
title: 'Complete  la siguientes operaciones, tomando en cuenta los factores 10, 100 y 1 000.',
type: 'table_multiplication',
subtitle: ''
}
] as {
  _id: string
  options: string
  title: string
  type: typeQuestion
  subtitle: string | null
}[]
