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
      url: "#",
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
    <Sidebar className={`text-black ${theme === "light" ? "text-black" : "text-white"} `} collapsible="icon" {...props}>
      <SidebarHeader>
        
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
      {state === "expanded"&&<button className="bg-gradient-to-r from-red-700 to-red-900 text-white p-2 rounded-sm cursor-pointer hover:from-red-600 hover:to-red-800">Novo Chamado</button>}
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
