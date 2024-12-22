import { useState } from 'react'
import Button from './Button'
import api from '@/utils/api'
import { DeleteItemModalProps } from '@/types/type'
import { showToast } from '@/utils/toast'

function DeleteItemModal({
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  removeItem,
}: DeleteItemModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cancelDelete = () => {
    setIsOpenDeleteModal({ state: false, id: '' })
  }

  const handleDeleteItem = async () => {
    setIsLoading(true)
    setError(null)
    try {
      await api.delete(`items/${isOpenDeleteModal.id}`)
      showToast.success('Item has been deleted successfully.')
      removeItem(isOpenDeleteModal.id)
      setIsOpenDeleteModal({ state: false, id: '' })
    } catch (err) {
      showToast.error(`${err}`)
      setError(`Failed to delete the item: ${err}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg flex_col gap-6 z-40 shadow-lg max-w-[400px] min-w-[270px]'>
      <div className='flex_col gap-4'>
        <h2 className='text-md sm:text-xl font-bold text-red-600'>
          ⚠️ Confirm Deletion
        </h2>
        <p className='text-dark-grey text-sm sm:text-lg'>
          Are you sure you want to delete this item?
          <br />
          This action cannot be undone.
        </p>
        {error && <p className='text-custom_red text-sm'>{error}</p>}
      </div>

      <div className='flex gap-4 items-center justify-end'>
        <Button
          type='button'
          className={`!bg-custom_red hover:!bg-red-400 text-white ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          label={isLoading ? 'Deleting...' : 'Delete'}
          onClick={handleDeleteItem}
          isSubmitting={isLoading}
        />
        <Button
          type='button'
          label='Cancel'
          className='!bg-gray-500 hover:!bg-gray-400'
          onClick={cancelDelete}
        />
      </div>
    </div>
  )
}

export default DeleteItemModal
