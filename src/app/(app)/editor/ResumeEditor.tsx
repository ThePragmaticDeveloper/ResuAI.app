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
import { cn } from "@/lib/utils";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import useAutoSaveResume from "./useAutoSaveResume";
// import useAutoSaveResume from "./useAutosaveResume";


export default function ResumeEditor() {

  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || steps[0].key;

  
  const [resumeData, setResumeData] = useState<ResumeValues>({});
  const [ShowSmResumePreview, setShowSmResumePreview] = useState(false);

  const {isSaving, hasUnsavedChanges} = useAutoSaveResume(resumeData);
  // console.log("ResumeEditor Rendering.........")
  // console.log("hasUnsavedChanges", hasUnsavedChanges);
  useUnloadWarning(hasUnsavedChanges);

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
        <ResumeEditorHeader
          isSaving={isSaving}
          ShowSmResumePreview={ShowSmResumePreview}
          setShowSmResumePreview={setShowSmResumePreview}
        />
        <div className="flex flex-1 gap-28 justify-between px-12 overflow-y-auto">
          <div
           className={cn('overflow-y-auto md:w-1/2 w-full py-12', ShowSmResumePreview && "hidden")}
          //  className='overflow-y-auto md:w-1/3 w-full pt-8.5'
          >
           {FormComponent && (
            <FormComponent
             resumeData={resumeData}
             setResumeData={setResumeData} 
            />
           )}
           
          </div>
          <ResumePreviewSection
            resumeData={resumeData}
            className={cn( ShowSmResumePreview && "flex")}
            />
          {/* <div className='overflow-y-auto w-full p-10'>
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



