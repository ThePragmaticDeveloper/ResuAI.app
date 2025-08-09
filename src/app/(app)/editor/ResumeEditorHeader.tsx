import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useState } from 'react'
import TitleForm from './forms/TitleForm'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { FileUserIcon, Loader2, PenLineIcon } from 'lucide-react'



interface ResumeEditorHeaderProps {
  isSaving: boolean;
  ShowSmResumePreview: boolean;
  setShowSmResumePreview: (value: boolean) => void
}

export default function ResumeEditorHeader({isSaving, ShowSmResumePreview, setShowSmResumePreview}: ResumeEditorHeaderProps) {

  
  return (
    <header className="flex h-12 shrink-0 items-center justify-between transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-1 pl-12">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-1 data-[orientation=vertical]:h-4"
        />
        {/* <TitleForm /> */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          title={ShowSmResumePreview ? "Hide Resume Preview" : "Show Resume Preview"}
          onClick={() => setShowSmResumePreview(!ShowSmResumePreview)}
        >
          {ShowSmResumePreview ? <PenLineIcon /> : <FileUserIcon />}
        </Button>
        {isSaving && (
          <div className='flex items-center gap-1'>
            <Loader2 className="animate-spin ml-2 h-6 w-6" />
            <p className="text-lg font-normal relative top-0.5">Saving...</p>
          </div>
        )}
    
        {/* <Breadcrumb>
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
        </Breadcrumb> */}
      </div>
    </header>
  )
}
