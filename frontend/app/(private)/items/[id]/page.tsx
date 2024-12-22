'use client'
import { useParams } from 'next/navigation'
import BackButton from '@/components/ui/BackButton'
import Link from 'next/link'
import useFetchSingleItem from '@/hooks/useFetchSingleItem'
import Spinner from '@/components/ui/Spinner'

function ItemDetails() {
  const params = useParams()
  const { id } = params
  const validId = typeof id === 'string' ? id : ''
  const { item, isLoading, error } = useFetchSingleItem('items', validId)

  if (!validId) {
    return (
      <div className='text-gray-500 text-center my-10'>
        Invalid item identifier.
      </div>
    )
  }

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <div className='text-custom_red text-center my-10'>{error}</div>
  }

  if (!item) {
    return (
      <div className='text-gray-500 text-center my-10'>Item not found.</div>
    )
  }

  const Field = (label: string, text: string | number | boolean) => {
    return (
      <p className='mb-2'>
        <span className='text-gray-600 font-bold'>{label}:</span>{' '}
        {typeof text === 'string' || typeof text === 'number' ? (
          <span>
            {typeof text === 'number' && '$'}
            {!text ? 'Not Provided' : text}
          </span>
        ) : text === true ? (
          <span>Yes</span>
        ) : (
          <span>No</span>
        )}
      </p>
    )
  }

  return (
    <div className='flex_col gap-10 my-10 mx-8'>
      <header className='flex items-center justify-between'>
        <BackButton />
        <Link
          href={{
            pathname: `/items/edit-item`,
            query: {
              item: JSON.stringify(item),
            },
          }}
          className='hover:bg-primary border-primary border-2 py-2 px-4 rounded-md text-primary font-semibold hover:text-white transition-all duration-400'
        >
          Edit Item
        </Link>
      </header>

      <main className='bg-white px-10 py-6 rounded-md shadow-sm'>
        <h2 className='text-2xl font-bold mb-4 text-primary'>{item.name}</h2>

        {Field('Price', item.price)}
        {Field('Description', item.description)}
        {Field('Category', item.category)}
        {Field('In Stock', item.inStock)}
        {Field('Created At:', new Date(item.createdAt).toLocaleDateString())}
        {item.updatedAt &&
          Field('Updated At:', new Date(item.updatedAt).toLocaleDateString())}
      </main>
    </div>
  )
}

export default ItemDetails
