import React from 'react'
import Select from 'react-select'
import usePruebas from '../../hooks/pages/usePruebas'

const Pruebas = () => {
  const { data, courses, periods, setCourses } = usePruebas()

  return (
    <div>
      <div className="flex gap-3">
        <div className="max-w-xs w-full">
          <label className="text-lg font-semibold">Periodo:</label>
          <Select
            options={periods}
            placeholder="Selecciona un periodo"
            onChange={e => {
              const periodsCourses = data?.periods
                .find(period => period.id === e!.value)
                ?.periodsCourses.map(periodCourse => {
                  return {
                    value: periodCourse.course.id,
                    label: periodCourse.course.name
                  }
                })
              setCourses(periodsCourses)
            }}
          />
        </div>
        <div className="max-w-xs w-full">
          <label className="text-lg font-semibold">Curso:</label>
          <Select options={courses} placeholder="Selecciona un curso" />
        </div>
      </div>
    </div>
  )
}

export default Pruebas

interface UNIT {
  name: string
  active: boolean
}

const ContectPrueba = ({
  unit,
  onChange
}: {
  unit: UNIT
  onChange: React.ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <div className="border bg-gray-100 flex justify-center p-5 rounded-md shadow">
      <div className="flex flex-col items-center">
        <span className="font-semibold">{unit.name}</span>
        <div className="flex items-center gap-2">
          ACTIVAR PRUEBA:
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 cursor-pointer"
            onChange={onChange}
            checked={unit.active}
          />
        </div>
      </div>
    </div>
  )
}
