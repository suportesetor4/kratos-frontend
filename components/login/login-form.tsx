"use client"

import InputFormCadastro from "../ui-kratos/input-form-cadastro";
import { useEffect, useState } from "react";

import localFont from 'next/font/local'
import { useRouter } from "next/navigation";
import getRandomName from "@/utils/getRandomName";
import { login } from "@/api_calls/auth";
import { setAccessToken } from "@/utils/auth-functions";
import { useTheme } from "next-themes";
const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })



export default function LoginForm(){
    const router = useRouter()
    const { theme }  = useTheme()


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [randomName, setRandomName] = useState("")

    useEffect(() => {
        setRandomName(getRandomName())
    }, [])


    async function handleClickLoginButton(){
        //login(username, password)
        setAccessToken("token")
        router.push("/")
    }

    return(
        <div className={`${theme === "dark" ? "bg-black" :"bg-white"} flex flex-col w-1/2 h-screen justify-center items-center gap-5`}>

            <div className="w-2/3 my-5">
                <h1 className={`text-6xl font-bold tracking-tighter bg-red-900 text-transparent bg-clip-text`}>KRATOS</h1>
            </div>

            <div className="flex flex-col w-full gap-4 text-2xl">
                <InputFormCadastro 
                    titulo="Usuário"
                    placeholder={randomName || "..."}
                    tipoInput="text"
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white" : "text-neutral-700"} py-2 text-lg border-neutral-700 font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder="placeholder:text-neutral-700"
                    />
                <InputFormCadastro 
                    titulo="Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white" : "text-neutral-700"} py-2 text-lg border-neutral-700 font-semibold`}
                    addStyleDivTitle={`text-xl ${theme === "dark" ? "text-white" : "text-neutral-700"}`}
                    addStylePlaceholder="placeholder:text-neutral-700"


                />

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <button className={` w-2/3 p-3 rounded-sm cursor-pointer hover:opacity-85 bg-red-900 text-white`}
                    onClick={handleClickLoginButton}
                    >Login</button>
                    <p className={`${gothamLight.className} text-red-900 font-semibold text-center text-sm hover:underline cursor-pointer `}>Esqueceu a senha?</p>
                    <p className={`${gothamLight.className} text-red-900 font-semibold text-center text-sm hover:underline cursor-pointer `}>Registrar-se</p>

                </div>

            </div>

        </div>
    )
}