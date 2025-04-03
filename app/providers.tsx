"use client"

import { ThemeProvider } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'


interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children } : ProvidersProps){
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
        setMounted(true)
    })

    if(!mounted){
        return <>{children}</>
    }
    
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}