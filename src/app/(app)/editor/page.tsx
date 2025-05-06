import { Metadata } from 'next'
import ResumeEditor from './ResumeEditor';
// import ResumeEditor from './ResumeEditor'

export const metadata: Metadata = {
  title: 'Design Your Resume',
  description: 'Design your resume with our easy-to-use editor.',
}

// app/editor/page.tsx

export const dynamic = "force-dynamic"; // ✅ prevents static optimization

// import ResumeEditor from "./ResumeEditor";

export default function ResumeEditorPage() {
  return <ResumeEditor />;
}

