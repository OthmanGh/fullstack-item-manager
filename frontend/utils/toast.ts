import { toast } from 'react-toastify'

export const showToast = {
  success: (message: string) =>
    toast.success(message, {
      theme: 'colored',
      position: 'top-right',
    }),

  error: (message: string) =>
    toast.error(message, {
      theme: 'colored',
      position: 'top-right',
    }),
}
