import React from 'react'
import NavBar from './NavBar'

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}
