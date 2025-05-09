"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator"
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
        <header className="flex h-16 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 gap-4 p-4 pt-0">
          <div className='overflow-y-auto md:w-[60rem] p-8.5'>
           {FormComponent && (
            <FormComponent
             resumeData={resumeData}
             setResumeData={setResumeData} 
            />
           )}
          </div>
          <div className='overflow-y-auto w-full p-10'>
            <pre>{JSON.stringify(resumeData, null, 2)}</pre>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



