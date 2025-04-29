import { useTheme } from "next-themes"
import KratosLogo from '@/public/kratos-logo.png'
import Image from "next/image"

export default function LoginSection(){
    const { theme }  = useTheme()

    return(
        <div className={`w-1/2 h-screen flex justify-center items-center`}>
            {/* <Image 
                alt=""
                src={KratosLogo}
                
            /> */}
        </div>
    )
}