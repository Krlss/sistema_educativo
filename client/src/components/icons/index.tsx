import React from 'react'

interface IconProps {
  width?: number | string
  height?: number | string
  fill?: string
  children?: React.ReactNode
  viewBox: string
  className?: string
}

const Icon = ({
  children,
  fill = 'black',
  height = 15,
  width = 15,
  viewBox,
  className
}: IconProps) => {
  return (
    <svg
      width={width}
      fill={fill}
      height={height}
      viewBox={`0 0 ${viewBox}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      {children}
    </svg>
  )
}

export default Icon
