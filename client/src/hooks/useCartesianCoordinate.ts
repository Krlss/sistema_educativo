import { useState } from 'react'

interface CartesianCoordinate {
  x: number
  y: number
}
const useCartesianCoordinate = (numbersCoordinate: number) => {
  const [cartesian, setCartesian] = useState<CartesianCoordinate[]>([])

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
