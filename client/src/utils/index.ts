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
