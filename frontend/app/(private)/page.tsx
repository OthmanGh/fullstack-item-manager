'use client'

import { useState } from 'react'
import DeleteItemModal from '@/components/ui/DeleteItemModal'
import ItemCard from '@/components/ui/ItemCard'
import Overlay from '@/components/ui/Overlay'
import useFetchItems from '@/hooks/useFetchItems'
import Spinner from '@/components/ui/Spinner'
import { ItemProps, ModalState } from '@/types/type'
import Link from 'next/link'

function Home() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<ModalState>({
    state: false,
    id: '',
  })

  const { items, setItems, isLoading, error } =
    useFetchItems<ItemProps[]>('items')

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <div className='min-h-[60vh] flex items-center justify-center text-custom_red text-center my-10'>
        We couldn&apos;t load the items. Please check your internet connection
        or try again later.
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className='flex_col sm:text-xl gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 text-center my-10 font-semibold'>
        <span>No items found at the moment 😔</span>
        <Link href='/items/add-item' className='text-primary hover:underline'>
          Click here to create a new item
        </Link>
      </div>
    )
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <section className='flex_col gap-6'>
      <h1 className='text-2xl text-dark-grey font-semibold'>Product Items</h1>

      <ul className='relative bg-white px-6 py-8 grid  sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-sm rounded-md h-[75vh] sm:h-[64vh] overflow-y-scroll'>
        {!isLoading &&
          !error &&
          items.length > 0 &&
          items.map(({ id, name, description, category, price, inStock }) => (
            <ItemCard
              key={id}
              id={id}
              name={name}
              description={description}
              category={category}
              price={price}
              inStock={inStock}
              setIsOpenDeleteModal={setIsOpenDeleteModal}
            />
          ))}
      </ul>

      {isOpenDeleteModal.state && (
        <>
          <DeleteItemModal
            isOpenDeleteModal={isOpenDeleteModal}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            removeItem={removeItem}
          />
          <Overlay />
        </>
      )}
    </section>
  )
}

export default Home
