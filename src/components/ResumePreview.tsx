import { cn } from "@/lib/utils"
import { ResumeValues } from "@/lib/validation"

interface ResumePreviewProps {
  resumeData: ResumeValues
  className?: string
}

export default function ResumePreview({resumeData, className}: ResumePreviewProps) {


  return (
    <div className={cn("bg-[#f2f2f3] text-black h-fit w-full aspect-[210/297]", className)}>
      <h1 className="text-8xl font-bold text-center text-black">
        This text should change with the size of the container div
      </h1>
    </div>
  )
}
