import { Button } from "@/components/ui/button"
import prisma from "@/lib/prisma"
import { resumeDataInclude } from "@/lib/types"
import { auth } from "@clerk/nextjs/server"
import { Plus } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import ResumeItem from "./ResumeItem"
import Image from "next/image"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard for managing resumes.',
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* <ResumeEditorHeader
          isSaving={isSaving}
          ShowSmResumePreview={ShowSmResumePreview}
          setShowSmResumePreview={setShowSmResumePreview}
        /> */}
        
      <main className="p-8 flex h-full">
       {children}
      </main>

         
      </SidebarInset>
    </SidebarProvider>
  )

  
  
  // return (
  //   <main className="flex flex-col items-center justify-center gap-4 p-4">
  //   <main className="p-8 flex ">
  //     <div className="w-[26rem] h-full"></div>
  //     <div className="pt-20">
  //     <div className='flex items-center gap-2 mb-4'>
  //      <Image className="" src='/wave.png' alt='' width='22' height='22' />
  //      <h1>Hi, Ademola</h1>
       
  //     </div>

      
  //     <Button asChild className="rounded-lg mb-12" size="lg">
  //       <Link href="/editor" className="py-6">
  //        <Plus className="size-[1.6rem] mt-[-.2rem]" strokeWidth={1.5} />
  //        <span className="text-lg relative right-1">Create New Resume</span>
  //       </Link>
  //     </Button>

  //     <div className="space-y-1">
  //       <h1 className="text-2xl mb-6">Your Resumes: {totalCount}</h1>
  //     </div>
  //     <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-6">
  //       {resumes.map((resume) => (
  //         <ResumeItem key={resume.id} resume={resume} />
  //       ))}
  //     </div>
  //     </div>
  //   </main>
  // )
}
