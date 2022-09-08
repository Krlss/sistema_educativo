interface Props {
  [key: string]: any
}
const RemenberMe = (Props: Props) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name="remember"
        id="remember"
        className="appearance-none w-4 h-4 rounded checked:bg-yellow-page border-2 checked:border-0"
        {...Props}
      />
      <label htmlFor="remember" className="ml-2">
        Recuérdame
      </label>
    </div>
  )
}

export default RemenberMe
