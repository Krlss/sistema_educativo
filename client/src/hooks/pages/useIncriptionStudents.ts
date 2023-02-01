import { useState, useEffect } from 'react'
import { PERIOD, useGetPeriods } from '../../service/periods/custom-hook'

interface PERIODSELECT {
  value: number
  label: string
}

export const useInscriptionStudent = () => {
  const { dataPeriods, loadingPeriods } = useGetPeriods()
  const [periods, setPeriods] = useState<PERIODSELECT[]>([])
  const [selectedPeriod, setSelectedPeriod] = useState<PERIODSELECT | null>()

  useEffect(() => {
    if (dataPeriods) {
      setPeriods(
        dataPeriods.getPeriods.map(e => {
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
