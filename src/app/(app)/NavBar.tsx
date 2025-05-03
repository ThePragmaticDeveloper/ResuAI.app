import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ClerkUserButton from "./ClerkUserButton";
import { Plus } from "lucide-react";

export default function NavBar() {

  return (
    <header className='shadow-xs glass'>
    <div className='mx-auto p-2 px-9 flex justify-between items-center'>
      <Link href='/' className='flex items-center gap-0.5'>
        <Image className="" src='/owl.png' alt='' width='26' height='26' />
        <span className='text-xl font-medium tracking-tight'>ResuAI</span>
      </Link>

      <div className='flex items-center gap-4'>
      <Button asChild>
       <Link href="/dashboard" className="flex g-1 p-c py-6 px-4 rounded-xl shadow-lg">
        <Plus className="plus-icon" strokeWidth={1} />
        <span className="text-lg leading-tight">Dashboard</span>
       </Link>
      </Button>
      <ThemeToggle />
      <ClerkUserButton />
      </div>
    </div>
  </header>
  )
}
