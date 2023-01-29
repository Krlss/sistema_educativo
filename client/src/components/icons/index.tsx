import React from 'react'

interface IconProps {
  width?: number | string
  height?: number | string
  fill?: string
  children?: React.ReactNode
  viewBox: string
  className?: string
  [key: string]: any
}

const Icon = ({
  children,
  fill = 'currentColor',
  height = 15,
  width = 15,
  viewBox,
  className,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      fill={fill}
      height={height}
      viewBox={`0 0 ${viewBox}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      {children}
    </svg>
  )
}

export default Icon
