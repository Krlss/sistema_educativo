import DataTable from 'react-data-table-component'
import { useStudents } from '../../hooks/pages/useStudents'
const Students = () => {
  const { dataStudents } = useStudents()
  const columns = [
    {
      name: 'Nombre',
      selector: (row: any) => `${row.name} ${row.lastName}`,
      sortable: true
    },
    {
      name: 'Correo',
      selector: (row: any) => row.email,
      sortable: true
    }
  ]
  return (
    <div>
      <DataTable
        title="Estudiantes"
        columns={columns}
        data={dataStudents.students}
        pagination
        highlightOnHover
        pointerOnHover
        responsive
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
      />
    </div>
  )
}

export default Students
