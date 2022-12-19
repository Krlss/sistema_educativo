import React, { useContext } from 'react'
import GeneralContext from '../../contexts/context'

const Radio = ({
  name,
  value,
  onChange,
  correct,
  label
}: {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  correct?: boolean
  label?: string
}) => {
  const { gameState } = useContext(GeneralContext)

  console.log({ correct })

  return (
    <div className="flex flex-row items-center justify-center">
      <input
        type="radio"
        name={name}
        id={value}
        value={value}
        onChange={onChange}
        disabled={gameState.next}
        className={`appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 bg-white ${
          !gameState.next && 'cursor-pointer'
        }  ${
          correct && gameState.next
            ? 'checked:bg-blue-600'
            : !correct && gameState.next
            ? 'checked:bg-red-logo-stronger'
            : ''
        }`}
      />
      {label && (
        <label
          className={`ml-2 ${!gameState.next && 'cursor-pointer'}`}
          htmlFor={value}>
          {label}
        </label>
      )}
    </div>
  )
}
export default Radio
