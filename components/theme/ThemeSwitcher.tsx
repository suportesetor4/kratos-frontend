"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

// exportar a função handleTheme no provider pra nao precisar criar ela sempre

export default function ThemeSwitcher(){
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(()=>{
        setMounted(true)
    }, [])

    if(!mounted){
        return null;
    }

    function handleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }else {
            setTheme("light")
        }
    }

    return(
        <div onClick={handleTheme} className={`${theme === "light" ? "bg-black text-white": "bg-yellow-500 text-white"} rounded-sm cursor-pointer p-2`}>
            {theme === "dark"&& <Sun />}
            {theme === "light"&& <Moon />}
        </div>
    )
}