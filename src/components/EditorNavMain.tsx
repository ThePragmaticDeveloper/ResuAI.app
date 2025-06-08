"use client"

import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { steps } from "@/app/(app)/editor/steps";
import { NavMainProps } from "./app-sidebar";
import { ChevronRight } from "lucide-react";

export function EditorNavMain({currentStep, setCurrentStep}: NavMainProps) {


  return (
    <SidebarGroup>
      <SidebarMenu>
        {steps.map((step) => (
          <Collapsible
            key={step.key}
            asChild
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                 tooltip={step.title}
                 className={`py-6 px-3 rounded-lg ${currentStep === step.key ? "activeSidebarBtn" : ""}`}
                 onClick={() => setCurrentStep(step.key)}
                 >
                  
                  {step.imgUrl && (
                    <img
                      src={step.imgUrl}
                      alt={step.title}
                      width='16'
                      height='16'
                      className=""
                    />
                  )}
                  <span className="text-xl">{step.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
