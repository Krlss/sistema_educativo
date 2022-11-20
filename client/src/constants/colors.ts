export const pastelColors = [
  '#FF0000',
  '#FFA500',
  '#FFFF00',
  '#FFC0CB',
  '#ADD8E6',
  '#87CEFA',
  '#00BFFF',
  '#FFDAB9',
  '#7FFFD4',
  '#7FFF00',
  '#FF00FF',
  '#fdffae',
  '#b54573',
  '#FF7F50',
  '#FFF8DC',
  '#DC143C',
  '#00FF7F',
  '#FF69B4',
  '#FFD700',
  '#F5DEB3',
  '#FF7F50',
  '#f6c542',
  '#e74f2b',
  '#ff6289'
]

export const getRamdonArrayColors = (length: number) => {
  const colors: string[] = []
  for (let i = 0; i < length; i++) {
    do {
      const color =
        pastelColors[Math.floor(Math.random() * pastelColors.length)]
      if (!colors.includes(color)) {
        colors.push(color)
        break
      }
    } while (true)

    // colors.push(pastelColors[Math.floor(Math.random() * pastelColors.length)])
  }
  return colors
}
