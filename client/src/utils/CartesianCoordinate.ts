import { smallPadding, smallSize } from '../constants/CartesianConstants'
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
    case 'II':
      return isX ? i : -i
    case 'III':
      return isX ? i - length : -i
    case 'IV':
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
    case 'II':
      return isX && i === 0 ? 1 : isY && i === 0 ? 1 : 0
    case 'III':
      return isX && i === length ? 1 : isY && i === 0 ? 1 : 0
    case 'IV':
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
    case 'II':
      if (pos === 'X1') return isX ? 0 : -5
      if (pos === 'X2') return isX ? 0 : 5
      if (pos === 'Y1') return isY ? 0 : -5
      return isY ? 0 : 5
    case 'III':
      if (pos === 'X1') return isX ? 0 : smallSize - smallPadding * 2 + 5
      if (pos === 'X2') return isX ? 0 : smallSize - smallPadding * 2 - 5
      if (pos === 'Y1') return isY ? 0 : 5
      return isY ? 0 : -5
    case 'IV':
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
    case 'II':
      return {
        x: isX ? 0 : -17,
        y: isY ? 2 : -15
      }
    case 'III':
      return {
        x: isX ? -1 : smallSize - smallPadding * 2 + 15,
        y: isY ? 0 : -15
      }
    case 'IV':
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
    case 'II':
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
    case 'IV':
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
    case 'II':
      return { valueX: x, valueY: -y }
    case 'III':
      return { valueX: x - length, valueY: -y }
    case 'IV':
      return { valueX: x - length, valueY: length - y }
  }
}

export const changePoints = ({
  response,
  points
}: {
  response: boolean
  points: { x: number; y: number; value: boolean }[]
}) => {
  const newPoints = points.map(point => {
    if (point.value !== response) {
      const newPoint = {
        x: Math.floor(Math.random() * 20) - 10,
        y: Math.floor(Math.random() * 20) - 10,
        value: point.value,
        selected: false
      }
      const exist = points.find(
        point => point.x === newPoint.x && point.y === newPoint.y
      )
      if (exist) {
        return changePoints({ response, points })
      }
      return newPoint
    }
    return point
  }) as { x: number; y: number; value: boolean; selected: boolean }[]
  return newPoints
}
