import React from 'react'
const Radio = ({
  name,
  value,
  onChange
}: {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      className="appearance-none w-4 h-4 rounded-full checked:bg-yellow-page border-2 checked:border-0 cursor-pointer bg-white"
    />
  )
}
export default Radio
