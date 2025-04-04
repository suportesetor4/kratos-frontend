import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes";
 
// Font files can be colocated inside of `pages`
const gothamBlack = localFont({ src: '../fonts/gothamBlack.otf' })


export const metadata: Metadata = {
  title: "Kratos - Setor VI",
  description: "Sistema de chamados do setor 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br" data-theme="light">
        <body className={`${gothamBlack.className} antialiased`}>
          <ThemeProvider attribute={"data-theme"}>
            {children}
          </ThemeProvider>

        </body>
      </html>
    
  );
}
