import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import ClerkUserButton from "./ClerkUserButton";
import { LayoutDashboard, Plus } from "lucide-react";

export default function NavBar() {

  return (
    <header className='shadow-xs glass'>
    <div className='mx-auto p-2 px-9 flex justify-between items-center'>
      <Link href='/' className='flex items-center gap-0.5'>
        <Image className="" src='/owl.png' alt='' width='26' height='26' />
        <span className='text-xl font-medium tracking-tight'>ResuAI</span>
      </Link>

      <div className='flex items-center gap-4'>
      <Button asChild className="rounded-lg" size="lg">
        <Link href="/dashboard" className="py-5.5">
         <LayoutDashboard className="size-[1.3rem] mt-[-.2rem]" strokeWidth={1.2} />
         <span className="text-lg relative right-1">Dashboard</span>
        </Link>
      </Button>
      <ThemeToggle />
      <ClerkUserButton />
      </div>
    </div>
  </header>
  )
}
