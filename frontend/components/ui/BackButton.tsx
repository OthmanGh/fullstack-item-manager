'use client'
import { useRouter } from 'next/navigation'
import { IoIosArrowRoundBack } from 'react-icons/io'

function BackButton() {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className='flex flex-row items-center gap-2 hover:underline text-gray-500 hover:text-primary font-semibold mb-10'
    >
      <IoIosArrowRoundBack />
      <span>Go Back</span>
    </button>
  )
}

export default BackButton
