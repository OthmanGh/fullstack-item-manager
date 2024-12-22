import Header from '@/components/layout/Header'
import React from 'react'
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-2 my-4 sm:my-6 sm:mx-8'>
      <Header />
      <main>{children}</main>
    </div>
  )
}
