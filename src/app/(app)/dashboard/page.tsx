import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import { resumeDataInclude } from "@/lib/types"
import { auth } from "@clerk/nextjs/server"
import { Plus } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import ResumeItem from "./ResumeItem"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard for managing resumes.',
}

export default async function DashboardPage() {

  const {userId} = await auth();

  if(!userId) {
    return null;
  }

  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      include: resumeDataInclude,
    }),
    prisma.resume.count({ where: { userId } }),
  ])

  
  
  return (
    // <main className="flex flex-col items-center justify-center gap-4 p-4">
    <main className="p-8 flex ">
      <div className="w-[26rem] h-full"></div>
      <div className="pt-20">
      <h1>Dashboard</h1>
      <Button asChild className="rounded-lg mb-12" size="lg">
        <Link href="/editor" className="py-6">
         <Plus className="size-[1.6rem] mt-[-.2rem]" strokeWidth={1.5} />
         <span className="text-lg relative right-1">Create New Resume</span>
        </Link>
      </Button>

      <div className="space-y-1">
        <h1 className="text-2xl mb-6">Your Resumes: {totalCount}</h1>
      </div>
      {/* <div className="flex bb w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4"> */}
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-6">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
      </div>
    </main>
  )
}
