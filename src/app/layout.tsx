'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { usePathname } from 'next/navigation'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import './globals.css'

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname()

  return (
    <html lang="en">
      <body className='flex items-center justify-center h-screen py-8 bg-slate-900'>
        <main className='relative flex items-center justify-center w-11/12 h-full overflow-hidden shadow-2xl shadow-gray-950 bg-zinc-200'>
          <QueryClientProvider client={queryClient}>
            {path !== '/' && <Navbar />}
            {children}
            <Sidebar />
          </QueryClientProvider>
        </main>
      </body>
    </html>
  )
}
