import { UseFormRegister, Path, FieldValues } from 'react-hook-form'

interface InputProps<T extends FieldValues> {
  type: 'text' | 'checkbox' | 'password' | 'number'
  id: Path<T>
  placeholder: string | undefined
  className?: string
  register: UseFormRegister<T>
}

function Input<T extends FieldValues>({
  id,
  type,
  placeholder,
  className,
  register,
}: InputProps<T>) {
  return (
    <input
      id={String(id)}
      placeholder={placeholder}
      className={`w-full border-gray-400 border rounded-md py-2 px-3 outline-primary bg-transparent ${className}`}
      type={type}
      {...register(id, type === 'number' ? { valueAsNumber: true } : {})}
    />
  )
}

export default Input
