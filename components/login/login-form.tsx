"use client"

import InputFormCadastro from "../ui/input-form-cadastro";
import { useEffect, useState } from "react";

import localFont from 'next/font/local'
import { useRouter } from "next/navigation";
import getRandomName from "@/utils/getRandomName";
const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })



export default function LoginForm(){
    const router = useRouter()

    async function login(){
        localStorage.setItem("access_token", "token")
        router.push("/")
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [randomName, setRandomName] = useState("")

    useEffect(() => {
        setRandomName(getRandomName())
    }, [])

    return(
        <div className={`bg-gray-200 flex flex-col w-1/2 h-screen justify-center items-center gap-5`}>

            <div className="w-2/3 my-5">
                <h1 className={`text-6xl font-bold tracking-tighter bg-gradient-to-r from-red-700 to-red-900 text-transparent bg-clip-text`}>KRATOS</h1>
            </div>

            <div className="flex flex-col w-full gap-4 text-2xl">
                <InputFormCadastro 
                    titulo="Usuário"
                    placeholder={randomName || "..."}
                    tipoInput="text"
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} text-white py-2 text-lg`}
                    addStyleDivTitle="text-xl"
                    />
                <InputFormCadastro 
                    titulo="Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} text-white py-2 text-lg`}
                    addStyleDivTitle="text-xl"


                />

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <button className="bg-gradient-to-r from-red-700 to-red-900 w-2/3 p-3 rounded-sm cursor-pointer hover:opacity-85 text-gray-200"
                    onClick={login}
                    >Login</button>
                    <p className={`${gothamLight.className} text-center text-sm hover:underline cursor-pointer `}>Esqueceu a senha?</p>
                    <p className={`${gothamLight.className} text-center text-sm hover:underline cursor-pointer `}>Registrar-se</p>

                </div>

            </div>

        </div>
    )
}