import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RestfulHive',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className='bg-light-gray'>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
