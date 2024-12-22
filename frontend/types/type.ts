import { ItemFormData } from '@/utils/zod'
import { Dispatch, SetStateAction } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

export interface AuthProps {
  username: string
  password: string
}

export interface InputProps {
  type: string
  id: 'username' | 'password' | 'name' | 'category' | 'price'
  placeholder: string
  className?: string
  register: UseFormRegister<AuthProps> | UseFormRegister<ItemProps>
}

export interface ModalState {
  state: boolean
  id: string
}

export interface DeleteItemModalProps {
  setIsOpenDeleteModal: Dispatch<SetStateAction<ModalState>>
  isOpenDeleteModal: ModalState
  removeItem: (id: string) => void
}

export interface CustomFormProps {
  initialState: ItemFormData
  endpoint: string
  action: 'post' | 'put'
}

export interface ItemProps {
  name: string
  price: number
  description: string
  category: string
  inStock: boolean
  id: string
  createdAt: string
  updatedAt: string | null
}

export interface RenderFieldProps {
  id: 'name' | 'description' | 'category' | 'price'
  type: 'text' | 'number' | 'checkbox' | 'textarea'
  labelText: string
  placeholder?: string | undefined
  error?: FieldError
  isRequired?: boolean
}
