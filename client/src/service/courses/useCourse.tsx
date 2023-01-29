import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { RowCourse } from '../../pages/dashboard/cursos'
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

  const formik = useFormik({
    initialValues: {
      id: undefined as number | undefined,
      name: ''
    },
    validationSchema: registerCourseValidationSchema,
    onSubmit: values => {
      if (isAdd) {
        handleCreateCourse(values)
      } else {
        handleUpdateCourse(values.id, {
          name: values.name
        })
      }
      setOpen(false)
    }
  })

  const columns: TableColumn<RowCourse>[] = [
    {
      name: 'Curso',
      selector: row => row.name,
      sortable: true
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
              formik.setValues({
                id: row.id,
                name: row.name
              })
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
