import { useState, useEffect } from 'react'
import { trueOrFalse_ } from '../types/game'

const useTrueOrFalse = (options_: trueOrFalse_) => {
  const [answer, setAnswer] = useState<string>()
  const [correct, setCorrect] = useState<number>()

  useEffect(() => {
    const { correct } = options_
    if (answer) {
      setCorrect(String(correct) === answer ? 1 : 0)
    }
  }, [answer])
  console.log(correct)

  return { answer, setAnswer }
}

export default useTrueOrFalse
