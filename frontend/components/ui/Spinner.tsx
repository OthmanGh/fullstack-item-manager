import React from 'react'
import { HashLoader } from 'react-spinners'

function Spinner() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex_col gap-4 text-primary font-semibold'>
      <HashLoader color='#633CFF' />
      <span>Loading...</span>
    </div>
  )
}

export default Spinner
