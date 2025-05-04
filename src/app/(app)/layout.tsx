import NavBar from './NavBar'

export default function AppLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* <NavBar /> */}
      {children}
    </div>
  )
}
