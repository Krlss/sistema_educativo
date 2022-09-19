const size = 400
const padding = 40

const CartesianPlane = ({ x, y }: { x?: number; y?: number }) => {
  return (
    <div className="absolute -z-50">
      <svg
        width={size + padding}
        height={size + padding}
        viewBox={`0 0 ${size + padding} ${size + padding}`}>
        <g transform={`translate(${padding + 20}, ${padding + 20})`}>
          <DrawCartesianPlane isX x={x} />
          <DrawCartesianPlane isY y={y} />
        </g>
        <text
          x={size + padding - 45}
          y={size / 2 + padding - 20}
          textAnchor="start"
          dominantBaseline="middle">
          x
        </text>
        <text
          x={padding - 10}
          y={size / 2 + padding - 20}
          textAnchor="start"
          dominantBaseline="middle">
          -x
        </text>
        <text
          x={size / 2 + padding - 18}
          y={padding}
          textAnchor="middle"
          dominantBaseline="middle">
          y
        </text>
        <text
          x={size / 2 + padding - 22}
          y={size + padding - 40}
          textAnchor="middle"
          dominantBaseline="middle">
          -y
        </text>
      </svg>
    </div>
  )
}

export default CartesianPlane

interface DrawCarsianPlane {
  isX?: boolean
  isY?: boolean
  x?: number
  y?: number
}

const DrawCartesianPlane = ({ isX, isY, x, y }: DrawCarsianPlane) => {
  return (
    <>
      {[...Array(21)].map((_, i) => {
        const transform = ((size - padding * 2) / 20) * i
        const number = isX ? i - 10 : 10 - i
        return (
          <g
            key={i}
            transform={`translate(${isX ? transform : 0}, ${
              isY ? transform : 0
            })`}>
            <line
              x1={0}
              y1={isY ? 0 : size - padding * 2}
              x2={isX ? 0 : size - padding * 2}
              y2={0}
              stroke={i === 10 ? 'black' : 'lightgray'}
              strokeWidth="1"
              strokeDasharray={i === 10 ? '0' : '2'}
            />
            <line
              x1={isX ? 0 : size / 2 - padding - 5}
              y1={isY ? 0 : size / 2 - padding - 5}
              x2={isX ? 0 : size / 2 - padding + 5}
              y2={isY ? 0 : size / 2 - padding + 5}
              stroke="black"
              strokeWidth="1"
            />
            <text
              x={isX ? -1 : size / 2 - padding + 16}
              y={isY ? 4 : size / 2 - padding + 15}
              textAnchor={`${isX ? 'middle' : 'end'}`}
              fontSize="11"
              fill="black">
              {number !== 0 && number % 2 === 0 && number}
            </text>
          </g>
        )
      })}
    </>
  )
}
