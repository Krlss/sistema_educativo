import DataTable from 'react-data-table-component'
import { useCourse } from '../../service/courses/useCourse'
import RightSidebar from '../../components/sidebar/rightSidebar'
import Input from '../../components/inputs/inputWithLabel'
import { useState, useEffect } from 'react'
import Select from 'react-select'
import { FieldArray, Formik, Form, Field } from 'formik'
import {
  useGetAsignatures,
  useGetAsignatures_
} from '../../service/asignatures/custom-hook'
import { ASIGNATURE } from '../../types/ContextAsignature'
import { useAsignature } from '../../service/asignatures/useAsignature'
import { useGetUnits } from '../../service/units/custom-hook'

export interface Asignature {
  periodCourseId: number
  asignature: asignature
  periodCourseAsignatureUnits: periodsCoursesAsignatures[]
}

export interface asignature {
  id: string
  name: string
  description: string
  image: string
}

export interface periodsCoursesAsignatures {
  unit: {
    id: string
    name: string
  }
}

export const LoadingTable = () => {
  return <div className="text-xl font-bold p-3">Cargando...</div>
}

const Asignaturas = () => {
  const { data, loading } = useGetAsignatures_()
  const { data: dataUnits } = useGetUnits()
  const {
    formik,
    open,
    setOpen,
    isAdd,
    setIsAdd,
    title,
    setTitle,
    columns,
    selectedP,
    selectedPC,
    setSelectedP,
    setSelectedPC,
    dataSelectCourse,
    dataSelectPeriod,
    setDataSelectCourse,
    setDataSelectPeriod,
    asignatures,
    setAsignatures,
    isSelectPAndC
  } = useAsignature()

  useEffect(() => {
    const filterAsignatures = data?.periodsCoursesAsignatures.filter(
      asignature => asignature.periodCourseId === selectedPC
    )

    setAsignatures(filterAsignatures)
  }, [selectedPC])

  return (
    <>
      <div className="flex lg:items-end justify-start gap-4 w-full lg:flex-row flex-col mb-4">
        <div className="max-w-xs w-full">
          <label className="font-bold text-lg">Periodo</label>
          <Select
            options={dataSelectPeriod}
            placeholder="Seleccione un periodo"
            className="w-full min-w-full"
            onChange={e => setSelectedP(e?.value)}
          />
        </div>
        <div className="max-w-xs w-full">
          <label className="font-bold text-lg">Cursos</label>
          <Select
            options={dataSelectCourse}
            placeholder="Seleccione un curso"
            className="w-full min-w-full"
            onChange={e => setSelectedPC(e?.value)}
          />
        </div>
      </div>

      <DataTable
        title={
          <HeaderTable
            title="Lista de asignaturas"
            buttonTitle="Crear asignatura"
            disabled={!isSelectPAndC}
            onClick={() => {
              setOpen(true)
              setIsAdd(true)
              setTitle('Agregar asignatura')
              formik.resetForm()
            }}
          />
        }
        pagination
        progressPending={loading}
        progressComponent={<LoadingTable />}
        columns={columns}
        data={isSelectPAndC ? asignatures : []}
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
        <Modal formik={formik} units={dataUnits?.units} />
      </RightSidebar>
    </>
  )
}

export default Asignaturas

export const HeaderTable = ({
  title,
  buttonTitle,
  onClick,
  disabled
}: {
  title: string
  buttonTitle: string
  onClick: () => void
  disabled: boolean
}) => {
  return (
    <div className="flex xs:items-center justify-between pr-2 xs:flex-row flex-col">
      <h1 className="font-bold">{title}</h1>
      <button
        onClick={disabled ? () => {} : onClick}
        disabled={disabled}
        className={`flex gap-1 items-center text-sm text-white px-3 py-2 rounded-sm font-medium justify-center ${
          disabled ? 'bg-blue-500/50' : 'hover:bg-blue-600 bg-blue-500'
        }`}>
        <span>{buttonTitle}</span>
      </button>
    </div>
  )
}

interface units {
  id: string
  name: string
}

const Modal = ({ formik, units }: { formik: any; units?: units[] }) => {
  const defaultValues = units?.map(u => {
    const selected = formik.values.units?.includes(u.id)
    if (selected) {
      return { value: u.id, label: u.name }
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
      <div className="flex flex-col gap-1.5 mb-4">
        <label className="font-bold text-lg">Descripción</label>
        <textarea
          name="description"
          placeholder="Descripción"
          className="border border-placeholder px-4 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-page focus:border-transparent"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && (
          <span className="text-error text-sm">
            {formik.errors.description}
          </span>
        )}
      </div>
      <Input
        name="image"
        label="Imagen de la asignatura"
        placeholder="Imagen de la asignatura"
        type="text"
        onChange={formik.handleChange}
        error={formik.errors.image}
        value={formik.values.image}
      />
      {formik.values.image && (
        <div className="flex justify-center m-4">
          <img
            src={formik.values.image}
            alt="Imagen de la asignatura"
            className="w-32 h-32 object-cover"
          />
        </div>
      )}

      <Select
        options={units?.map(u => ({
          value: u.id,
          label: u.name
        }))}
        defaultValue={defaultValues}
        isMulti
        placeholder="Seleccione las unidades"
        className="w-full min-w-full"
        onChange={(e: any) => {
          formik.setFieldValue(
            'units',
            e?.map((item: any) => item.value)
          )
        }}
      />
    </form>
  )
}
