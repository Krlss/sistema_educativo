/* Traza el punto (4,10) en el plano de coordenadas. */

import { useState } from 'react'

const width = 400
const height = 400
const padding = 20

const CartesianCoordinate = () => {
  const [coordinate, setCoordinate] = useState({ x: 4, y: 10 })

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen-calculator flex-col">
        <svg
          width={width}
          height={height}
          onClick={e => {
            const x = e.clientX - padding
            const y = e.clientY - padding
            console.log(x, y)
          }}>
          {Array.from(Array(9).keys()).map((x, index) => {
            return (
              <line
                key={index}
                x1={padding + x * 40}
                y1={padding}
                x2={padding + x * 40}
                y2={height - padding}
                stroke="lightgray"
              />
            )
          })}
          {Array.from(Array(9).keys()).map((y, index) => {
            return (
              <line
                key={index}
                x1={padding}
                y1={padding + y * 40}
                x2={width - padding}
                y2={padding + y * 40}
                stroke="lightgray"
              />
            )
          })}
          <line
            x1={padding}
            y1={height / 2}
            x2={width - padding}
            y2={height / 2}
            stroke="black"
          />
          <line
            x1={width / 2}
            y1={padding}
            x2={width / 2}
            y2={height - padding}
            stroke="black"
          />
          {coordinate.x !== 0 && coordinate.y !== 0 && (
            <circle
              cx={width / 2 + coordinate.x * 40}
              cy={height / 2 - coordinate.y * 40}
              r="4"
              fill="blue"
            />
          )}
          {Array.from(Array(9).keys()).map((x, index) => {
            return (
              <text
                key={index}
                x={padding + x * 40}
                y={height / 2 + 20}
                fontSize="12"
                textAnchor="end">
                {x === 4 ? '' : x - 4}
              </text>
            )
          })}
          {Array.from(Array(9).keys()).map((y, index) => {
            return (
              <text
                key={index}
                x={width / 2 + 20}
                y={padding + y * 40}
                fontSize="12"
                textAnchor="end">
                {y === 4 ? '' : y - 4}
              </text>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default CartesianCoordinate
