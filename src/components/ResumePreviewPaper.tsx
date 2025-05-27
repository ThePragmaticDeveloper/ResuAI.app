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
     className={cn("bg-white h-fit w-full aspect-[210/297]", className)}
    >
      <div
        className={cn("space-y-10 py-12 px-24 text-[#1a1a1a] font-medium", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        // ref={contentRef}
        id="resumePreviewContent"
      >
       <PersonalInfoHeader resumeData={resumeData} />
       <SummarySection resumeData={resumeData} />
        {/* Add more sections as needed */}
        {/* Example: */}
        {/* <ExperienceSection resumeData={resumeData} /> */}
        {/* <EducationSection resumeData={resumeData} /> */}
        {/* <SkillsSection resumeData={resumeData} /> */}
  
        {/* Uncomment to test responsive text size */}
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
    <div className="flex items-center gap-6 justify-center pt-6">
      <div className="space-y-1">
        <p className="text-5xl text-center">
          {firstName} {lastName}
        </p>
        <div className="flex items-center gap-2">
        <p className="text-2xl">
          {jobTitle}
        </p>
        <p className="text-2xl">
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

function SummarySection({ resumeData }: ResumeSectionProps) {
  const { summary } = resumeData;

  if (!summary) return null;

  return (
    <div className="break-inside-avoid space-y-1">
      <p className="text-3xl">
        Professional Summary
      </p>
      <hr className="border-1 mb-3" />
      <div className="whitespace-pre-line text-2xl">{summary}</div>
    </div>
  );
}
