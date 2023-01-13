import React, { useState } from 'react'
const data_ = {
  curso: '2023-2024',
  createdAt: '2023-10-10',
  asignatures: [
    {
      name: 'Matemáticas',
      units: [
        {
          name: 'Unidad 1',
          active: true
        },
        {
          name: 'Unidad 2',
          active: false
        },
        {
          name: 'Unidad 3',
          active: true
        },
        {
          name: 'Unidad 4',
          active: true
        },
        {
          name: 'Unidad 5',
          active: false
        },
        {
          name: 'Unidad 6',
          active: false
        }
      ]
    },
    {
      name: 'Inglés',
      units: [
        {
          name: 'Unidad 1',
          active: false
        },
        {
          name: 'Unidad 2',
          active: false
        },
        {
          name: 'Unidad 3',
          active: false
        },
        {
          name: 'Unidad 4',
          active: false
        },
        {
          name: 'Unidad 5',
          active: false
        },
        {
          name: 'Unidad 6',
          active: false
        }
      ]
    },
    {
      name: 'Computación',
      units: [
        {
          name: 'Unidad 1',
          active: false
        },
        {
          name: 'Unidad 2',
          active: false
        },
        {
          name: 'Unidad 3',
          active: false
        },
        {
          name: 'Unidad 4',
          active: false
        },
        {
          name: 'Unidad 5',
          active: false
        },
        {
          name: 'Unidad 6',
          active: false
        }
      ]
    }
  ]
}

const Pruebas = () => {
  const [data, setData] = useState(data_)

  return (
    <div>
      <h1 className="text-center p-5 font-bold text-lg">Curso: {data.curso}</h1>
      {data.asignatures.map((asignature, a) => {
        return (
          <div key={a} className="my-4">
            <h2 className="font-bold mb-1">Materia: {asignature.name}</h2>
            <div className="grid grid-cols-auto-index-pruebas gap-2">
              {asignature.units.map((unit, index) => {
                return (
                  <ContectPrueba
                    key={index}
                    unit={unit}
                    onChange={e => {
                      const newData = { ...data }
                      newData.asignatures[a].units[index].active =
                        e.target.checked
                      setData(newData)
                    }}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
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
