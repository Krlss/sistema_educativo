import { useContext, useState } from 'react'
import { useQuery } from '@apollo/client'
import { course } from '../../pages/dashboard/cursos'
import { GETCOURSES } from './graphql-queries'
import { useFormik } from 'formik'
import { registerCourseValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { useCreateCourse } from './custom-hook'
import GeneralContext from '../../contexts/context'
import { ASIGNATURE } from '../../types/ContextAsignature'

export const useCourse = () => {
  const [open, setOpen] = useState(false)
  const [isAdd, setIsAdd] = useState(true)
  const [title, setTitle] = useState('Agregar curso')
  const { handleCreateCourse, handleUpdateCourse } = useCreateCourse()
  const [selectRow, setSelectRow] = useState<{
    id: string
    name: string
    periods: string[]
    asignatures: string[]
  }>({
    id: '',
    name: '',
    periods: [],
    asignatures: []
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      periods: [] as string[],
      asignatures: [] as string[]
    },
    validationSchema: registerCourseValidationSchema,
    onSubmit: values => {
      if (isAdd) {
        handleCreateCourse(values)
      } else {
        const { id, name } = selectRow
        handleUpdateCourse({
          id,
          ...(name !== values.name && { name: values.name }),
          periods: values.periods,
          asignatures: values.asignatures
        })
      }
      setOpen(false)
    }
  })

  const columns: TableColumn<course>[] = [
    {
      name: 'Curso',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Periodos',
      cell: row => {
        const onlyTwo = row.periodsCourses
          .map(period => period.period.name)
          .slice(0, 2)
        const rest = row.periodsCourses.length - 2
        return (
          <div className="flex flex-wrap gap-1">
            {onlyTwo.map((period, key) => (
              <span key={key} className="bg-slate-500 p-0.5 text-white rounded">
                {period}
              </span>
            ))}
            {rest > 0 && (
              <span className="bg-blue-400 p-0.5 rounded">+{rest}</span>
            )}
          </div>
        )
      },
      sortable: false,
      style: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }
    },
    {
      name: 'Asignaturas',
      cell: row => {
        const onlyTwo = row.periodsCourses[0].periodsCoursesAsignatures
          .map(pca => pca.asignature.name)
          .slice(0, 2)
        const rest = row.periodsCourses[0].periodsCoursesAsignatures.length - 2
        return (
          <div className="flex flex-wrap gap-1">
            {onlyTwo.map((asignature, key) => (
              <span key={key} className="bg-slate-500 p-0.5 text-white rounded">
                {asignature}
              </span>
            ))}
            {rest > 0 && (
              <span className="bg-blue-400 p-0.5 rounded">+{rest}</span>
            )}
          </div>
        )
      },
      sortable: false,
      style: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }
    },
    {
      name: 'Creado hace',
      selector: row => row.createdAt,
      sortable: true,
      format: row => row.createdAt?.split('T')[0]
    },
    {
      name: 'Actualizado hace',
      selector: row => row.updatedAt,
      sortable: true,
      format: row => row.updatedAt?.split('T')[0]
    },
    {
      name: 'Acciones',
      cell: row => {
        return (
          <Actions
            onClick={() => {
              setOpen(true)
              setIsAdd(false)
              const period_ = {
                id: row.id,
                name: row.name,
                periods: row.periodsCourses.map(period => period.periodId),
                asignatures:
                  row.periodsCourses[0].periodsCoursesAsignatures.map(
                    pca => pca.asignature.id
                  )
              }
              formik.setValues(period_)
              setSelectRow(period_)
              setTitle('Editar curso')
            }}
            onDelete={() => {
              console.log('delete')
            }}
          />
        )
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]

  return {
    formik,
    open,
    setOpen,
    isAdd,
    setIsAdd,
    title,
    setTitle,
    columns
  }
}
