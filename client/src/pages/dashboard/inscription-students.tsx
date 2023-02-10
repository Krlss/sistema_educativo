import { Listbox, Transition } from '@headlessui/react'
import { useState, Fragment, useEffect } from 'react'
import Icon from '../../components/icons'
/* import Select from '../../components/icons/select'
 */ import ExpandedSelect from '../../components/icons/expandedSelect'
import Select from 'react-select'

import DataTable, { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { useInscriptionStudent } from '../../hooks/pages/useIncriptionStudents'
import { useMutation, useQuery } from '@apollo/client'
import { ENROLL } from '../../service/user/graphql-mutations'
import { GETPERIODS } from '../../service/periods/graphql-queries'
import { PERIODS_ } from '../../hooks/pages/usePruebas'
import { GETSTUDENTS } from '../../service/user/graphql-queries'

interface RowStuden {
  value: string
  label: string
  email: string
}

interface Student {
  value: string
  label: string
  email: string
  progress: { pca: { pc: { id: number } } }[]
}

const InscriptionStudens = () => {
  // const { periods, setSelectedPeriod } = useInscriptionStudent()
  const [periodCourse, setPeriodCourse] =
    useState<{ value: number; label: string; p: string }[]>()
  const [students, setStudents] = useState<Student[]>([])
  const [studentsWtPC, setStudentsWtPC] = useState<Student[]>([])

  const [selectedP, setSelectedP] = useState<string>()
  const [selectedPC, setSelectedPC] = useState<number | undefined>()
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>()

  const [enroll, { loading }] = useMutation(ENROLL)

  const columns: TableColumn<RowStuden>[] = [
    {
      name: 'Nombre',
      selector: row => row.label,
      sortable: true
    },
    {
      name: 'Correo',
      selector: row => row.email,
      sortable: true
    }
  ]

  const { data: periods } = useQuery(GETPERIODS) as {
    data: { periods: PERIODS_[] }
    loading: boolean
  }
  const { data: studens } = useQuery(GETSTUDENTS) as {
    data: { students: Student[] }
    loading: boolean
  }

  /* const handlePeriod = (p: string) => {
    const pcs = PCs.filter(pc => pc.p === p)
    setPeriodCourse(pcs)
  } */

  const handlePeriodCourse = (pc: number) => {
    const students = studens.students.filter(
      s => s.progress.filter(pr => pr?.pca?.pc.id === pc).length
    )
    const studentswtpc = studens.students.filter(s =>
      s.progress.filter(pr => pr?.pca?.pc.id !== pc)
    )
    setStudents(students)
    setStudentsWtPC(studentswtpc)
  }

  const handleStudent = (student: Student) => {
    setSelectedStudent(student)
  }

  const handleEnroll = () => {
    console.log(selectedPC, selectedStudent!.value)
    if (selectedPC && selectedStudent) {
      enroll({
        variables: {
          data: {
            periodCourseId: selectedPC,
            userId: selectedStudent.value
          }
        },
        onCompleted: () => {
          setSelectedStudent(undefined)
          setSelectedPC(undefined)
          setStudents([...students, selectedStudent])
          setStudentsWtPC(
            studentsWtPC.filter(s => s.value !== selectedStudent.value)
          )
        },
        onError: e => {
          console.log(e)
        }
      })
    }
  }

  return (
    <div>
      <div className="flex md:items-center justify-start gap-4 w-full md:flex-row flex-col">
        <div className="max-w-xs">
          <label className="font-bold text-lg">Periodo</label>
          <Select
            options={periods?.periods?.map(p => {
              return { value: p.id, label: p.name }
            })}
            placeholder="Seleccione un periodo"
            className="w-full min-w-full"
            onChange={e => {
              if (e!.value) {
                setSelectedP(e!.value)
              }
            }}
          />
        </div>
        <div className="max-w-xs">
          <label className="font-bold text-lg">Cursos</label>
          <Select
            options={periods?.periods
              .find(p => p.id === selectedP)
              ?.PC.map(pc => {
                return { value: pc.id, label: pc.course.name }
              })}
            placeholder="Seleccione un curso"
            className="w-full min-w-full"
            onChange={e => {
              if (e!.value) {
                handlePeriodCourse(e!.value)
              }
            }}
          />
        </div>
        <div className="max-w-xs">
          <label className="font-bold text-lg">Estudiantes</label>
          <Select
            options={studentsWtPC}
            placeholder="Seleccione un curso"
            className="w-full min-w-full"
            onChange={e => {
              if (e) {
                handleStudent(e)
              }
            }}
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              handleEnroll()
            }}>
            Guardar
          </button>
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          title="Estudiantes"
          pagination
          columns={columns}
          data={students}
          style={{ width: '100%' }}
          customStyles={{
            headCells: {
              style: {
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: '#4A5568'
              }
            }
          }}
          noDataComponent="No hay datos"
        />
      </div>
    </div>
  )
}

export default InscriptionStudens
