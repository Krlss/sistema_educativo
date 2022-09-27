import shortid from 'shortid'

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
