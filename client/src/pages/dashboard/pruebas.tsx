import React from 'react'
import Select from 'react-select'
import usePruebas from '../../hooks/pages/usePruebas'

const Pruebas = () => {
  const {
    data,
    courses,
    asignatures,
    setAsignatures,
    periods,
    setCourses,
    selectedCourse,
    selectedPeriod,
    setSelectedCourse,
    setSelectedPeriod,
    units,
    setUnits,
    changeTestUnitActive
  } = usePruebas()

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Activar pruebas</h2>
      <div className="flex md:flex-row flex-col gap-3">
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
              setAsignatures([])
              setUnits([])
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
                    value: pca.id,
                    label: pca.asignature.name
                  }
                })
              setAsignatures(coursesAsignatures)
              setSelectedCourse(Number(e!.value))
              setUnits([])
            }}
          />
        </div>
        <div className="max-w-xs w-full">
          <label className="font-semibold">Asignaturas:</label>
          <Select
            options={asignatures}
            placeholder="Selecciona una asignatura"
            onChange={e => {
              const asignaturesUnits = data?.periods
                .find(period => period.id === selectedPeriod)
                ?.PC.find(pc => pc.id === selectedCourse)
                ?.PCA.find(pca => pca.id === e!.value)
                ?.PCAU.map(pcau => pcau)
              setUnits(asignaturesUnits)
            }}
          />
        </div>
      </div>

      {units?.length ? (
        <div>
          <label className="font-semibold">Unidades:</label>
          <div className="flex items-center gap-3 flex-wrap">
            {units?.map((unit, key) => (
              <Tags key={key} text={`${unit.unit.name}`}>
                <Checked
                  checked={unit.testActive}
                  onClick={check => {
                    changeTestUnitActive(unit.id, check)
                    const newUnit = { ...unit, testActive: check }
                    const newUnits = [...units]
                    newUnits[key] = newUnit
                    setUnits(newUnits)
                  }}
                />
              </Tags>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Pruebas

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
