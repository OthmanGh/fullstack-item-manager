'use client'
import React from 'react'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { CgLogOut } from 'react-icons/cg'

function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    destroyCookie(null, 'authToken', { path: '/' })
    router.push('/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className='hover:bg-primary hover:text-white rounded-md px-3 py-2 sm:px-4 sm:py-[10px] border-primary border-2 text-primary font-semibold transition-all duration-400 text-sm sm:text-lg flex items-center gap-2'
    >
      <CgLogOut />
      <span className='hidden sm:block'>Logout</span>
    </button>
  )
}

export default LogoutButton
