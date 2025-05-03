import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Dashboard'
}

export default function DashboardPage() {
  
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-4 pt-0">
      <h1>Dashboard</h1>
      <Button asChild className="rounded-lg" size="lg">
        <Link href="/editor" className="py-6">
         <Plus className="size-[1.6rem] mt-[-.2rem]" strokeWidth={1.5} />
         <span className="text-lg relative right-1">Create New Resume</span>
        </Link>
      </Button>
    </main>
  )
}
