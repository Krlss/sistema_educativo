import { useState, useEffect } from 'react'
import { trueOrFalse_ } from '../types/game'

const useTrueOrFalse = (options_: trueOrFalse_) => {
  const [answer, setAnswer] = useState<string>()

  useEffect(() => {
    const { correct } = options_
    console.log('respuesta del usuario ', String(correct) === answer)
  }, [answer])

  return { answer, setAnswer }
}

export default useTrueOrFalse
