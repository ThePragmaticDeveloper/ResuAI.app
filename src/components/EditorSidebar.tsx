"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChevronLeft,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  // SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
// import { FaArrowLeftLong } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle"
import { EditorNavMain } from "./EditorNavMain"
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Personal Info",
      url: "#",
      imgUrl: '/user.png',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Summary",
      url: "#",
      imgUrl: '/writing_hand.png',
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Work Experience",
      url: "#",
      imgUrl: '/case.png',
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Education",
      url: "#",
      imgUrl: '/cap.png',
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
    {
      title: "Skills",
      url: "#",
      imgUrl: '/skills.png',
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export interface NavMainProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

type EditorSidebarProps = React.ComponentProps<typeof Sidebar> & NavMainProps

export function EditorSidebar({ currentStep, setCurrentStep, ...props }: EditorSidebarProps) {
  
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <div className="flex gap-2 items-center justify-between px-3 py-2.5 mb-6">
      <Link href='/' className='flex items-center gap-0.5'>
        <Image className="" src='/owl.png' alt='' width='26' height='26' />
        <span className='text-xl font-medium tracking-tight'>ResuAI</span>
      </Link>
      <Button asChild variant='link' className="rounded-xl ml-auto" size="sm">
        <Link href="/dashboard" className="py-5.5">
         <ChevronLeft className="size-[1.3rem] mt-[-.1rem] " />
         <span className="text-lg relative right-1 ">Dashboard</span>
        </Link>
      </Button>
      <ThemeToggle />
      </div>
      <SidebarContent>
        <EditorNavMain currentStep={currentStep} setCurrentStep={setCurrentStep} />
        {/* <NavMain currentStep={currentStep} setCurrentStep={setCurrentStep} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
