import { useContext } from 'react'
import GeneralContext from '../../contexts/context'

interface Props {
  label: string
  type: 'submit' | 'button'
  [key: string]: any
}

const Authbutton = ({ type, label }: Props) => {
  const { config } = useContext(GeneralContext)

  return (
    <button
      type={type}
      disabled={config.loading}
      className={`w-full bg-yellow-page text-white font-semibold py-2 rounded-md text-lg mt-4 ${
        config.loading && 'bg-yellow-page/70'
      }`}>
      {label}
    </button>
  )
}

export default Authbutton
