import Select from 'react-select'
import DataTable, { TableColumn } from 'react-data-table-component'
import { useInscriptionStudent } from '../../hooks/pages/useIncriptionStudents'

interface RowStudent {
  value: string
  lastName: string
  name: string
  label: string
}

const InscriptionStudens = () => {
  const {
    setSelectedP,
    setSelectedStudent,
    setSelectedPC,
    studentTable,
    studentSelect,
    selectedP,
    selectedPC,
    selectedStudent,
    refSelectCourse,
    refSelectUser,
    handleEnroll,
    dataSelectCourse,
    dataSelectPeriod
  } = useInscriptionStudent()

  const columns: TableColumn<RowStudent>[] = [
    {
      name: 'Apellidos',
      selector: row => row.lastName,
      sortable: true
    },
    {
      name: 'Nombres',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Correo',
      selector: row => row.label,
      sortable: true
    }
  ]

  return (
    <div>
      <div className="flex lg:items-end justify-start gap-4 w-full lg:flex-row flex-col">
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
            ref={refSelectCourse}
            onChange={e => setSelectedPC(e?.value)}
          />
        </div>
        <div className="max-w-xs w-full">
          <label className="font-bold text-lg">Estudiantes</label>
          <Select
            options={studentSelect}
            placeholder="Seleccione un curso"
            className="w-full min-w-full"
            ref={refSelectUser}
            onChange={e => {
              if (e) {
                setSelectedStudent(e)
              }
            }}
          />
        </div>
        <div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${
              !selectedP && !selectedPC && !selectedStudent ? 'opacity-50' : ''
            }`}
            disabled={!selectedP && !selectedPC && !selectedStudent}
            onClick={() => {
              handleEnroll()
            }}>
            Guardar
          </button>
        </div>
      </div>
      {selectedP && selectedPC ? (
        <div className="mt-5">
          <DataTable
            title={<div className="text-lg font-semibold">Estudiantes</div>}
            pagination
            columns={columns}
            data={studentTable}
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
        </div>
      ) : null}
    </div>
  )
}

export default InscriptionStudens
