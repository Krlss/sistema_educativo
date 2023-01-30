import Icon from '../../components/icons'
import Edit from '../../components/icons/edit'
import Trash from '../../components/icons/trash'

const Actions = ({
  onClick,
  onDelete
}: {
  onClick: () => void
  onDelete: () => void
}) => {
  return (
    <div className="flex justify-center gap-2 mr-2">
      <button className="group hover:text-blue-500" onClick={onClick}>
        <Icon
          viewBox="16 16"
          className="group-hover:fill-current group-hover:text-blue-500">
          <Edit />
        </Icon>
      </button>
      {/* <button className="group hover:text-red-500" onClick={onDelete}>
        <Icon
          viewBox="16 16"
          className="group-hover:fill-current group-hover:text-red-500">
          <Trash />
        </Icon>
      </button> */}
    </div>
  )
}

export default Actions
