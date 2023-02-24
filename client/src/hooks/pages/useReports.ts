import { useEffect, useState, useRef } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GETPERIODS } from '../../service/periods/graphql-queries'
import { useMutation } from '@apollo/client'
import { CHANGE_TEST_ACTIVE } from '../../service/units/graphql-mutations'
import { GETGRADES } from '../../service/user/graphql-queries'
import { toast } from 'react-toastify'
import { Buffer } from 'buffer'
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
  const [course, SetCourse] = useState<Number | null>(null)
  const [asignature, SetAsignature] = useState<String | null>(null)

  const [courses, setCourses] = useState<
    { value: number; label: string }[] | undefined
  >([])

  const [asignatures, setAsignatures] = useState<
    { value: string; label: string }[] | undefined
  >([])

  const [units, setUnits] = useState<PERIODCOURSEASIGNATUREUNIT[] | undefined>(
    []
  )

  const [selectedPeriod, setSelectedPeriod] = useState<string | undefined>()
  const [selectedCourse, setSelectedCourse] = useState<number | undefined>()

  const [testUnitActive] = useMutation(CHANGE_TEST_ACTIVE, {
    refetchQueries: [{ query: GETPERIODS }]
  })

  const [getgrade] = useLazyQuery(GETGRADES)

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

  const handleGrades = () => {
    if (course && asignature) {
      getgrade({
        variables: {
          asignatureId: asignature,
          periodCourseId: course
        },
        onCompleted: res => {
          toast.success('Reporte generado con exito')
          console.log(res.getGradesByAsignature)
          const url = URL.createObjectURL(new Blob([res.getGradesByAsignature]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'reporte.xlsx')
          document.body.appendChild(link)
          link.click()
        },
        onError: e => {
          console.log(e)
          toast.error(e.message)
        }
      })
    }
  }

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
    changeTestUnitActive,
    SetAsignature,
    SetCourse,
    course,
    asignature,
    handleGrades
  }
}

export default usePruebas
