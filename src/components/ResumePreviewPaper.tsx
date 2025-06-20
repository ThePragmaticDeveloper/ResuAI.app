import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils"
import { ResumeValues } from "@/lib/validation"
import { useRef } from "react";
import { formatDate } from "date-fns";

interface ResumePreviewPaperProps {
  resumeData: ResumeValues;
  contentRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export default function ResumePreviewPaper({resumeData, className, contentRef}: ResumePreviewPaperProps) {

  const containerRef = useRef<HTMLDivElement>(null); // ✅ Correct type
  const { width } = useDimensions(containerRef);


  return (
    <div
     ref={containerRef}
     className={cn("bg-white rounded-xs h-fit w-full aspect-[210/297]", className)}
    >
      <div
        className={cn("space-y-10 py-12 px-20 text-[#1a1a1a] font-medium", !width && "invisible")}
        style={{
          zoom: (1 / 794) * width,
        }}
        ref={contentRef}
        id="resumePreviewContent"
      >
       <PersonalInfoHeader resumeData={resumeData} />
       <SummarySection resumeData={resumeData} />
       <EducationSection resumeData={resumeData} />
       <WorkExperienceSection resumeData={resumeData} />
       <SkillsSection resumeData={resumeData} />
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
      <p className="text-3xl font-semibold">
        Professional Summary
      </p>
      <hr className="border-1 mb-3 border-gray-400" />
      <div className="whitespace-pre-line text-2xl pl-5">{summary}</div>
    </div>
  );
  
}

function WorkExperienceSection({ resumeData }: ResumeSectionProps) {
  const { workExperiences } = resumeData;

  const workExperiencesNotEmpty = workExperiences?.filter(
    (exp) => Object.values(exp).filter(Boolean).length > 0,
  );

  if (!workExperiencesNotEmpty?.length) return null;

  return (
      
      <div className="space-y-1">
        <p
          className="text-3xl font-semibold"
          
        >
          Work Experience
        </p>
        <hr className="border-1 mb-3 border-gray-400" />
        {workExperiencesNotEmpty.map((exp, index) => (
          <div key={index} className="break-inside-avoid mb-7 pl-5 space-y-1">
            <div
              className="flex items-center justify-between text-3xl"
              
            >
              <span>{exp.position}</span>
              {exp.startDate && (
                <span className="text-2xl">
                  {formatDate(exp.startDate, "MM/yyyy")} -{" "}
                  {exp.endDate ? formatDate(exp.endDate, "MM/yyyy") : "Present"}
                </span>
              )}
            </div>
            <p className="text-2xl">{exp.company}</p>
            <div className="whitespace-pre-line text-2xl pl-5">{exp.description}</div>
          </div>
        ))}
      </div>
  );
}

function EducationSection({ resumeData }: ResumeSectionProps) {
  const { educations } = resumeData;

  const educationsNotEmpty = educations?.filter(
    (edu) => Object.values(edu).filter(Boolean).length > 0,
  );

  if (!educationsNotEmpty?.length) return null;

  return (
      <div className="space-y-1">
        <p className="text-3xl font-semibold">
          Education
        </p>
        <hr className="border-1 mb-3 border-gray-400" />
        {educationsNotEmpty.map((edu, index) => (
          <div key={index} className="break-inside-avoid mb-7 pl-5 space-y-1">
            <div
              className="flex items-center justify-between text-3xl"
            >
              <span>{edu.degree}</span>
              {edu.startDate && (
                <span className="text-2xl">
                  {edu.startDate &&
                    `${formatDate(edu.startDate, "MM/yyyy")} ${edu.endDate ? `- ${formatDate(edu.endDate, "MM/yyyy")}` : ""}`}
                </span>
              )}
            </div>
            <p className="text-2xl">{edu.school}</p>
          </div>
        ))}
      </div>
  );
}

function SkillsSection({ resumeData }: ResumeSectionProps) {
  const { skills } = resumeData;

  if (!skills?.length) return null;

  return (
    <div className="break-inside-avoid space-y-1">
      <p className="text-3xl font-semibold">
        Skills
      </p>
      <hr className="border-1 mb-3 border-gray-400" />
      <div className="flex flex-wrap gap-2 pl-5 break-inside-avoid">
        <ul className="list-disc text-2xl">
          {skills.map((skill, index) => (
            <li key={index} className="mb-1">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
