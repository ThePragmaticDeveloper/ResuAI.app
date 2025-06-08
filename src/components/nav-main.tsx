"use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  // CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { steps } from "@/app/(app)/editor/steps";
import { NavMainProps } from "./app-sidebar";
import { ChevronRight } from "lucide-react";
import { NavMainItems } from "@/app/(app)/dashboard/nav-main-items";

// interface NavMainProps {
//   currentStep: string;
//   setCurrentStep: (step: string) => void;
// }

// export function NavMain({currentStep, setCurrentStep}: NavMainProps) {
export function NavMain() {

  // const [currentStep, setCurrentStep] = useState("");

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {NavMainItems.map((item) => (
          <Collapsible
            key={item.key}
            asChild
            // defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                 tooltip={item.title}
                 className="py-6 px-3 rounded-lg"
                //  className={`py-6 px-3 rounded-lg ${currentStep === item.key ? "activeSidebarBtn" : ""}`}
                //  className={`py-5.5 px-3 rounded-lg ${currentStep === step.key ? "bg-primary text-primary-foreground" : ""}`}
                //  className="py-5.5 px-3 rounded-lg"
                //  onClick={() => setCurrentStep(item.key)}
                 >
                  
                  {item.imgUrl && (
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      width='16'
                      height='16'
                      className=""
                    />
                  )}
                  <span className="text-xl">{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {/* <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild className="py-5.5 px-3 rounded-lg">
                        <a href={subItem.url}>
                          <span className="text-lg">{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
