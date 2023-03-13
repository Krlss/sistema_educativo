import DataTable from 'react-data-table-component'
import { useGetCourses } from '../../service/courses/custom-hook'
import { useCourse } from '../../service/courses/useCourse'
import RightSidebar from '../../components/sidebar/rightSidebar'
import Input from '../../components/inputs/inputWithLabel'
import { useGetPeriods } from '../../service/periods/custom-hook'
import { useState } from 'react'
import Select from 'react-select'
import { FieldArray, Formik, Form, Field } from 'formik'
import { useGetAsignatures } from '../../service/asignatures/custom-hook'
import { ASIGNATURE } from '../../types/ContextAsignature'

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
  periodsCoursesAsignatures: {
    asignature: {
      id: string
      name: string
    }
  }[]
}
export const LoadingTable = () => {
  return <div className="text-xl font-bold p-3">Cargando...</div>
}

const Cursos = () => {
  const { data, loading } = useGetCourses()
  const { data: dataPeriods } = useGetPeriods()
  const { data: dataAsignatures } = useGetAsignatures()
  const { formik, open, setOpen, isAdd, setIsAdd, title, setTitle, columns } =
    useCourse()

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
        <Modal
          formik={formik}
          periods={dataPeriods?.periods}
          asignatures={dataAsignatures?.asignatures}
        />
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

const Modal = ({
  formik,
  periods,
  asignatures
}: {
  formik: any
  periods?: period[]
  asignatures?: ASIGNATURE[]
}) => {
  const defaultValues = periods?.map(period => {
    const selected = formik.values.periods?.includes(period.id)
    if (selected) {
      return { value: period.id, label: period.name }
    }
  })

  const defaultValuesAsignatures = asignatures?.map(asignature => {
    const selected = formik.values.asignatures?.includes(asignature.id)
    if (selected) {
      return { value: asignature.id, label: asignature.name }
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
      <Select
        options={asignatures?.map(asignature => ({
          value: asignature.id,
          label: asignature.name
        }))}
        defaultValue={defaultValuesAsignatures}
        isMulti
        placeholder="Selecciona las asignaturas"
        className="w-full min-w-full mt-2"
        onChange={(e: any) => {
          formik.setFieldValue(
            'asignatures',
            e?.map((item: any) => item.value)
          )
        }}
      />
    </form>
  )
}
