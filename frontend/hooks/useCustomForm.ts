import { CustomFormProps } from '@/types/type'
import api from '@/utils/api'
import { showToast } from '@/utils/toast'
import { ItemFormData, itemSchema } from '@/utils/zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

function useCustomForm({ initialState, endpoint, action }: CustomFormProps) {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<ItemFormData>({
    resolver: zodResolver(itemSchema),
    defaultValues: initialState,
  })

  const onSubmit = async (data: ItemFormData) => {
    try {
      const payload = {
        ...data,
        price: data.price,
      }

      if (action === 'put') {
        await api.put(endpoint, payload)
      } else {
        await api.post(endpoint, payload)
      }

      const successMessage =
        action === 'put'
          ? 'Item has been updated successfully.'
          : 'A new item has been created successfully.'

      showToast.success(successMessage)
      reset()
      router.push('/')
    } catch (error) {
      if (axios.isAxiosError(error))
        showToast.error(
          "We couldn't add item. Please check your internet connection or try again later."
        )

      setError('root', {
        message: `Failed to ${
          action === 'put' ? 'edit' : 'add'
        } item. Please try again.`,
      })
    }
  }

  return { handleSubmit, onSubmit, register, isSubmitting, errors, router }
}

export default useCustomForm
