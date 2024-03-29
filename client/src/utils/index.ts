import shortid from 'shortid'
import { getRamdonArrayColors } from '../constants/colors'
import { dragAndDropSets_ } from '../types/game'
/**
    Cambia el orden de los elementos de un array
    @param {Array} current - Array a ordenar

    @returns {Array} - Array ordenado
*/
export const shuffleArray = (current: any[]) => {
  const array = current.slice()
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

/**
  De un texto, devuelve un array de items,
  se utiliza para obtener array de números de un dígito
  @param {String} text - Texto a convertir

  @returns {Array} - Array de numeros
*/
export const CreateArrayFromText = (text: string) => {
  return text.split('').map(n => parseInt(n))
}

/**
 De un array de números, le agrega un id a cada elemento
  @param {Array} array - Array de números

  @returns {Array} - Array de objetos
 */
export const AddKeyToArrayItems = (items: any[]) => {
  return items.map(item => {
    return { value: item, key: shortid.generate() }
  })
}

/**
   De dos valores, devuelve el mayor, independientemente del signo
    @param {Number} a - Primer valor
    @param {Number} b - Segundo valor

    @returns {Number} - Mayor valor
 */
export const absMax = (a: number, b: number) => {
  return Math.max(Math.abs(a), Math.abs(b))
}

/**
  De un array de objetos, se le agrega una key única a cada elemento
  @param {Array} array - Array de objetos

  @returns {Array} - Array de objetos
*/
export const AddKeyToObj = (items: any[]) => {
  return items.map(item => {
    return { ...item, key: shortid.generate() }
  })
}

export const convertNumberToBase10 = (number: number) => {
  const numberString = number.toString()
  const numberArray = numberString.split('')
  const numberArrayLength = numberArray.length
  const result = []
  for (let i = 0; i < numberArrayLength; i++) {
    const n = parseInt(numberArray[i])
    if (n !== 0) {
      const data = {
        value: n * Math.pow(10, numberArrayLength - i - 1),
        response: ''
      }
      result.push(data)
    }
  }
  return result as {
    value: number
    response?: string
    isCorrect?: boolean
  }[]
}

export const sortData = (array: number[]) => {
  return array.sort((a, b) => b - a)
}

export const stripquotes = (str: string) => {
  const firstChar = str.charAt(0)
  const lastChar = str[str.length - 1]
  // double quotes
  if (firstChar && lastChar === String.fromCharCode(34)) {
    str = str.slice(1, -1)
  }
  // single quotes
  if (firstChar && lastChar === String.fromCharCode(39)) {
    str = str.slice(1, -1)
  }
  return JSON.parse(str)
}

export const getFlatArraySets = ({ sets }: dragAndDropSets_) => {
  const options = sets.map(e => e.options).flat()
  const colors = getRamdonArrayColors(options.length)

  return options.map((e, i) => {
    return { ...e, color: colors[i] }
  })
}

export const secondsToTime = (secs: number) => {
  secs = Math.round(secs)
  const hours = Math.floor(secs / (60 * 60))

  const divisorForMinutes = secs % (60 * 60)
  const minutes = Math.floor(divisorForMinutes / 60)

  const divisorForSeconds = divisorForMinutes % 60
  const seconds = Math.ceil(divisorForSeconds)

  const obj = {
    h: hours,
    m: minutes,
    s: seconds
  }
  return obj
}

export const diffMinutes = (inititalDate: Date) => {
  const finalTimeStamp = new Date(inititalDate)
  finalTimeStamp.setMinutes(finalTimeStamp.getMinutes() + 59)
  return new Date() < finalTimeStamp
}

export const createArrayComplete = (text: string) => {
  const array = text.split(' ')
  const newArray: {
    text: string
    index?: number
  }[] = []

  let text_: string = ''
  let cont = 0
  for (let i = 0; i < array.length; i++) {
    if (!array[i].includes('__')) {
      text_ = text_ + ' ' + array[i]
      if (i === array.length - 1) {
        newArray.push({
          text: text_.trim()
        })
      }
    } else if (array[i].includes('__')) {
      if (text_) {
        newArray.push({
          text: text_.trim()
        })
      }
      text_ = ''
      newArray.push({
        text: array[i],
        index: cont++
      })
    }
  }
  return newArray
}
