"use client"

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'


interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children } : ProvidersProps){
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}