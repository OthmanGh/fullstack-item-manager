'use client'

import { CustomFormProps } from '@/types/type'
import Label from './Label'
import Input from './Input'
import Button from './Button'
import useCustomForm from '@/hooks/useCustomForm'
import { useEffect } from 'react'
import { showToast } from '@/utils/toast'
import { RenderFieldProps } from '@/types/type'
import { usePathname } from 'next/navigation'

function CustomForm({ initialState, endpoint, action }: CustomFormProps) {
  const pathname = usePathname()
  const { handleSubmit, onSubmit, register, isSubmitting, errors, router } =
    useCustomForm({ initialState, endpoint, action })

  const submitButtonText = pathname.includes('edit-item')
    ? 'Edit Item'
    : 'Add Item'

  console.log(submitButtonText)

  useEffect(() => {
    if (errors.root?.message) {
      showToast.error(errors.root.message)
    }
  }, [errors.root?.message])

  const renderField = ({
    id,
    type,
    labelText,
    placeholder,
    error,
    isRequired = true,
  }: RenderFieldProps) => {
    return (
      <fieldset className='flex_col gap-1'>
        <Label text={labelText} htmlFor={id} isRequired={isRequired} />
        {type === 'textarea' ? (
          <textarea
            id={id}
            {...register(id)}
            placeholder={placeholder}
            rows={3}
            cols={30}
            className='w-full border-gray-400 border rounded-md py-2 px-3 outline-primary bg-transparent'
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            register={register}
          />
        )}
        {error && <p className='text-red-500 text-sm'>{error.message}</p>}
      </fieldset>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex_col gap-6 bg-light-gray p-4 rounded-md'
    >
      {renderField({
        id: 'name',
        type: 'text',
        labelText: 'Name',
        placeholder: 'Enter item name',
        error: errors.name,
      })}

      {renderField({
        id: 'description',
        type: 'textarea',
        labelText: 'Description',
        placeholder: 'Enter item description',
        error: errors.description,
        isRequired: false,
      })}

      {renderField({
        id: 'category',
        type: 'text',
        labelText: 'Category',
        placeholder: 'Enter item category',
        error: errors.category,
      })}

      {renderField({
        id: 'price',
        type: 'number',
        labelText: 'Price',
        placeholder: 'Enter item price',
        error: errors.price,
      })}

      <fieldset className='flex items-center gap-2'>
        <input
          type='checkbox'
          id='inStock'
          {...register('inStock')}
          className='w-4 h-4'
        />
        <Label
          text='In Stock'
          htmlFor='inStock'
          className='!mb-0'
          isRequired={false}
        />
      </fieldset>

      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <Button
          type='submit'
          label={isSubmitting ? 'Adding...' : 'Add Item'}
          className='bg-primary text-white'
          isSubmitting={isSubmitting}
        />
        <Button
          type='button'
          label='Cancel'
          className='!bg-gray-500 hover:!bg-gray-400'
          onClick={() => router.push('/')}
        />
      </div>
    </form>
  )
}

export default CustomForm
