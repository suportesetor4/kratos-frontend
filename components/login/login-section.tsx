import { useTheme } from "next-themes"

export default function LoginSection(){
    const { theme }  = useTheme()

    return(
        <div className={`w-1/2 h-screen ${theme === "dark" ? "bg-black" :"bg-white"}`}>

        </div>
    )
}