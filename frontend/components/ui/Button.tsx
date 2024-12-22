import React from 'react'

interface ButtonProps {
  type: 'button' | 'reset' | 'submit'
  label: string
  className?: string
  isSubmitting?: boolean
  onClick?: () => void
}

function Button({
  type,
  label,
  className,
  isSubmitting = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`text-center text-white font-semibold text-lg bg-primary hover:bg-primary-hover w-full py-2 rounded-md transition-all duration-400 disabled:bg-gray-500 disabled:cursor-not-allowed ${className}`}
      disabled={isSubmitting}
      onClick={onClick}
    >
      {isSubmitting ? 'Loading...' : label}
    </button>
  )
}

export default Button
