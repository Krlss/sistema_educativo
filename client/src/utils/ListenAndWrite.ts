const writtenNumber = require('written-number')
export const NumberToText = ({ array }: { array: { text: string }[] }) => {
  const text = array.map(item => {
    const number = parseInt(item.text)
    if (isNaN(number)) {
      return { text: item.text, isCorrect: false, response: undefined }
    }
    const newData = {
      text: writtenNumber(number, { lang: 'es' }),
      value: number,
      isCorrect: false,
      response: undefined
    }
    return newData
  })
  return text as {
    text: string
    value?: number
    response?: string
    isCorrect: boolean
  }[]
}
