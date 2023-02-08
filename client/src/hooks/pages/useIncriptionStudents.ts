import { useState, useEffect } from 'react'
import { useGetPeriods } from '../../service/periods/custom-hook'

interface PERIODSELECT {
  value: string
  label: string
}

export const useInscriptionStudent = () => {
  const { data, loadingPeriods } = useGetPeriods()
  const [periods, setPeriods] = useState<PERIODSELECT[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState<PERIODSELECT | null>()

  useEffect(() => {
    if (data) {
      setPeriods(
        data.periods.map(e => {
          return {
            value: e.id,
            label: e.name
          }
        })
      )
    }
  }, [loadingPeriods])

  useEffect(() => {
    if (selectedPeriod) console.log({ selectedPeriod })
  }, [selectedPeriod])

  return { periods, setSelectedPeriod }
}
