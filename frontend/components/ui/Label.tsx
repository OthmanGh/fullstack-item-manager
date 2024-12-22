import React from 'react'

interface LabelProps {
  text: string
  htmlFor: string
  className?: string
  isRequired?: boolean
}

function Label({ text, htmlFor, className, isRequired = true }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-gray-600 text-md flex items-center gap-1 ${className}`}
    >
      <span>{text}</span>
      {isRequired && <span className='text-custom_red'>*</span>}
    </label>
  )
}

export default Label
