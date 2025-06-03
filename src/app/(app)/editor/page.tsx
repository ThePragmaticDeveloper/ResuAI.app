import { Metadata } from 'next'
import ResumeEditor from './ResumeEditor';
import { auth } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';
// import ResumeEditor from './ResumeEditor'

export const metadata: Metadata = {
  title: 'Design Your Resume',
  description: 'Design your resume with our easy-to-use editor.',
}

interface PageProps {
  searchParams: Promise<{ resumeId?: string }>;
}

export const dynamic = "force-dynamic"; // ✅ prevents static optimization

// import ResumeEditor from "./ResumeEditor";

export default async function ResumeEditorPage({ searchParams }: PageProps) {
  const { resumeId } = await searchParams;
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  // const resumeToEdit = resumeId
  //   ? await prisma.resume.findUnique({
  //       where: { id: resumeId, userId },
  //       include: resumeDataInclude,
  //     })
  //   : null;

  // return <ResumeEditor resumeToEdit={resumeToEdit} />;
}

