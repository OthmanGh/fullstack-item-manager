import Logo from '@/components/ui/Logo'
import React from 'react'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex flex-col items-center justify-center sm:gap-10 gap-6 min-h-screen'>
      <Logo />
      <main>{children}</main>
    </div>
  )
}
