import * as React from 'react'

type TextFieldProps = {
  name: string
  value: string
  type: string
  label: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
}

const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  type,
  label,
  onChange,
  id,
}) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          id={name}
        />
      </label>
    </>
  )
}

export default TextField
