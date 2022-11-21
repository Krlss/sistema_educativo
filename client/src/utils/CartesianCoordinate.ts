import { typeCartesian } from '../types/CartesianCoordinate'
export const getNumbers = ({
  isX,
  i,
  type,
  length
}: {
  isX?: boolean
  i: number
  type: typeCartesian
  length: number
}) => {
  switch (type) {
    case 'I':
      return isX ? i : length - i
    case 'IV':
      return isX ? i : -i
    case 'III':
      return isX ? i - length : -i
    case 'II':
      return isX ? i - length : length - i
  }
}

export const getPosLine = ({
  isX,
  isY,
  i,
  type,
  length = 10
}: {
  isX?: boolean
  isY?: boolean
  i: number
  type: typeCartesian
  length: number
}) => {
  switch (type) {
    case 'I':
      return isX && i === 0 ? 1 : isY && i === length ? 1 : 0
    case 'IV':
      return isX && i === 0 ? 1 : isY && i === 0 ? 1 : 0
    case 'III':
      return isX && i === length ? 1 : isY && i === 0 ? 1 : 0
    case 'II':
      return isX && i === length ? 1 : isY && i === length ? 1 : 0
  }
}

export const getPosSmallLine = ({
  isX,
  isY,
  type,
  pos,
  smallSize,
  smallPadding
}: {
  isX?: boolean
  isY?: boolean
  type: typeCartesian
  pos: 'X1' | 'X2' | 'Y1' | 'Y2'
  smallSize: number
  smallPadding: number
}) => {
  switch (type) {
    case 'I':
      if (pos === 'X1') return isX ? 0 : -5
      if (pos === 'X2') return isX ? 0 : 5
      if (pos === 'Y1') return isY ? 0 : smallSize - smallPadding * 2 + 5
      return isY ? 0 : smallSize - smallPadding * 2 - 5
    case 'IV':
      if (pos === 'X1') return isX ? 0 : -5
      if (pos === 'X2') return isX ? 0 : 5
      if (pos === 'Y1') return isY ? 0 : -5
      return isY ? 0 : 5
    case 'III':
      if (pos === 'X1') return isX ? 0 : smallSize - smallPadding * 2 + 5
      if (pos === 'X2') return isX ? 0 : smallSize - smallPadding * 2 - 5
      if (pos === 'Y1') return isY ? 0 : 5
      return isY ? 0 : -5
    case 'II':
      if (pos === 'X1') return isX ? 0 : smallSize - smallPadding * 2 + 5
      if (pos === 'X2') return isX ? 0 : smallSize - smallPadding * 2 - 5
      if (pos === 'Y1') return isY ? 0 : smallSize - smallPadding * 2 + 5
      return isY ? 0 : smallSize - smallPadding * 2 - 5
  }
}

export const getPosText = ({
  isX,
  isY,
  type,
  smallSize,
  smallPadding
}: {
  isX?: boolean
  isY?: boolean
  type: typeCartesian
  smallSize: number
  smallPadding: number
}) => {
  switch (type) {
    case 'I':
      return {
        x: isX ? 0 : -15,
        y: isY ? 2 : smallSize - smallPadding * 2 + 15
      }
    case 'IV':
      return {
        x: isX ? 0 : -17,
        y: isY ? 2 : -15
      }
    case 'III':
      return {
        x: isX ? -1 : smallSize - smallPadding * 2 + 15,
        y: isY ? 0 : -15
      }
    case 'II':
      return {
        x: isX ? -1 : smallSize - smallPadding * 2 + 15,
        y: isY ? 0 : smallSize - smallPadding * 2 + 15
      }
  }
}

export const getPosTextLine = (
  type: typeCartesian,
  smallSize: number,
  smallPadding: number
) => {
  switch (type) {
    case 'I':
      return {
        xx: smallSize - smallPadding * 2 + 70,
        xy: smallSize - smallPadding * 2 + 60,
        yx: 60,
        yy: 40
      }
    case 'IV':
      return {
        xx: smallSize - smallPadding * 2 + 70,
        xy: 60,
        yx: 57,
        yy: smallSize - smallPadding * 2 + 75
      }
    case 'III':
      return {
        xx: smallPadding - 10,
        xy: 60,
        yx: smallSize - smallPadding * 2 + 57,
        yy: smallSize - smallPadding * 2 + 75
      }
    case 'II':
      return {
        xx: 30,
        xy: smallSize - smallPadding * 2 + 60,
        yx: smallSize - smallPadding * 2 + 60,
        yy: 40
      }
  }
}

export const getCoorValues = ({
  type,
  x,
  y,
  length
}: {
  type: typeCartesian
  x: number
  y: number
  length: number
}) => {
  switch (type) {
    case 'I':
      return { valueX: x, valueY: length - y }
    case 'IV':
      return { valueX: x, valueY: -y }
    case 'III':
      return { valueX: x - length, valueY: -y }
    case 'II':
      return { valueX: x - length, valueY: length - y }
    default:
      return { valueX: x, valueY: y }
  }
}

interface ReturnChangePoint {
  x: number
  y: number
  value: boolean
  selected: boolean
  url?: string
}

export const changePoints = ({
  correct,
  points,
  type,
  length = 5
}: {
  correct: boolean
  points: { x: number; y: number; value: boolean; url?: string }[]
  type?: typeCartesian
  length?: number
}) => {
  const newPoints: ReturnChangePoint[] = []

  points.forEach(point => {
    const { value, x, y, url } = point

    if (!value) {
      let newX = x
      let newY = y
      let selected = true

      while (selected) {
        const randomX = Math.floor(Math.random() * length)
        const randomY = Math.floor(Math.random() * length)

        if (type && length) {
          const { valueX, valueY } = getCoorValues({
            type,
            x: randomX,
            y: randomY,
            length
          })
          newX = valueX
          newY = valueY
        } else {
          newX = randomX
          newY = randomY
        }
        const exist = newPoints.find(
          point => point.x === newX && point.y === newY
        )

        if (!exist) {
          selected = false
        }
      }
      newPoints.push({
        x: newX,
        y: newY,
        value: correct,
        selected: false,
        url
      })
    } else {
      newPoints.push({ x, y, value, selected: false, url })
    }
  })

  return newPoints
}

export const getQuadrant = (
  Array: { x: number; y: number; [key: string]: any }[]
) => {
  const quadrant = Array.reduce(
    (acc, curr) => {
      const { x, y } = curr
      if (x >= 0 && y > 0) {
        acc[0]++
      } else if (x <= 0 && y > 0) {
        acc[1]++
      } else if (x <= 0 && y < 0) {
        acc[2]++
      } else if (x >= 0 && y < 0) {
        acc[3]++
      }
      return acc
    },
    [0, 0, 0, 0]
  )
  let cont = 0
  quadrant.forEach(e => {
    if (e > 0) {
      cont++
    }
  })
  if (cont >= 2) {
    return '0'
  } else {
    const type =
      quadrant.findIndex(
        e => e === Math.max(quadrant[0], quadrant[1], quadrant[2], quadrant[3])
      ) + 1
    if (type === 1) return 'I'
    if (type === 2) return 'II'
    if (type === 3) return 'III'
    if (type === 4) return 'IV'
    return '0'
  }
}
