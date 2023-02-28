import DataTable from 'react-data-table-component'
import { LoadingTable } from './cursos'
import { useGetPeriods } from '../../service/periods/custom-hook'
import Input from '../../components/inputs/inputWithLabel'
import { usePeriod } from '../../service/periods/usePeriod'
import RightSidebar from '../../components/sidebar/rightSidebar'

const Period = () => {
  const { data, loading } = useGetPeriods()
  const { formik, open, setOpen, isAdd, setIsAdd, title, setTitle, columns } =
    usePeriod()
  return (
    <>
      <DataTable
        title={
          <HeaderTable
            title="Lista de periodos"
            buttonTitle="Crear periodo"
            onClick={() => {
              setOpen(true)
              setIsAdd(true)
              setTitle('Agregar curso')
              formik.resetForm()
            }}
          />
        }
        columns={columns}
        data={data?.periods || []}
        progressPending={loading}
        progressComponent={<LoadingTable />}
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
      <RightSidebar
        onClick={formik.handleSubmit}
        setOpen={setOpen}
        open={open}
        title={title}
        isAdd={isAdd}>
        <Modal formik={formik} />
      </RightSidebar>
    </>
  )
}

export default Period

export const HeaderTable = ({
  title,
  buttonTitle,
  onClick
}: {
  title: string
  buttonTitle: string
  onClick: () => void
}) => {
  return (
    <div className="flex xs:items-center justify-between pr-2 xs:flex-row flex-col">
      <h1 className="font-bold">{title}</h1>
      <button
        onClick={onClick}
        className="flex gap-1 items-center text-sm bg-blue-500 text-white px-3 py-2 rounded-sm font-medium hover:bg-blue-600 w-28 justify-center">
        <span>{buttonTitle}</span>
      </button>
    </div>
  )
}

const Modal = ({ formik }: { formik: any }) => {
  return (
    <form>
      <Input
        name="name"
        label="Nombre"
        placeholder="Nombre"
        type="text"
        autoFocus
        onChange={formik.handleChange}
        error={formik.errors.name}
        value={formik.values.name}
      />
    </form>
  )
}
