import DataTable from 'react-data-table-component'
import { useGetCourses } from '../../service/courses/custom-hook'
import { useCourse } from '../../service/courses/useCourse'
import RightSidebar from '../../components/sidebar/rightSidebar'
import Input from '../../components/inputs/inputWithLabel'
import { useGetPeriods } from '../../service/periods/custom-hook'
import { useState } from 'react'
import Select from 'react-select'
import { FieldArray, Formik, Form, Field } from 'formik'

export interface course {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
  periodsCourses: periodsCourses[]
}
export interface period {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  deletedAt?: string
}
export interface periodsCourses {
  id: number
  createdAt: string
  updatedAt: string
  deletedAt?: string
  periodId: string
  courseId: string
  period: period
  course: course
}
export const LoadingTable = () => {
  return <div className="text-xl font-bold p-3">Cargando...</div>
}

const Cursos = () => {
  const { data, loading } = useGetCourses()
  const { data: dataPeriods } = useGetPeriods()
  const { formik, open, setOpen, isAdd, setIsAdd, title, setTitle, columns } =
    useCourse()

  console.log({ formik })

  return (
    <>
      <DataTable
        title={
          <HeaderTable
            title="Lista de cursos"
            buttonTitle="Crear curso"
            onClick={() => {
              setOpen(true)
              setIsAdd(true)
              setTitle('Agregar curso')
              formik.resetForm()
            }}
          />
        }
        pagination
        progressPending={loading}
        progressComponent={<LoadingTable />}
        columns={columns}
        data={data?.courses}
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
        title={title}
        isAdd={isAdd}>
        <Modal formik={formik} periods={dataPeriods?.periods} />
      </RightSidebar>
    </>
  )
}

export default Cursos

export const HeaderTable = ({
  title,
  buttonTitle,
  onClick
}: {
  title: string
  buttonTitle: string
  onClick: () => void
}) => {
  return (
    <div className="flex xs:items-center justify-between pr-2 xs:flex-row flex-col">
      <h1 className="font-bold">{title}</h1>
      <button
        onClick={onClick}
        className="flex gap-1 items-center text-sm bg-blue-500 text-white px-3 py-2 rounded-sm font-medium hover:bg-blue-600 w-28 justify-center">
        <span>{buttonTitle}</span>
      </button>
    </div>
  )
}

const Modal = ({ formik, periods }: { formik: any; periods?: period[] }) => {
  const defaultValues = periods?.map(period => {
    const selected = formik.values.periods?.includes(period.id)
    if (selected) {
      return { value: period.id, label: period.name }
    }
  })
  return (
    <form>
      <Input
        name="name"
        label="Nombre"
        placeholder="Nombre"
        type="text"
        autoFocus
        onChange={formik.handleChange}
        error={formik.errors.name}
        value={formik.values.name}
      />
      <Select
        options={periods?.map(period => ({
          value: period.id,
          label: period.name
        }))}
        defaultValue={defaultValues}
        isMulti
        placeholder="Seleccione un periodo"
        className="w-full min-w-full"
        onChange={(e: any) => {
          formik.setFieldValue(
            'periods',
            e?.map((item: any) => item.value)
          )
        }}
      />
    </form>
  )
}
