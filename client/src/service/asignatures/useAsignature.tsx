import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Asignature } from '../../pages/dashboard/asignaturas'
import { GETASIGNATURES } from './graphql-queries'
import { useFormik } from 'formik'
import { registerAsignatureValidationSchema } from '../../schemas'
import { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { useCreateAsignature } from './custom-hook'
import GeneralContext from '../../contexts/context'
import { ASIGNATURE } from '../../types/ContextAsignature'
import {
  SelectCourse,
  SelectPeriod
} from '../../hooks/pages/useIncriptionStudents'
import { GETPERIODS } from '../periods/graphql-queries'
import { PERIODS_ } from '../../hooks/pages/useReports'

export const useAsignature = () => {
  const [open, setOpen] = useState(false)
  const [isAdd, setIsAdd] = useState(true)
  const [title, setTitle] = useState('Agregar curso')
  const [selectedP, setSelectedP] = useState<string>()
  const [selectedPC, setSelectedPC] = useState<number | undefined>()
  const [asignatures, setAsignatures] = useState<Asignature[]>([])
  const isSelectPAndC = selectedP && selectedPC
  const [dataSelectCourse, setDataSelectCourse] = useState<
    SelectCourse[] | undefined
  >([])

  const [dataSelectPeriod, setDataSelectPeriod] = useState<
    SelectPeriod[] | undefined
  >([])

  const { handleCreateAsignature, handleUpdateAsignature } =
    useCreateAsignature()
  const [selectRow, setSelectRow] = useState<{
    id: string
    name: string
    description: string
    image: string
    units: string[]
  }>({
    id: '',
    name: '',
    description: '',
    image: '',
    units: [] as string[]
  })

  const { data: dataPeriods, loading } = useQuery(GETPERIODS) as {
    data: { periods: PERIODS_[] }
    loading: boolean
  }

  const getCoursesOfPeriod = () => {
    // from data of periods get courses of selected period
    return dataPeriods?.periods
      .find(period => period.id === selectedP)
      ?.PC.map(pc => {
        return {
          value: pc.id,
          label: pc.course.name
        }
      })
  }

  useEffect(() => {
    resetIssSelectedPeriod()
    setDataSelectCourse(getCoursesOfPeriod())
  }, [selectedP])

  const resetIssSelectedPeriod = () => {
    setSelectedPC(undefined)
  }

  useEffect(() => {
    if (dataPeriods?.periods) {
      setDataSelectPeriod(
        dataPeriods?.periods.map(p => {
          return { value: p.id, label: p.name }
        })
      )
    }
  }, [loading])

  const formik = useFormik({
    initialValues: {
      id: '',
      name: '',
      description: '',
      image: '',
      units: [] as string[],
      periodsCourses: selectedPC
    },
    validationSchema: registerAsignatureValidationSchema,
    onSubmit: values => {
      if (isAdd) {
        handleCreateAsignature({
          description: values.description,
          image: values.image,
          name: values.name,
          ...(selectedPC && {
            periodsCourses: [selectedPC]
          }),
          ...(values.units && { units: values.units })
        })
        setSelectedPC(undefined)
        setSelectedPC(undefined)
      } else {
        const { id, name, description, image, units } = selectRow
        handleUpdateAsignature({
          id,
          ...(selectedPC && {
            periodsCourses: [selectedPC]
          }),
          ...(name !== values.name && { name: values.name }),
          ...(description !== values.description && {
            description: values.description
          }),
          ...(image !== values.image && { image: values.image }),
          ...(values.units && { units: values.units })
        })
        setSelectedPC(undefined)
        setSelectedPC(undefined)
      }
      setOpen(false)
    }
  })

  const columns: TableColumn<Asignature>[] = [
    {
      name: 'Imagen',
      cell: row => {
        return (
          <img
            className="w-12 h-12"
            src={row.asignature.image}
            alt={row.asignature.name}
          />
        )
      }
    },
    {
      name: 'Asignatura',
      selector: row => row.asignature.name,
      sortable: true
    },
    {
      name: 'Descripción',
      selector: row => row.asignature.description,
      sortable: true
    },
    {
      name: 'Unidades',
      cell: row => {
        const onlyTwo = row.periodCourseAsignatureUnits
          .map(e => e.unit)
          .slice(0, 2)

        const rest = row.periodCourseAsignatureUnits.length - 2

        return (
          <div className="flex flex-wrap gap-1">
            {onlyTwo.map((asig, key) => (
              <span key={key} className="bg-slate-500 p-0.5 text-white rounded">
                {asig.name}
              </span>
            ))}
            {rest > 0 && (
              <span className="bg-blue-400 p-0.5 rounded">+{rest}</span>
            )}
          </div>
        )
      },
      sortable: false,
      style: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem'
      }
    },
    {
      name: 'Acciones',
      cell: row => {
        return (
          <Actions
            onClick={() => {
              setOpen(true)
              setIsAdd(false)
              const asignature_ = {
                id: row.asignature.id,
                name: row.asignature.name,
                description: row.asignature.description,
                image: row.asignature.image,
                periodsCourses: selectedPC,
                units: row.periodCourseAsignatureUnits.map(e => e.unit.id)
              }
              formik.setValues(asignature_)
              setSelectRow(asignature_)
              setTitle('Editar asignatura')
            }}
            onDelete={() => {
              console.log('delete')
            }}
          />
        )
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]

  return {
    formik,
    open,
    setOpen,
    isAdd,
    setIsAdd,
    title,
    setTitle,
    columns,
    selectedP,
    setSelectedP,
    selectedPC,
    setSelectedPC,
    dataSelectCourse,
    setDataSelectCourse,
    dataSelectPeriod,
    setDataSelectPeriod,
    asignatures,
    setAsignatures,
    isSelectPAndC
  }
}
