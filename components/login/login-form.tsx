"use client"

import InputFormCadastro from "../ui-kratos/input-form-cadastro";
import { useEffect, useState } from "react";

import localFont from 'next/font/local'
import { useRouter } from "next/navigation";
import getRandomName from "@/utils/getRandomName";
import { getUserInfoByLogin, login } from "@/api_calls/auth";
import { useTheme } from "next-themes";
import { RiErrorWarningFill } from "react-icons/ri";
import { useUser } from "@/contexts/UserContext";
const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })



export default function LoginForm(){
    const router = useRouter()
    const { theme }  = useTheme()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [randomName, setRandomName] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        setRandomName(getRandomName())
    }, [])


    async function handleClickLoginButton(){
        const logou = await login(username, password)
        if(logou){

            const dadosUsuario = await getUserInfoByLogin(username, password)
            if(!dadosUsuario){
                setError("Erro ao buscar dados do usuário")    
                setTimeout(()=>{
                    setError("")
                }, 5000)

                return
            }

            
            router.push("/")
        } else{
            setError("Usuário ou senha incorretos!")    
            setTimeout(()=>{
                setError("")
            }, 5000)
        }

    }

    return(
        <div className={`${theme === "dark" ? "bg-neutral-900" :"bg-white"} flex flex-col w-1/2 h-screen justify-center items-center gap-5 relative`}>

            <div className="w-2/3 my-5">
                <h1 className={`text-6xl font-bold tracking-tighter  text-transparent bg-clip-text ${theme === "dark" ? "bg-red-800" : "bg-red-900 "}`}>KRATOS</h1>
            </div>

            <div className="flex flex-col w-full gap-4 text-2xl">
                <InputFormCadastro 
                    titulo="Usuário"
                    placeholder={randomName || "..."}
                    tipoInput="text"
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-700 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}
                    />
                <InputFormCadastro 
                    titulo="Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setPassword}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-700 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}
                />

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <button className={` w-2/3 p-3 rounded-sm cursor-pointer hover:opacity-85 bg-red-900 text-white`}
                    onClick={handleClickLoginButton}
                    >Login</button>
                    <p className={`${gothamLight.className} ${theme === "dark" ? "text-white" : "text-red-900 "} font-semibold text-center text-sm hover:underline cursor-pointer `}>Esqueceu a senha?</p>
                    <p onClick={()=>{router.push("/cadastrar")}} className={`${gothamLight.className} ${theme === "dark" ? "text-white" : "text-red-900 "} font-semibold text-center text-sm hover:underline cursor-pointer `}>Registrar-se</p>
                </div>

                <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${error.length > 0 ? "opacity-100": "opacity-0"} ${theme === "dark" ? "text-black bg-white" : "text-white bg-black"} w-1/3 self-center text-center text-lg font-semibold flex justify-center items-center gap-2 p-2 rounded-sm transition-all`}>
                    <RiErrorWarningFill className="" />
                    <p className="">{error.length > 0 ? error : "Usuário ou senha incorretos!"}</p>
                </div>

            </div>

        </div>
    )
}