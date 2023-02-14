import { useState, useRef, useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ENROLL } from '../../service/user/graphql-mutations'
import { GETPERIODS } from '../../service/periods/graphql-queries'
import { PERIODS_ } from '../../hooks/pages/usePruebas'
import { GETSTUDENTS } from '../../service/user/graphql-queries'
import { toast } from 'react-toastify'

export interface Student {
  value: string
  lastName: string
  name: string
  label: string
  progress: { pca: { pci: number; pc: { p: string } } }[]
}

export interface SelectCourse {
  value: number
  label: string
}

export interface SelectPeriod {
  value: string
  label: string
}

export const useInscriptionStudent = () => {
  const refSelectUser = useRef<any>(null)
  const refSelectCourse = useRef<any>(null)

  const [dataSelectCourse, setDataSelectCourse] = useState<
    SelectCourse[] | undefined
  >([])

  const [dataSelectPeriod, setDataSelectPeriod] = useState<
    SelectPeriod[] | undefined
  >([])

  const [studentTable, setStudentTable] = useState<Student[]>([])
  const [studentSelect, setStudentSelect] = useState<Student[]>([])

  // selected values
  const [selectedP, setSelectedP] = useState<string>()
  const [selectedPC, setSelectedPC] = useState<number | undefined>()
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>()

  const [enroll] = useMutation(ENROLL, {
    refetchQueries: [{ query: GETSTUDENTS }, { query: GETPERIODS }]
  })

  const { data: dataPeriods, loading } = useQuery(GETPERIODS) as {
    data: { periods: PERIODS_[] }
    loading: boolean
  }

  const { data: dataStudents } = useQuery(GETSTUDENTS) as {
    data: { students: Student[] }
    loading: boolean
  }

  useEffect(() => {
    resetIssSelectedPeriod()
    setDataSelectCourse(getCoursesOfPeriod())
  }, [selectedP])

  useEffect(() => {
    if (dataPeriods?.periods) {
      setDataSelectPeriod(
        dataPeriods?.periods.map(p => {
          return { value: p.id, label: p.name }
        })
      )
    }
  }, [loading])

  useEffect(() => {
    refSelectUser.current.setValue(null)
    setStudentSelect(getStudentsNoIPC())
    setStudentTable(getStudentsIPC())
  }, [selectedPC])

  const resetIssSelectedPeriod = () => {
    setSelectedStudent(undefined)
    setSelectedPC(undefined)
    refSelectUser.current.setValue(null)
    refSelectCourse.current.setValue(null)
    setStudentTable([])
    setStudentSelect([])
  }

  const getCoursesOfPeriod = () => {
    // from data of periods get courses of selected period
    return dataPeriods?.periods
      .find(period => period.id === selectedP)
      ?.PC.map(pc => {
        return {
          value: pc.id,
          label: pc.course.name
        }
      })
  }

  const handleEnroll = () => {
    if (selectedPC && selectedStudent) {
      enroll({
        variables: {
          data: {
            periodCourseId: selectedPC,
            userId: selectedStudent.value
          }
        },
        onCompleted: () => {
          refSelectUser.current.setValue(null)
          setSelectedStudent(undefined)
          setStudentTable([...studentTable, selectedStudent])
          setStudentSelect(
            studentSelect.filter(s => s.value !== selectedStudent.value)
          )
          toast.success('Estudiante matriculado')
        },
        onError: e => {
          console.log(e)
          toast.error(e.message)
        }
      })
    }
  }

  const getStudentsIPC = () => {
    return dataStudents?.students.filter(
      s => s.progress.filter(pr => pr?.pca?.pci === selectedPC).length
    )
  }

  const getStudentsNoIPC = () => {
    // ver si se puede hacer desde prisma
    return dataStudents?.students.filter(
      s => !s.progress.some(pr => pr?.pca?.pc?.p === selectedP)
    )
  }

  return {
    refSelectUser,
    refSelectCourse,
    dataSelectCourse,
    selectedP,
    setSelectedP,
    selectedPC,
    setSelectedPC,
    selectedStudent,
    setSelectedStudent,
    setStudentTable,
    studentTable,
    studentSelect,
    setStudentSelect,
    handleEnroll,
    dataPeriods,
    dataStudents,
    dataSelectPeriod
  }
}
