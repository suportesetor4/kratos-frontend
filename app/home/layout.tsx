import type { Metadata } from "next";

import localFont from 'next/font/local'
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Font files can be colocated inside of `pages`
const gothamXLight = localFont({ src: '../../fonts/gothamXLight.otf' })

export const metadata: Metadata = {
  title: "Kratos - Home",
  description: "Sistema de chamados do setor 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className={` `}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
