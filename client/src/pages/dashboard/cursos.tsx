import React, { useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import Icon from '../../components/icons'
import Edit from '../../components/icons/edit'
import Trash from '../../components/icons/trash'
interface Row {
  id: number
  name: string
  createdAt: string
  updatedAt: string
}

const Cursos = () => {
  const [showModal, setShowModal] = useState(false)
  const [isAdd, setIsAdd] = useState(true)
  const [row, setRow] = useState<Row | undefined>(undefined)

  const columns: TableColumn<Row>[] = [
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Creado hace',
      selector: row => row.createdAt,
      sortable: true
    },
    {
      name: 'Actualizado hace',
      selector: row => row.updatedAt,
      sortable: true
    },
    {
      cell: row => (
        <button
          className="flex gap-1 group hover:text-blue-500"
          onClick={() => {
            setShowModal(true)
            setIsAdd(false)
            setRow(row)
          }}>
          <Icon
            viewBox="16 16"
            width={16}
            height={16}
            className="group-hover:fill-current group-hover:text-blue-500">
            <Edit />
          </Icon>
          Editar
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    },
    {
      cell: row => (
        <button className="flex gap-1 group hover:text-red-500">
          <Icon
            viewBox="16 16"
            width={16}
            height={16}
            className="group-hover:fill-current group-hover:text-red-500">
            <Trash />
          </Icon>
          Eliminar
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]

  const data = [
    {
      id: 1,
      name: '2021-2022',
      createdAt: '1988',
      updatedAt: '2020'
    },
    {
      id: 2,
      name: '2022-2023',
      createdAt: '1984',
      updatedAt: '2020'
    }
  ]

  return (
    <>
      <DataTable
        title={
          <Header setState={setShowModal} setIsAdd={setIsAdd} setRow={setRow} />
        }
        columns={columns}
        data={data}
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
      />
      {showModal && <Modal setState={setShowModal} isAdd={isAdd} data={row} />}
    </>
  )
}

export default Cursos

const Header = ({
  setState,
  setIsAdd,
  setRow
}: {
  setState: React.Dispatch<React.SetStateAction<boolean>>
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>
  setRow: React.Dispatch<React.SetStateAction<Row | undefined>>
}) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold">Lista de cursos</h1>
      <button
        onClick={() => {
          setState(true)
          setIsAdd(true)
          setRow(undefined)
        }}
        className="flex gap-1 items-center text-sm bg-blue-500 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-600">
        <span>Crear curso</span>
      </button>
    </div>
  )
}

const Modal = ({
  setState,
  isAdd,
  data
}: {
  setState: React.Dispatch<React.SetStateAction<boolean>>
  isAdd: boolean
  data?: Row
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md p-5 w-96">
        <h1 className="text-lg font-bold">
          {isAdd ? 'Crear' : 'Actualizar'} curso
        </h1>
        <form>
          <div className="mt-3">
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoFocus
              className="mt-1 border px-2 py-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue={data?.name}
            />
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="button"
              onClick={() => setState(false)}
              className="bg-gray-200 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300">
              Cancelar
            </button>
            <button className="bg-blue-500 px-3 py-1 rounded-md text-sm text-white font-medium hover:bg-blue-600 ml-2">
              {isAdd ? 'Crear' : 'Actualizar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
