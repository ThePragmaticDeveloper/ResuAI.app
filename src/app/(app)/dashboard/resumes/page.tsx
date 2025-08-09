// ./src/app/(app)/dashboard/resumes/page.tsx
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { resumeDataInclude, ResumeServerData } from "@/lib/types";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import ResumeItem from "../ResumeItem";

export default async function ResumesServerPage() {

  const {userId} = await auth();
  const user = await currentUser();

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

  const capitalizeFirstLetter = (str: string | null | undefined): string => {
    if (!str) {
      return '';
    }
  return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const userFirstName = capitalizeFirstLetter(user?.firstName) || 'Guest';

  return (
    <div className="pt-16">
      <div className='flex items-center gap-2 mb-4'>
        <Image className="" src='/wave.png' alt='' width='22' height='22' />
        <h1>Hi, {userFirstName}</h1>
      </div>
      <Button className="btn-gradient py-5.5 rounded-lg mb-12">
        <Link href="/editor" className="flex items-center gap-1 text-lg">
        Create New Resume
        </Link>
      </Button>

      {totalCount > 0 ? (
        <>
         <div className="space-y-1">
         <h1 className="text-2xl mb-6">Your Resumes: {totalCount}</h1>
          </div>
          <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-6">
            {resumes.map((resume: ResumeServerData) => (
              <ResumeItem key={resume.id} resume={resume} />
            ))}
          </div>
        </>
      ) : (
        <Image src='/resume-folder.svg' alt="My SVG" width={120} height={120} />
      )}
    </div>
  )
}
