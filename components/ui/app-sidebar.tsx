"use client"

import * as React from "react"
import {
  Gauge,
  Menu,
} from "lucide-react"

// remove these components 
import { NavMain } from "@/components/ui/nav-main"
import { TeamSwitcher } from "@/components/ui/team-switcher"

import { NavProjects } from "@/components/ui/nav-projects"
import { NavUser } from "@/components/ui/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Usuário",
    email: "usuario@gmail.com",
    avatar: "/kratos.webp",
  },
  projects: [
    {
      name: "Painel",
      url: "#",
      icon: Gauge,
    },
    {
      name: "Visão Geral",
      url: "#",
      icon: Menu,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <button className="bg-gradient-to-r from-red-700 to-red-900 text-white p-2 rounded-sm cursor-pointer hover:from-red-600 hover:to-red-800">Novo Chamado</button>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
