import { useEffect, useState, useRef } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GETPERIODS } from '../../service/periods/graphql-queries'
import { useMutation } from '@apollo/client'
import { CHANGE_TEST_ACTIVE } from '../../service/units/graphql-mutations'
export interface PERIODS_ {
  id: string
  name: string
  PC: PERIODSCOURSES[]
}

interface PERIODSCOURSES {
  id: number
  periodId: string
  courseId: string
  period: PERIOD
  course: COURSE
  PCA: PERIODSCOURSESASIGNATURES[]
}

interface PERIODSCOURSESASIGNATURES {
  id: number
  asignature: ASIGNATURE
  PCAU: PERIODCOURSEASIGNATUREUNIT[]
}

interface PERIODCOURSEASIGNATUREUNIT {
  id: number
  testActive: boolean
  unit: UNIT
}

interface ASIGNATURE {
  id: string
  name: string
}

interface UNIT {
  id: string
  name: string
}

interface PERIOD {
  name: string
  id: string
}

interface COURSE {
  name: string
  id: string
}

const usePruebas = () => {
  const [getPeriods, { data, error, loading }] = useLazyQuery<{
    periods: PERIODS_[]
  }>(GETPERIODS)

  const [periods, setPeriods] = useState<{ value: string; label: string }[]>([])

  const [courses, setCourses] = useState<
    { value: number; label: string }[] | undefined
  >([])

  const [asignatures, setAsignatures] = useState<
    { value: number; label: string }[] | undefined
  >([])

  const [units, setUnits] = useState<PERIODCOURSEASIGNATUREUNIT[] | undefined>(
    []
  )

  const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>()
  const [selectedCourse, setSelectedCourse] = useState<number | undefined>()

  const [testUnitActive] = useMutation(CHANGE_TEST_ACTIVE, {
    refetchQueries: [{ query: GETPERIODS }]
  })

  const changeTestUnitActive = (id: number, testActive: boolean) => {
    testUnitActive({
      variables: {
        input: {
          id,
          testActive
        }
      },
      onCompleted() {
        console.log('Test active change!')
      },
      onError(error) {
        console.log('Error changing test active', error)
      }
    })
  }

  useEffect(() => {
    getPeriods({
      onCompleted(data) {
        setPeriods(
          data?.periods.map(period => {
            return {
              value: period.id,
              label: period.name
            }
          })
        )
      }
    })
  }, [loading])

  return {
    data,
    error,
    loading,
    periods,
    courses,
    setCourses,
    asignatures,
    setAsignatures,
    selectedPeriod,
    setSelectedPeriod,
    selectedCourse,
    setSelectedCourse,
    units,
    setUnits,
    changeTestUnitActive
  }
}

export default usePruebas
