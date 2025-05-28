"use client"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useSearchParams } from "next/navigation"
import { steps } from "./steps"
import { ResumeValues } from "@/lib/validation";
import { useState } from "react";
import ResumePreviewSection from "./ResumePreviewSection";
import ResumeEditorHeader from "./ResumeEditorHeader";


export default function ResumeEditor() {

  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || steps[0].key;

  const [resumeData, setResumeData] = useState<ResumeValues>({});

  const setCurrentStep = (key: string) => {
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('step', key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`)
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep
  )?.component;


  return (
    <SidebarProvider>
      <AppSidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <SidebarInset>
        <ResumeEditorHeader />
        <div className="flex flex-1 gap-4 p-4 pt-0">
          <div className='overflow-y-auto w-[40%] pt-8.5'>
           {FormComponent && (
            <FormComponent
             resumeData={resumeData}
             setResumeData={setResumeData} 
            />
           )}
           
          </div>
          <ResumePreviewSection
            resumeData={resumeData}
            setResumeData={setResumeData}
          />
          {/* <div className='overflow-y-auto w-full p-10'>
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



