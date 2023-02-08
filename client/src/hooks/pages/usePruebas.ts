import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GETPERIODS } from '../../service/periods/graphql-queries'

interface PERIODS_ {
  id: string
  name: string
  periodsCourses: PERIODSCOURSES[]
}

interface PERIODSCOURSES {
  id: string
  periodId: string
  courseId: string
  period: PERIOD
  course: COURSE
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
    { value: string; label: string }[] | undefined
  >([])

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

  return { data, error, loading, periods, courses, setCourses }
}

export default usePruebas
