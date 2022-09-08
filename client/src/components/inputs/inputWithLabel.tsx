import { useState } from 'react'
import Icon from '../icons'
import EyeClose from '../icons/eye-close'
import EyeOpen from '../icons/eye-open'

interface InputProps {
  type: string
  name: string
  placeholder: string
  styles?: string
  containerStyles?: string
  label: string
  error?: string
  [key: string]: any
}

const Input = ({
  name,
  label,
  placeholder,
  type = 'text',
  styles,
  containerStyles,
  error,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(type)
  return (
    <div className={`flex flex-col my-2 w-full ${containerStyles ?? ''}`}>
      <label htmlFor={name} className="text-lg font-semibold">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`border border-placeholder px-4 py-1.5 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-page focus:border-transparent ${
            styles ?? ''
          } w-full`}
          {...props}
        />
        {error && <span className="text-error text-sm">{error}</span>}
        {name === 'password' && (
          <button
            type="button"
            onClick={() => {
              setInputType(inputType === 'text' ? 'password' : 'text')
            }}>
            <Icon
              viewBox="30 30"
              width={25}
              height={25}
              fill="black"
              className="absolute top-1.5 right-3">
              {inputType === 'text' ? <EyeOpen /> : <EyeClose />}
            </Icon>
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
