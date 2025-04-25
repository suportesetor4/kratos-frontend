"use client"

import * as React from "react"
import {
  Gauge,
  Map,
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
  SidebarContext,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useTheme } from "next-themes"

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
      url: "/home",
      icon: Gauge,
    },
    {
      name: "Visão Geral",
      url: "#",
      icon: Menu,
    },
    {
      name: "Mapa do setor IV",
      url: "/home/mapa-setor-4",
      icon: Map,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const context = React.useContext(SidebarContext);

  if (!context) {
    throw new Error("Contexto da sidebar não foi carregado corretamente!");
  }

  const { state } = context;
  const { theme } = useTheme()

  return (
    <Sidebar className={`text-black `} collapsible="icon" {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
