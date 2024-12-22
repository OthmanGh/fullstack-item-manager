import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

interface ItemCardProps {
  id: string
  name: string
  description: string
  price: number
  inStock: boolean
  category: string
  setIsOpenDeleteModal: Dispatch<SetStateAction<{ state: boolean; id: string }>>
}

function ItemCard({
  id,
  name,
  description,
  category,
  inStock,
  setIsOpenDeleteModal,
}: ItemCardProps) {
  return (
    <li
      className={`relative bg-light-gray p-6 rounded-lg flex_col gap-6 text-sm drop-shadow-sm transition-all duration-400 ${
        !inStock && 'cursor-not-allowed'
      }`}
    >
      <div className='flex_col gap-1'>
        <p className='text-dark-grey font-semibold text-lg'>{name}</p>
        <p className='text-[13px] text-gray-400'>
          {!description ? 'No description provided' : description}
        </p>
      </div>

      <p>
        <span className='bg-primary-light text-primary px-3 py-2 font-semibold text-sm rounded-lg'>
          {category}
        </span>
      </p>

      <Link
        href={`/items/${id}`}
        className='flex flex-row items-center gap-2 text-sm text-gray-400 hover:text-primary font-semibold self-end cursor-pointer transition-all duration-400'
      >
        <span>View Details</span>
        <IoIosArrowRoundForward className='self-center' />
      </Link>

      <IoClose
        className='block absolute right-5 text-xl text-gray-400 hover:text-primary cursor-pointer'
        onClick={() => setIsOpenDeleteModal({ state: true, id: id })}
      />

      {!inStock && (
        <>
          <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-primary text-lg z-20'>
            Out Of Stock
          </p>
          <div className='absolute top-0 left-0 right-0 bottom-0 bg-primary-light bg-opacity-70 z-10 rounded-lg'></div>
        </>
      )}
    </li>
  )
}

export default ItemCard
