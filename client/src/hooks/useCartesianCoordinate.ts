import { useState, useEffect } from 'react'
import { cartesianCoordinateFull_ } from '../types/game'

interface CartesianCoordinate {
  x: number
  y: number
}
const useCartesianCoordinate = (
  numbersCoordinate: number,
  points: cartesianCoordinateFull_[]
) => {
  const [cartesian, setCartesian] = useState<CartesianCoordinate[]>([])

  useEffect(() => {
    if (cartesian.length === numbersCoordinate) {
      const sortedPoints = points.sort((a, b) => a.x - b.x)
      const sortedCartesian = cartesian.sort((a, b) => a.x - b.x)
      const verify = sortedPoints.every((point, index) => {
        return (
          point.x === sortedCartesian[index].x &&
          point.y === sortedCartesian[index].y
        )
      })
      console.log(verify)
    }
  }, [cartesian])

  const updateCartesian = (x: number, y: number) => {
    const newCartesian = [...cartesian]
    const index = newCartesian.findIndex(item => item.x === x && item.y === y)
    if (index !== -1) {
      newCartesian.splice(index, 1)
    } else {
      if (newCartesian.length === numbersCoordinate) newCartesian.pop()
      newCartesian.push({ x, y })
    }
    setCartesian(newCartesian)
  }

  return { cartesian, updateCartesian }
}

export default useCartesianCoordinate
