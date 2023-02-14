import DataTable from 'react-data-table-component'
import { useCourse } from '../../service/courses/useCourse'
import RightSidebar from '../../components/sidebar/rightSidebar'
import Input from '../../components/inputs/inputWithLabel'
import { useGetPeriods } from '../../service/periods/custom-hook'
import { useState } from 'react'
import Select from 'react-select'
import { FieldArray, Formik, Form, Field } from 'formik'
import { useGetUsers, roles, useGetRoles } from '../../service/user/custom-hook'
import { useUser } from '../../service/user/useUser'

export const LoadingTable = () => {
  return <div className="text-xl font-bold p-3">Cargando...</div>
}

const Users = () => {
  const { data, loading } = useGetUsers()
  const { data: dataRoles } = useGetRoles()
  const { formik, open, setOpen, columns } = useUser()

  return (
    <>
      <DataTable
        title={<HeaderTable title="Lista de Usuarios" />}
        pagination
        progressPending={loading}
        progressComponent={<LoadingTable />}
        columns={columns}
        data={data?.users}
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
      <RightSidebar
        onClick={formik.handleSubmit}
        setOpen={setOpen}
        open={open}
        title="Actualizar Usuario"
        isAdd={false}>
        <Modal formik={formik} roles={dataRoles?.roles} />
      </RightSidebar>
    </>
  )
}

export default Users

export const HeaderTable = ({
  title,
  buttonTitle,
  onClick
}: {
  title: string
  buttonTitle?: string
  onClick?: () => void
}) => {
  return (
    <div className="flex xs:items-center justify-between pr-2 xs:flex-row flex-col">
      <h1 className="font-bold">{title}</h1>
      {buttonTitle ? (
        <button
          onClick={onClick}
          className="flex gap-1 items-center text-sm bg-blue-500 text-white px-3 py-2 rounded-sm font-medium hover:bg-blue-600 w-28 justify-center">
          <span>{buttonTitle}</span>
        </button>
      ) : null}
    </div>
  )
}

const Modal = ({ formik, roles }: { formik: any; roles?: roles[] }) => {
  const defaultValues = roles?.map(rol => {
    const selected = formik.values.roles?.includes(rol.id)
    if (selected) {
      return { value: rol.id, label: rol.name }
    }
  })
  return (
    <form>
      <Select
        options={roles?.map(rol => ({
          value: rol.id,
          label: rol.name
        }))}
        defaultValue={defaultValues}
        isMulti
        placeholder="Seleccione un rol"
        className="w-full min-w-full"
        onChange={(e: any) => {
          formik.setFieldValue(
            'roles',
            e?.map((item: any) => item.value)
          )
        }}
      />
    </form>
  )
}
