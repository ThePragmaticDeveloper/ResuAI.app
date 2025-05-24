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
       <PersonalInfoHeader resumeData={resumeData} />
      {/* <h1 className="text-5xl font-bold text-center text-black">
        This text should change with the size of the container div
      </h1> */}
      </div>
    </div>
  )
}

interface ResumeSectionProps {
  resumeData: ResumeValues;
}

function PersonalInfoHeader({ resumeData }: ResumeSectionProps) {
  const {
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
  } = resumeData;

  return (
    <div className="flex items-center text-[#1a1a1a] gap-6 justify-center pt-6">
      <div className="space-y-1">
        <p className="text-5xl text-center">
          {firstName} {lastName}
        </p>
        <div className="flex items-center gap-2">
        <p className="text-2xl font-medium">
          {jobTitle}
        </p>
        <p className="text-2xl font-medium">
          {city}
          {city && country ? ", " : ""}
          {country}
          {(city || country) && (phone || email) ? " • " : ""}
          {[phone, email].filter(Boolean).join(" • ")}
        </p>
      </div>
      </div>
    </div>
  );
}
