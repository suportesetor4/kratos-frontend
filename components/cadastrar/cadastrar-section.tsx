import { useTheme } from "next-themes"

export default function CadastrarSection(){
    const { theme }  = useTheme()

    return(
        <div className={`w-1/2 h-screen ${theme === "dark" ? "bg-neutral-900" :"bg-white"}`}>

        </div>
    )
}