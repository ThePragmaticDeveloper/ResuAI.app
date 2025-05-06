"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { steps } from "@/app/(app)/editor/steps";
import { set } from "zod";
import { useState } from "react";

interface NavMainProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export function NavMain({setCurrentStep}: {setCurrentStep: (key: string) => void}) {

  // const [currentStep, setCurrentStep] = useState("");

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {steps.map((step) => (
          <Collapsible
            key={step.key}
            asChild
            // defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                 tooltip={step.title}
                 className="py-5.5 px-3 rounded-lg"
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
