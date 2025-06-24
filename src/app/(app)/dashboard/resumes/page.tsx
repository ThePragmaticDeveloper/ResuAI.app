import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";
import { Plus, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ResumeItem from "../ResumeItem";


export default async function ResumesPage() {

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
    <div className="pt-16">
      <div className='flex items-center gap-2 mb-4'>
        <Image className="" src='/wave.png' alt='' width='22' height='22' />
        <h1>Hi, Ademola</h1>
        
      </div>

      
      {/* <Button asChild className="rounded-lg mb-12" size="lg">
        <Link href="/editor" className="py-6">
          <Plus className="size-[1.6rem] mt-[-.2rem]" strokeWidth={1.5} />
          <span className="text-lg relative right-1">Create New Resume</span>
        </Link>
      </Button> */}

      <Button className="py-5.5 rounded-lg mb-12">
        <Link href="/editor" className="flex items-center gap-1 text-lg">
        <PlusIcon className="size-[1.6rem] relative bottom-0.5" /> Create New Resume
        </Link>
      </Button>

      <div className="space-y-1">
        <h1 className="text-2xl mb-6">Your Resumes: {totalCount}</h1>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-6">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  )
}
