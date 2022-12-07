import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'

const useHomePage = () => {
  const { user, config } = useContext(GeneralContext)
  const [percentage, setPeercentage] = useState<number[]>([])

  useEffect(() => {
    const percentage = user?.progress?.map(p => {
      const asignatureFind = config?.asignatures?.find(
        asignature => asignature._id === p.id_asignature
      )

      const total = asignatureFind?.unit?.reduce(
        (acc, unit) => acc + unit.topic.length + asignatureFind.unit.length,
        0
      ) as number

      const finished = p.unit?.reduce((acc, u) => {
        if (u.finished) acc++
        acc += u.topic?.reduce((acc, t) => {
          if (t.finished) acc++
          return acc
        }, 0)
        return acc
      }, 0) as number
      const percentage = Math.round((finished / total) * 100)

      return isNaN(percentage) ? 0 : percentage
    }) as number[]
    setPeercentage(percentage)
  }, [user.progress, config.asignatures])

  return {
    percentage,
    user,
    config
  }
}

export default useHomePage
