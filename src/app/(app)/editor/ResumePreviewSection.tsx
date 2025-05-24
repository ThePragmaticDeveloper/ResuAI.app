import ResumePreviewPaper from "@/components/ResumePreviewPaper"
import { cn } from "@/lib/utils"
import { ResumeValues } from "@/lib/validation"

interface ResumePreviewSectionProps {
  resumeData: ResumeValues
  setResumeData: (data: ResumeValues) => void
  className?: string
}

export default function ResumePreviewSection({resumeData, setResumeData, className}: ResumePreviewSectionProps) {
  
  
  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2 bg-container", className)}
    >
     <div className="flex w-full justify-center overflow-y-auto p-2">
        <ResumePreviewPaper
          resumeData={resumeData}
          className="max-w-2xl shadow-md"
        />
      </div>
    </div>
  )
}
