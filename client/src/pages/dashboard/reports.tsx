import React, { useState } from 'react'
import Select from 'react-select'
import useReports from '../../hooks/pages/useReports'

const Reports = () => {
  const {
    data,
    periods,
    courses,
    setCourses,
    setAsignatures,
    selectedPeriod,
    setSelectedPeriod,
    setSelectedCourse,
    SetCourse,
    course,
    handleGrades,
    handleList
  } = useReports()

  const handleExcel = (type: String) => {
    if (type === 'grades') {
      handleGrades()
    } else if (type === 'list') {
      handleList()
    } else {
      console.log('comparacion')
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 mb-5">
        <h2 className="text-lg font-semibold text-center">Reportes</h2>
        <div className="flex md:flex-row flex-col gap-3 justify-center">
          <div className="max-w-xs w-full">
            <label className="font-semibold">Periodo:</label>
            <Select
              options={periods}
              placeholder="Selecciona un periodo"
              onChange={e => {
                const periodsCourses = data?.periods
                  .find(period => period.id === e!.value)
                  ?.PC.map(pc => {
                    return {
                      value: pc.id,
                      label: pc.course.name
                    }
                  })
                setCourses(periodsCourses)
                setSelectedPeriod(e!.value)
                setSelectedCourse(undefined)
              }}
            />
          </div>
          <div className="max-w-xs w-full">
            <label className="font-semibold">Curso:</label>
            <Select
              options={courses}
              placeholder="Selecciona un curso"
              onChange={e => {
                const coursesAsignatures = data?.periods
                  .find(period => period.id === selectedPeriod)
                  ?.PC.find(pc => pc.id === e!.value)
                  ?.PCA.map(pca => {
                    return {
                      value: pca.asignature.id,
                      label: pca.asignature.name
                    }
                  })
                setAsignatures(coursesAsignatures)
                setSelectedCourse(Number(e!.value))
                SetCourse(e!.value)
              }}
            />
          </div>
          {/* <div className="max-w-xs w-full">
            <label className="font-semibold">Asignaturas:</label>
            <Select
              options={asignatures}
              placeholder="Selecciona una asignatura"
              onChange={e => {
                const asignaturesUnits = data?.periods
                  .find(period => period.id === selectedPeriod)
                  ?.PC.find(pc => pc.id === selectedCourse)
                  ?.PCA.find(pca => pca.asignature.id === e!.value)
                  ?.PCAU.map(pcau => pcau)
                SetAsignature(e!.value)
              }}
            />
          </div> */}
        </div>

        <div className="flex justify-center gap-4">
          <button
            className={`bg-blue-500   text-white font-bold py-2 px-4 rounded-md ${
              !course ? 'opacity-50' : 'hover:bg-blue-700'
            }`}
            disabled={!course}
            onClick={() => {
              handleExcel('grades')
            }}>
            Notas
          </button>
          <button
            className={`bg-blue-500   text-white font-bold py-2 px-4 rounded-md ${
              !course ? 'opacity-50' : 'hover:bg-blue-700'
            }`}
            disabled={!course}
            onClick={() => {
              handleExcel('list')
            }}>
            Listas
          </button>
        </div>
      </div>
      <hr />
      {/* <div className="flex flex-col gap-4 items-center w-full mt-5">
        <h2 className="text-lg font-semibold">
          Comparación de notas por periodo
        </h2>
        <div className="flex md:flex-row flex-col gap-3">
          <div className="flex justify-center">
            <button
              className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md`}
              onClick={() => {
                handleExcel()
              }}>
              Descargar
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Reports

interface UNIT {
  name: string
  active: boolean
}

export const Tags = ({
  text,
  children
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <div className="w-full max-w-[7rem] border flex flex-col justify-center items-center rounded-md p-5 mr-2 mt-2">
      <p className="font-semibold truncate w-32 text-center">{text}</p>
      {children}
    </div>
  )
}

export const Checked = ({
  onClick,
  checked
}: {
  onClick: (check: boolean) => void
  checked: boolean
}) => {
  return (
    <input
      type="checkbox"
      id="checked"
      checked={checked}
      onChange={e => onClick(e.target.checked)}
      className="mt-2 cursor-pointer relative w-[2.5rem] h-[1.25rem] rounded-full bg-gray-300 outline-none appearance-none checked:bg-yellow-page before:absolute before:w-[1.25rem] before:h-[1.25rem] before:rounded-[20px] before:top-0 before:left-0 before:bg-white before:transform before:scale-[1.1] before:shadow checked:before:left-[20px] before:transition-all before:duration-300"
    />
  )
}
