'use client'
import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'
import { TbSmartHome } from 'react-icons/tb'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { usePathname } from 'next/navigation'
import LogoutButton from '../ui/LogoutButton'

const navItemsList = [
  {
    path: '/',
    text: 'Home',
    icon: TbSmartHome,
    id: 'home',
  },

  {
    id: 'add-item',
    path: '/items/add-item',
    text: 'Add item',
    icon: IoIosAddCircleOutline,
  },
]

function Header() {
  const pathname = usePathname()

  if (pathname !== '/' && pathname !== '/items/add-item') {
    return null
  }

  return (
    <header className=' flex justify-between items-center w-full bg-white rounded-lg px-3 sm:px-6 py-4 mb-5 sm:mb-10 drop-shadow-sm gap-4'>
      <Logo />

      <ul className='flex flex-row items-center gap-3'>
        {navItemsList.map((item) => (
          <Link
            key={item.id}
            className={`flex items-center text-md gap-2 font-semibold cursor-pointer py-[10px] px-4 rounded-md transition-all duration-400 ${
              pathname === item.path
                ? 'bg-primary-light text-primary'
                : 'text-gray-400 hover:text-gray-500'
            }`}
            href={item.path}
          >
            <item.icon className='text-xl' />
            <p className='hidden sm:block'>{item.text}</p>
          </Link>
        ))}
      </ul>

      <LogoutButton />
    </header>
  )
}

export default Header
