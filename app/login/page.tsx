import LoginForm from "@/components/login/login-form";
import { Fira_Sans } from "next/font/google";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Login(){
    return(
        <div className={`${fira_sans.className} w-screen h-screen flex flex-col items-center justify-center gap-2`}>
            <LoginForm />
            <button className="bg-red-900 w-1/2 p-3 rounded-sm cursor-pointer hover:opacity-85">Registrar-se</button>
        </div>
    )
}