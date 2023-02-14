import { useContext } from 'react'
import { GETUSERS, LOGIN } from './graphql-queries'
import { CREATE_USER } from './graphql-mutations'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { getDataSession } from '../../utils/dataSession'
import GeneralContext from '../../contexts/context'
import { USER } from '../../types/ContextUser'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { course } from '../../pages/dashboard/cursos'
import { useFormik } from 'formik'
import { registerCourseValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { users, useUpdateUser } from './custom-hook'

export const useUser = () => {
  const { handleUpdateUserRol } = useUpdateUser()
  const [open, setOpen] = useState(false)
  const [selectRow, setSelectRow] = useState<{
    id: string
    roles: string[]
  }>({
    id: '',
    roles: []
  })

  const formik = useFormik({
    initialValues: {
      roles: [] as string[]
    },
    onSubmit: async values => {
      handleUpdateUserRol({ id: selectRow.id, roles: values.roles })
      setOpen(false)
    }
  })

  const columns: TableColumn<users>[] = [
    {
      name: 'Nombres',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Apellidos',
      selector: row => row.lastName,
      sortable: true
    },
    {
      name: 'Correo electrónico',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Roles',
      cell: row => {
        const onlyTwo = row.roles.map(rol => rol.name).slice(0, 2)
        const rest = row.roles.length - 2
        return (
          <div className="flex flex-row gap-1 flex-wrap">
            {onlyTwo.map((rol, key) => (
              <span key={key} className="bg-slate-500 p-0.5 text-white rounded">
                {rol}
              </span>
            ))}
            {rest > 0 && (
              <span className="bg-blue-400 p-0.5 rounded">
                +{row.roles.length}
              </span>
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
              setSelectRow({
                id: row.id,
                roles: row.roles.map(rol => rol.id)
              })
              formik.setValues({
                roles: row.roles.map(rol => rol.id)
              })
              setOpen(true)
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
    columns
  }
}
