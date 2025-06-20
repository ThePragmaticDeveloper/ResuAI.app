import ResumePreviewPaper from "@/components/ResumePreviewPaper"
import { cn } from "@/lib/utils"
import { ResumeValues } from "@/lib/validation"

interface ResumePreviewSectionProps {
  resumeData: ResumeValues
  // setResumeData: (data: ResumeValues) => void
  className?: string
}

export default function ResumePreviewSection({resumeData, className}: ResumePreviewSectionProps) {
  
  
  return (
    <div
      className={cn("hidden overflow-y-auto w-full md:flex md:w-2/3 bg-container", className)}
    >
     <div className="flex w-full h-fit justify-center p-2 py-6">
        <ResumePreviewPaper
          resumeData={resumeData}
          className="shadow-md max-w-2xl"
        />
      </div>
    </div>
  )
}
