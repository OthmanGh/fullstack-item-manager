'use client'

import { useEffect, useState, Suspense } from 'react'
import BackButton from '@/components/ui/BackButton'
import CustomForm from '@/components/ui/CustomForm'
import { useSearchParams } from 'next/navigation'

function EditItem() {
  const searchParams = useSearchParams()
  const itemParam = searchParams.get('item')
  const [item, setItem] = useState(null)

  useEffect(() => {
    if (itemParam) {
      try {
        setItem(JSON.parse(itemParam))
      } catch (e) {
        console.error('Failed to parse item data:', e)
      }
    }
  }, [itemParam])

  if (!item) {
    return (
      <div className='text-gray-500 text-center my-10'>
        No item data available.
      </div>
    )
  }

  const { id } = item

  return (
    <div className='sm:mx-10 mx-2 mt-10'>
      <BackButton />
      <section className='bg-white max-w-[650px] mx-auto shadow-sm sm:p-10 p-4 rounded-md'>
        <h1 className='text-2xl font-bold text-center mb-4'>Edit Item</h1>
        <CustomForm
          initialState={item}
          endpoint={`/items/${id}`}
          action='put'
        />
      </section>
    </div>
  )
}

export default function EditItemWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditItem />
    </Suspense>
  )
}
