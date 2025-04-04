"use client"

/*
import { useContext, createContext, useState, ReactNode } from 'react'

interface SidebarProviderParams {
    children: ReactNode;
}

interface SidebarContextType {
    isSidebarOpen: boolean;
    setIsSidebarOpen: setBoolean | (()=>void);
    
}

export const SidebarContext = createContext<SidebarContextType>({
    isSidebarOpen: true,
    setIsSidebarOpen: ()=>{}

})


export default function SidebarProvider({ children } : SidebarProviderParams){
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

    return(
        <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    )
}

export function useSidebar(){
    const context = useContext(SidebarContext)
    if(!context){
        throw new Error("contexto do sidebar não foi passado no provedor")
    }

    return context
}
    */