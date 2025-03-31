import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'
 
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
      <html lang="pt-br">
        <body className={`${gothamBlack.className} antialiased`}>
          
          {children}

        </body>
      </html>
    
  );
}
