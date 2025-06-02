import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { useState } from 'react'
import TitleForm from './forms/TitleForm'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { FileUserIcon, Loader2, PenLineIcon } from 'lucide-react'
import { cn } from '@/lib/utils'


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
        <TitleForm />
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          title={ShowSmResumePreview ? "Hide Resume Preview" : "Show Resume Preview"}
          onClick={() => setShowSmResumePreview(!ShowSmResumePreview)}
        >
          {ShowSmResumePreview ? <PenLineIcon /> : <FileUserIcon />}
        </Button>
        <p className={cn("text-muted-foreground opacity-0 text-lg font-normal", isSaving && "opacity-100")}>
          Saving...
          {/* {isSaving ? "Saving..." : "Ready"} */}
          {/* <Loader2 /> */}
        </p>

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
