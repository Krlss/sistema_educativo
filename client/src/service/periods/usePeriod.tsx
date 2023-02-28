import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { course } from '../../pages/dashboard/cursos'
import { GETPERIODS } from './graphql-queries'
import { useFormik } from 'formik'
import { registerCourseValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import {
  useCreatePeriod,
  getPeriodProps,
  getPeriodsProps,
  useGetPeriods
} from './custom-hook'

export const usePeriod = () => {
  const [open, setOpen] = useState(false)
  const [isAdd, setIsAdd] = useState(true)
  const [title, setTitle] = useState('Agregar curso')
  const { createPeriod, updatePeriod, handleCreatePeriod, handleUpdatePeriod } =
    useCreatePeriod()
  const [selectRow, setSelectRow] = useState<{
    id: string
    name: string
  }>({
    id: '',
    name: ''
  })

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: registerCourseValidationSchema,
    onSubmit: values => {
      if (isAdd) {
        handleCreatePeriod(values)
      } else {
        const { id, name } = selectRow
        handleUpdatePeriod({
          id,
          ...(name !== values.name && { name: values.name })
        })
      }
      setOpen(false)
    }
  })

  const columns: TableColumn<course>[] = [
    {
      name: 'Periodo',
      selector: row => row.name && row.name,
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
              const period_ = {
                id: row.id,
                name: row.name
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
