const writtenNumber = require('written-number')
export const NumberToText = ({ array }: { array: { text: string }[] }) => {
  const text = array.map(item => {
    const number = parseInt(item.text)
    if (isNaN(number)) {
      return { text: item.text }
    }
    const newData = {
      text: writtenNumber(number, { lang: 'es' }),
      value: number
    }
    return newData
  })
  return text as { text: string; value?: number; response?: string }[]
}
