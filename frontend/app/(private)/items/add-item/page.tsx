'use client'
import React from 'react'
import CustomForm from '@/components/ui/CustomForm'

const initialState = {
  name: '',
  description: '',
  category: '',
  price: 0,
  inStock: true,
}

function AddItem() {
  return (
    <section className='bg-white max-w-[650px] mx-auto shadow-sm p-6'>
      <h1 className='text-2xl text-dark-grey font-semibold mb-6 text-center'>
        Add New Item
      </h1>

      <CustomForm initialState={initialState} endpoint='/items' action='post' />
    </section>
  )
}

export default AddItem
