import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { pastelColors } from '../../constants/colors'
const data1 = {
  curso: 'Matemáticas',
  descripcion:
    '¡Mejora en matemáticas con más fluidez y confianza! En Mapple, los estudiantes logran dominar competencias clave a su propio ritmo mediante ejercicios amenos e interactivos.',
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
          tema: 'Adiciones y sustracciones'
        },
        {
          tema: 'Propiedades de la adición'
        },
        {
          tema: 'Multiplicación'
        },
        {
          tema: 'Producto de un número natural'
        },
        {
          tema: 'Propiedad distributiva de la multiplicación'
        },
        {
          tema: 'Paralelogramos y trapecios'
        },
        {
          tema: 'Paralelogramos y trapecios'
        }
      ]
    },
    {
      unidad: 3,
      temas: [
        {
          tema: 'División con una cifra en el divisor'
        },
        {
          tema: 'Operaciones combinadas con números naturales'
        },
        {
          tema: 'Fracciones como números'
        },
        {
          tema: 'Tipos de fracciones'
        },
        {
          tema: 'Triángulos'
        },
        {
          tema: 'Medidas de logintud y sus múltiplos'
        },
        {
          tema: 'Conversiones de medidas de longitud'
        }
      ]
    },
    {
      unidad: 4,
      temas: [
        {
          tema: 'Fracciones simples'
        },
        {
          tema: 'Fracciones simples, representación gráfica'
        },
        {
          tema: 'Fracciones simples en la semirecta numérica'
        },
        {
          tema: 'Relación de orden entre fracciones'
        },
        {
          tema: 'Perímetro de paralelogramos'
        },
        {
          tema: 'Perímetro de trapecios'
        },
        {
          tema: 'Perímetro de triángulos'
        },
        {
          tema: 'Perímetro de barras'
        },
        {
          tema: 'Estadística en excel'
        }
      ]
    },
    {
      unidad: 5,
      temas: [
        {
          tema: 'Patrones numéricos decrecientes'
        },
        {
          tema: 'Números decimales en la vida cotidiana'
        },
        {
          tema: 'Números decimales'
        },
        {
          tema: 'Números decimales a fracciones'
        },
        {
          tema: 'Relación de orden entre decimales'
        },
        {
          tema: 'Números decimales: representción gráfica'
        },
        {
          tema: 'Redondear decimales'
        },
        {
          tema: 'Metro cuadrado'
        }
      ]
    }
  ]
}

const data2 = {
  curso: 'Inglés',
  descripcion:
    '¡Mejora en inglés con más fluidez y confianza!, En Mapple, los estudiantes logran dominar competencias clave a su propio ritmo mediante ejercicios amenos e interactivos.',
  unidades: [
    {
      unidad: 1,
      temas: [
        {
          tema: 'What’s your favorite class?'
        },
        {
          tema: 'Wheres the gym?'
        },
        {
          tema: 'Phonics: bl, br; cl, cr;'
        },
        {
          tema: 'fl, fr; dr; tr.'
        }
      ]
    },
    {
      unidad: 2,
      temas: [
        {
          tema: 'What do you do in'
        },
        {
          tema: 'The library?'
        },
        {
          tema: 'Review'
        },
        {
          tema: 'LEarn more.'
        },
        {
          tema: 'Phonics: gl, gr; pl, pr;'
        },
        {
          tema: 'sc, sk; sl, sp'
        }
      ]
    },
    {
      unidad: 3,
      temas: [
        {
          tema: 'Lets paint!'
        },
        {
          tema: 'What do you want to eat?'
        },
        {
          tema: 'Phonics: sm, sn; st;'
        },
        {
          tema: 'sw, tw; scr, str'
        }
      ]
    },
    {
      unidad: 4,
      temas: [
        {
          tema: 'Can you play the piano?'
        },
        {
          tema: 'Review...'
        },
        {
          tema: 'Learn more'
        },
        {
          tema: 'Phonics: spl, spr, squ; ct, ft; nd, nt; nk, mp'
        }
      ]
    },
    {
      unidad: 5,
      temas: [
        {
          tema: 'I loke to jump!'
        },
        {
          tema: 'I hurt my nose'
        },
        {
          tema: 'Phoenics; ang, ing, ong,  ung; ld, lf, lk, lm, lp, lt; le, el'
        }
      ]
    }
  ]
}

const data3 = {
  curso: 'Computación',
  descripcion:
    '¡Mejora en computación con más fluidez y confianza!, En Mapple, los estudiantes logran dominar competencias clave a su propio ritmo mediante ejercicios amenos e interactivos.',
  unidades: [
    {
      unidad: 1,
      temas: [
        {
          tema: 'La computadora: Partes de la computadora, cuidados del equipo, cables y enchufe'
        }
      ]
    },
    {
      unidad: 2,
      temas: [
        {
          tema: 'Periféricos de entrada y salidas'
        },
        {
          tema: 'Software y hardware'
        }
      ]
    },
    {
      unidad: 3,
      temas: [
        {
          tema: 'Que es Windows'
        },
        {
          tema: 'Explorador de Windows'
        }
      ]
    },
    {
      unidad: 4,
      temas: [
        {
          tema: 'Herramientas de entorno de Windows'
        }
      ]
    },
    {
      unidad: 5,
      temas: [
        {
          tema: 'Sistemas  multimedias'
        }
      ]
    }
  ]
}

let data = {} as {
  curso: string
  descripcion: string
  unidades: {
    unidad: number
    temas: {
      tema: string
    }[]
  }[]
}

const CoursePresentation = () => {
  const { curso } = useParams()

  if (curso === 'matematicas') {
    data = data1
  }
  if (curso === 'ingles') {
    data = data2
  }
  if (curso === 'computacion') {
    data = data3
  }

  const [colors] = useState(pastelColors)

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
              className="rounded-md flex items-center my-3 justify-start shadow cursor-pointer hover:shadow-md bg-slate-50 hover:bg-white"
              key={index}>
              <div
                className="flex items-center justify-center min-w-[104px] max-w-[80px] w-full rounded-l-md font-bold text-xl h-[104px]"
                style={{
                  backgroundColor:
                    colors[Math.floor(Math.random() * colors.length)]
                }}>
                {unidad.unidad} .°
              </div>
              <div className="flex items-center flex-1">
                <div className="p-4">
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
              </div>
              {/* <div className="mr-10">
                <NavLink to="/">
                  <li className="bg-lightblue-page text-white font-bold text-sm px-4 py-2 rounded text-center list-none">
                    Realizar prueba
                  </li>
                </NavLink>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CoursePresentation
