import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const data = {
  curso: 'Matemáticas',
  descripcion:
    '¡Mejora en matemáticas con más fluidez y confianza! En IXL, los estudiantes logran dominar competencias clave a su propio ritmo mediante ejercicios amenos e interactivos.',
  unidades: [
    {
      unidad: 1,
      temas: [
        {
          tema: 'Sistema de coordenadas rectangulares'
        },
        {
          tema: 'Números naturales de hasta seis cifras'
        },
        {
          tema: 'Valor posicional'
        },
        {
          tema: 'Suma de los valores posicionales'
        },
        {
          tema: 'Secuencia y orden de números naturales'
        },
        {
          tema: 'Rectas: paralelas, perpendiculares y secantes'
        },
        {
          tema: 'Ángulos: rectos, agudos y obtusos'
        }
      ]
    },
    {
      unidad: 2,
      temas: [
        {
          tema: 'Sistema de coordenadas rectangulares'
        },
        {
          tema: 'Números naturales de hasta seis cifras'
        },
        {
          tema: 'Valor posicional'
        },
        {
          tema: 'Suma de los valores posicionales'
        },
        {
          tema: 'Secuencia y orden de números naturales'
        },
        {
          tema: 'Rectas: paralelas, perpendiculares y secantes'
        },
        {
          tema: 'Ángulos: rectos, agudos y obtusos'
        }
      ]
    },
    {
      unidad: 3,
      temas: [
        {
          tema: 'Sistema de coordenadas rectangulares'
        },
        {
          tema: 'Números naturales de hasta seis cifras'
        },
        {
          tema: 'Valor posicional'
        },
        {
          tema: 'Suma de los valores posicionales'
        },
        {
          tema: 'Secuencia y orden de números naturales'
        },
        {
          tema: 'Rectas: paralelas, perpendiculares y secantes'
        },
        {
          tema: 'Ángulos: rectos, agudos y obtusos'
        }
      ]
    },
    {
      unidad: 4,
      temas: [
        {
          tema: 'Sistema de coordenadas rectangulares'
        },
        {
          tema: 'Números naturales de hasta seis cifras'
        },
        {
          tema: 'Valor posicional'
        },
        {
          tema: 'Suma de los valores posicionales'
        },
        {
          tema: 'Secuencia y orden de números naturales'
        },
        {
          tema: 'Rectas: paralelas, perpendiculares y secantes'
        },
        {
          tema: 'Ángulos: rectos, agudos y obtusos'
        }
      ]
    },
    {
      unidad: 5,
      temas: [
        {
          tema: 'Sistema de coordenadas rectangulares'
        },
        {
          tema: 'Números naturales de hasta seis cifras'
        },
        {
          tema: 'Valor posicional'
        },
        {
          tema: 'Suma de los valores posicionales'
        },
        {
          tema: 'Secuencia y orden de números naturales'
        },
        {
          tema: 'Rectas: paralelas, perpendiculares y secantes'
        },
        {
          tema: 'Ángulos: rectos, agudos y obtusos'
        }
      ]
    }
  ]
}

const CoursePresentation = () => {
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mx-auto">
          <h1 className="text-4xl font-medium text-lightblue-page">
            {data.curso}
          </h1>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-medium">{data.descripcion}</span>
        </div>
        <div className="mx-auto max-w-5xl">
          {data.unidades.map((unidad, index) => (
            <div
              className="rounded-md flex items-center justify-between bg-white shadow my-3"
              key={index}>
              <div className="flex items-center justify-center min-w-max max-w-[80px] w-full rounded-l-md bg-red-logo text-white font-bold text-xl h-[104px]">
                {unidad.unidad} .°
              </div>
              <div className="flex items-center justify-around pr-5">
                <div className="p-4 bg-white">
                  <h1 className="font-semibold">Unidad {unidad.unidad}</h1>
                  <div className="line-clamp-2">
                    <span className="text-sm text-gray-600 font-semibold mr-1">
                      Incluye:
                    </span>
                    {unidad.temas.map((tema, index) => (
                      <span className={'text-xs mr-1'} key={index}>
                        {tema.tema} {index !== unidad.temas.length - 1 && '|'}
                      </span>
                    ))}
                  </div>
                </div>
                <NavLink to="/">
                  <li className="bg-lightblue-page text-white font-bold text-sm px-4 py-2 rounded text-center list-none">
                    Realizar prueba
                  </li>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursePresentation
