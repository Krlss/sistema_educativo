import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { course } from '../../pages/dashboard/cursos'
import { GETCOURSES } from './graphql-queries'
import { useFormik } from 'formik'
import { registerCourseValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { useCreateCourse } from './custom-hook'

export const useCourse = () => {
  const [open, setOpen] = useState(false)
  const [isAdd, setIsAdd] = useState(true)
  const [title, setTitle] = useState('Agregar curso')
  const { handleCreateCourse, handleUpdateCourse } = useCreateCourse()
  const [selectRow, setSelectRow] = useState<{
    id: string
    name: string
    periods: string[]
  }>({
    id: '',
    name: '',
    periods: []
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      periods: [] as string[]
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
          periods: values.periods
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
      selector: row => {
        return row.periodsCourses.map(period => period.period.name).join(', ')
      },
      sortable: false
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
                periods: row.periodsCourses.map(period => period.periodId)
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
