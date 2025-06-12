
import { Metadata } from "next"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your dashboard for managing resumes.',
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {


  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* <ResumeEditorHeader
          isSaving={isSaving}
          ShowSmResumePreview={ShowSmResumePreview}
          setShowSmResumePreview={setShowSmResumePreview}
        /> */}
        
      <main className="p-8 flex h-full">
       {children}
      </main>

         
      </SidebarInset>
    </SidebarProvider>
  )

}
