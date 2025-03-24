"use client"

import { Fira_Sans } from "next/font/google"
import InputFormCadastro from "../ui/input-form-cadastro";
import { useEffect, useState } from "react";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400"]
});

function getRandomName(){
    const names = [
        "cleberson", 
        "elson", 
        "santos", 
        "esdras",
        "victor",
        "fabio", 
        "manoel", 
        "aunibson", 
        "linhares", 
        "gabriel", 
        "polese",
        "brenda",
        "lucas",
        "luisa",
        "whalyson",
        "daniel",
    ]

    const randomNumber = Math.floor(Math.random() * names.length) - 1

    return names[randomNumber]
}

export default function LoginForm(){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [randomName, setRandomName] = useState("")

    useEffect(() => {
        setRandomName(getRandomName())
    }, [])

    return(
        <div className={`${fira_sans.className} flex flex-col gap-10 w-1/2 h-1/2 rounded-sm bg-neutral-800 shadow`}>

            <div className="h-1/12">
                <h1 className="mt-5 text-4xl text-center text-white bg-clip-text">Kratos</h1>
            </div>

            <div className="h-11/12 flex flex-col justify-center items-center gap-8 border-t border-neutral-700">
                <InputFormCadastro 
                    titulo="Usuário"
                    placeholder={randomName || "..."}
                    tipoInput="text"
                    setInput={setUsername}
                    addStyleMain="w-4/5 self-center"
                    addStyleDivInput="text-white"
                    />
                <InputFormCadastro 
                    titulo="Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setUsername}
                    addStyleMain="w-4/5 self-center"
                    addStyleDivInput="text-white"

                />

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <button className="bg-red-900 w-4/5 p-3 rounded-sm cursor-pointer hover:opacity-85">Login</button>
                    <p className="text-sm hover:underline cursor-pointer">Esqueceu a senha?</p>
                </div>

            </div>

        </div>
    )
}