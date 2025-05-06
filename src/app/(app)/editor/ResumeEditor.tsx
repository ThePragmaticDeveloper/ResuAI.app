import { AppSidebar } from "@/components/app-sidebar"
import ThemeToggle from "@/components/ThemeToggle"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ArrowBigLeftDash, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import ClerkUserButton from "../ClerkUserButton"
import GeneralInfoForm from "./forms/GeneralInfoForm"
import PersonalInfoForm from "./forms/PersonalInfoForm"


export default function ResumeEditor() {
  return (
    <SidebarProvider>
      <AppSidebar className="" />
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

          <div className='flex items-center gap-4 px-4'>
           {/* <Button asChild className="rounded-xl bg-gradient" size="sm">
             <Link href="/dashboard" className="py-5.5 px-5">
              <ArrowBigLeftDash className="size-[1.3rem] mt-[-.1rem]" strokeWidth={1.2} />
              <span className="text-lg relative right-1">Dashboard</span>
             </Link>
           </Button> */}
           {/* <ThemeToggle /> */}
           {/* <ClerkUserButton /> */}
         </div>
        </header>
        <div className="flex flex-1 gap-4 p-4 pt-0">
          <div className='w-1/3 overflow-y-auto md:w-1/3 p-8.5'>
           <PersonalInfoForm />
          </div>
          <div className='w-2/3 overflow-y-auto md:w-2/3 p-10'></div>
        </div>


        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div> */}


      </SidebarInset>
    </SidebarProvider>
  )
}



