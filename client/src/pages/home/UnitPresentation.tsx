import { useEffect, useContext, useState } from 'react'
import GeneralContext from '../../contexts/context'
import { useParams } from 'react-router-dom'

interface TOPIC {
  _id: number
  name: string
  description?: string
}

interface UNIT {
  _id: number
  name: string
  topic: TOPIC[]
}

interface ASIGNATURES {
  _id: string
  name: string
  description: string
  unit?: UNIT
}

const UnitPresentation = () => {
  const { config } = useContext(GeneralContext)
  const [asignature, setAsignature] = useState<ASIGNATURES>()
  const { curso, unidad } = useParams() as { curso: string; unidad: string }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [curso, unidad])

  console.log(asignature)
  return (
    <div>
      {curso}
      <h1>Unit Presentation</h1>
      {unidad}
    </div>
  )
}

export default UnitPresentation
