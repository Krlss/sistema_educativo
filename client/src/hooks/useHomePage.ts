import { useContext, useEffect, useState } from 'react'
import GeneralContext from '../contexts/context'

const useHomePage = () => {
  const { user, config } = useContext(GeneralContext)
  const [percentage, setPeercentage] = useState<number[]>([])

  useEffect(() => {
    const percentage = user?.progress?.map(p => {
      const asignatureFind = config?.asignatures?.find(
        asignature => asignature.id === p.id_asignature
      )

      const unitsTotal = asignatureFind?.PCA?.reduce((acc, pca) => {
        acc += pca.PCAU.length
        return acc
      }, 0) as number

      const topicsTotal = asignatureFind?.PCA?.reduce((acc, pca) => {
        acc += pca.PCAU.reduce((acc, u) => {
          acc += u.PCAUT.length
          return acc
        }, 0)
        return acc
      }, 0) as number

      const finished = p.unit?.reduce((acc, u) => {
        if (u.finished) acc++
        acc += u.topic?.reduce((acc, t) => {
          if (t.finished) acc++
          return acc
        }, 0)
        return acc
      }, 0) as number
      const percentage = Math.round(
        (finished / (unitsTotal + topicsTotal)) * 100
      )

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
