import { Listbox, Transition } from '@headlessui/react'
import { useState, Fragment, useEffect } from 'react'
import Icon from '../../components/icons'
/* import Select from '../../components/icons/select'
 */ import ExpandedSelect from '../../components/icons/expandedSelect'
import Select from 'react-select'

import DataTable, { TableColumn } from 'react-data-table-component'
import Actions from '../../components/tables/actions'
import { useInscriptionStudent } from '../../hooks/pages/useIncriptionStudents'

interface RowStuden {
  id: number
  name: string
  email: string
}

const studens = [
  {
    id: 1,
    name: 'Juan Perez',
    email: 'asjdklasdj@ajskdl.com'
  },
  {
    id: 2,
    name: 'Juan',
    email: 'asjdklasdj@ajskdl.com'
  },
  {
    id: 3,
    name: 'Perez',
    email: 'asjdklasdj@ajskdl.com'
  }
]

const InscriptionStudens = () => {
  const { periods, setSelectedPeriod } = useInscriptionStudent()

  const columns: TableColumn<RowStuden>[] = [
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Correo',
      selector: row => row.email,
      sortable: true
    }
  ]

  return (
    <div>
      <div className="flex md:items-center justify-start gap-4 w-full md:flex-row flex-col">
        <div className="max-w-xs">
          <label className="font-bold text-lg">Periodo</label>
          <Select
            options={periods}
            placeholder="Seleccione un periodo"
            className="w-full min-w-full"
            onChange={e => setSelectedPeriod(e)}
          />
        </div>
      </div>
      <div className="mt-5">
        <DataTable
          title="Estudiantes"
          pagination
          columns={columns}
          data={studens}
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
    </div>
  )
}

export default InscriptionStudens
