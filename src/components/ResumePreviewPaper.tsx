import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils"
import { ResumeValues } from "@/lib/validation"
import { useRef } from "react";

interface ResumePreviewPaperProps {
  resumeData: ResumeValues
  className?: string
}

export default function ResumePreviewPaper({resumeData, className}: ResumePreviewPaperProps) {

  const containerRef = useRef<HTMLDivElement>(null); // ✅ Correct type
  const { width } = useDimensions(containerRef);


  return (
    <div
     ref={containerRef}
     className={cn("bg-white text-black h-fit w-full aspect-[210/297]", className)}
    >
      <div
        className={cn("space-y-6 p-6", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        // ref={contentRef}
        id="resumePreviewContent"
      >
      <h1 className="text-5xl font-bold text-center text-black">
        This text should change with the size of the container div
      </h1>
      </div>
    </div>
  )
}
