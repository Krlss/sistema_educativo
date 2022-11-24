import React, { useState, useEffect } from 'react'
import { writePointsCoordinatePlane_ } from '../types/game'
import { getQuadrant } from '../utils/CartesianCoordinate'
import { AddKeyToObj } from '../utils'

const useWriteCoorCP = (array: writePointsCoordinatePlane_[]) => {
  const [options] = useState<writePointsCoordinatePlane_[]>(AddKeyToObj(array))
  const type = getQuadrant(options)
  const [response, setResponse] = useState<writePointsCoordinatePlane_[]>(
    Array(array.length).fill({
      x: undefined,
      y: undefined,
      key: undefined
    })
  )

  useEffect(() => {
    const verify = response.some(
      item => item.x === undefined || item.y === undefined
    )
    if (!verify) {
      const correct = options.reduce(
        (acc, point, index) => {
          const isCorrect =
            response.find(item => item.key === point.key)?.x === point.x &&
            response.find(item => item.key === point.key)?.y === point.y

          if (isCorrect) {
            acc.correct++
          }
          return {
            ...acc,
            note: Number((acc.correct / array.length).toFixed(2))
          }
        },
        {
          note: 0,
          correct: 0
        }
      )
      console.log(correct)
    }
  }, [response])

  return {
    response,
    setResponse,
    options,
    type
  } as {
    response: writePointsCoordinatePlane_[]
    setResponse: React.Dispatch<
      React.SetStateAction<writePointsCoordinatePlane_[]>
    >
    options: writePointsCoordinatePlane_[]
    type: 'I' | 'II' | 'III' | 'IV' | '0'
  }
}

export default useWriteCoorCP
