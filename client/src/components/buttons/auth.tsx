interface Props {
  label: string
  type: 'submit' | 'button'
  [key: string]: any
}

const Authbutton = ({ type, label }: Props) => {
  return (
    <button
      type={type}
      className="w-full bg-yellow-page text-white font-semibold py-2 rounded-md text-lg mt-4">
      {label}
    </button>
  )
}

export default Authbutton
