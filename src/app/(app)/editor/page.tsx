import { Metadata } from 'next'
import ResumeEditor from './ResumeEditor'

export const metadata: Metadata = {
  title: 'Design Your Resume',
  description: 'Design your resume with our easy-to-use editor.',
}

export default function ResumeEditorPage() {
  return (
    <ResumeEditor />
  )
}
