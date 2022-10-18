import {
  getNumbers,
  getPosLine,
  getPosSmallLine,
  getPosText,
  getPosTextLine
} from '../../utils/CartesianCoordinate'

import { smallPadding, smallSize } from '../../constants/CartesianConstants'

type typeCartesian = 'I' | 'II' | 'III' | 'IV'

const CartesianQuadrant = ({ type }: { type: typeCartesian }) => {
  const { xx, xy, yx, yy } = getPosTextLine(type, smallSize, smallPadding) as {
    xx: number
    xy: number
    yx: number
    yy: number
  }

  return (
    <div className="absolute -z-50">
      <svg
        width={smallSize + smallPadding}
        height={smallSize + smallPadding}
        viewBox={`0 0 ${smallSize + smallPadding} ${smallSize + smallPadding}`}>
        <g transform={`translate(${smallPadding + 20}, ${smallPadding + 20})`}>
          <DrawCartesianPlane isX type={type} />
          <DrawCartesianPlane isY type={type} />
        </g>
        <text x={xx} y={xy} textAnchor="start" dominantBaseline="middle">
          {type === 'I' || type === 'II' ? 'x' : '-x'}
        </text>
        <text x={yx} y={yy} textAnchor="middle" dominantBaseline="middle">
          {type === 'I' || type === 'IV' ? 'y' : '-y'}
        </text>
      </svg>
    </div>
  )
}

export default CartesianQuadrant

interface DrawCarsianPlane {
  isX?: boolean
  isY?: boolean
  type: typeCartesian
}

const DrawCartesianPlane = ({ isX, isY, type }: DrawCarsianPlane) => {
  return (
    <>
      {[...Array(11)].map((_, i) => {
        const transform = ((smallSize - smallPadding * 2) / 10) * i
        const number = getNumbers({ isX, i, type, length: 10 })
        const lineX = getPosLine({ isX, isY, i, type, length: 10 })
        const lineY = getPosLine({ isX, isY, i, type, length: 10 })
        const { x, y } = getPosText({
          isX,
          isY,
          type,
          smallPadding,
          smallSize
        }) as {
          x: number
          y: number
        }
        return (
          <g
            key={i}
            transform={`translate(${isX ? transform : 0}, ${
              isY ? transform : 0
            })`}>
            <line
              x1={0}
              y1={isY ? 0 : smallSize - smallPadding * 2}
              x2={isX ? 0 : smallSize - smallPadding * 2}
              y2={0}
              stroke={lineX || lineY ? 'black' : 'gray'}
              strokeWidth="1"
              strokeDasharray={lineX || lineY ? '0' : '2'}
            />
            <line
              x1={getPosSmallLine({
                isX,
                isY,
                type,
                pos: 'X1',
                smallPadding,
                smallSize
              })}
              y1={getPosSmallLine({
                isX,
                isY,
                type,
                pos: 'Y1',
                smallPadding,
                smallSize
              })}
              x2={getPosSmallLine({
                isX,
                isY,
                type,
                pos: 'X2',
                smallPadding,
                smallSize
              })}
              y2={getPosSmallLine({
                isX,
                isY,
                type,
                pos: 'Y2',
                smallPadding,
                smallSize
              })}
              stroke="black"
              strokeWidth="1"
            />

            {number && (
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={12}>
                {number}
              </text>
            )}
          </g>
        )
      })}
    </>
  )
}
