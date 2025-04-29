"use client"

import InputFormCadastro from "../ui-kratos/input-form-cadastro";
import { useEffect, useState } from "react";

import localFont from 'next/font/local'
import { useRouter } from "next/navigation";
import getRandomName from "@/utils/getRandomName";
import { cadastrar, getUserInfoByLogin, login } from "@/api_calls/auth";
import { useTheme } from "next-themes";
import { RiErrorWarningFill } from "react-icons/ri";
const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })

/*

    interface User {
        id?: string;
        login: string;
        nome: string;
        email: string;
        telefone: string;
        papel: Papeis;

    }

*/


export default function CadastrarForm(){
    const router = useRouter()
    const { theme }  = useTheme()


    const [nomeCompleto, setNomeCompleto] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [randomName, setRandomName] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        setRandomName(getRandomName())
    }, [])

    function verifyInputs(){
        const isValid = !(
            nomeCompleto.length > 0 &&
            username.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            email.length > 0 &&
            telefone.length > 0 && 
            (password === confirmPassword)
        )

        return isValid
    }

    async function handleClickLoginButton(){
        if(verifyInputs()){
            setError("Informações inválidas")
            setTimeout(()=>{
                setError("")
            }, 5000)
            return
        }

        const cadastrou = await cadastrar(nomeCompleto, telefone, email, username, password)
        if(cadastrou){
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
            } else {
                setError("Erro ao logar, verifique o status do servidor")    
                setTimeout(()=>{
                    setError("")
                }, 5000)
        
            }
        } else{
            setError("Erro ao cadastrar, verifique se as informações estão corretas")    
            setTimeout(()=>{
                setError("")
            }, 5000)
        }

    }

    return(
        <div className={`${theme === "dark" ? "bg-neutral-900" :"bg-white"} flex flex-col w-1/2 h-screen justify-center items-center gap-5 relative`}>

            <div className="w-2/3 my-5">
                <h1 className={`text-6xl font-bold tracking-tighter text-blue-400}`}>Cadastrar-se</h1>
            </div>

            <div className="flex flex-col w-full gap-4 text-2xl">
                <InputFormCadastro 
                    titulo="Nome Completo"
                    placeholder="João Silva"
                    tipoInput="text"
                    setInput={setNomeCompleto}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-900"} py-2 text-lg `}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}
                />

                <InputFormCadastro 
                    titulo="Telefone"
                    placeholder="(84) 99999-9999"
                    tipoInput="text"
                    setInput={setTelefone}
                    maskType="telefone"
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}

                />
                            
                <InputFormCadastro 
                    titulo="Email"
                    placeholder="email@email.com"
                    tipoInput="email"
                    setInput={setEmail}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}

                />


                <InputFormCadastro 
                    titulo="Login"
                    placeholder={randomName || "..."}
                    tipoInput="text"
                    setInput={setUsername}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}

                    />

                <InputFormCadastro 
                    titulo="Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setPassword}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}

                />
                <InputFormCadastro 
                    titulo="Confirmar Senha"
                    placeholder="********"
                    tipoInput="password"
                    showPassword
                    setInput={setConfirmPassword}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} ${theme === "dark" ? "text-white border-white" : "text-neutral-900 border-neutral-700"} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={`${theme === "dark" ? "text-white" : "text-neutral-700"} text-xl `}
                    addStylePlaceholder={`font-semibold ${theme === "dark" ? "placeholder:text-neutral-300" : "placeholder:text-neutral-500"} `}

                />

                <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <button className={` w-2/3 p-3 rounded-sm cursor-pointer hover:opacity-85 bg-blue-400 text-white`}
                    onClick={handleClickLoginButton}
                    >Cadastrar</button>
                    <p onClick={()=>{router.push("/login")}} className={`${gothamLight.className} text-blue-400 font-semibold text-center text-sm hover:underline cursor-pointer `}>Já tenho uma conta</p>
                </div>

                <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${error.length > 0 ? "opacity-100": "opacity-0"} ${theme === "dark" ? "text-black bg-white" : "text-white bg-black"} w-1/3 self-center text-center text-lg font-semibold flex justify-center items-center gap-2 p-2 rounded-sm transition-all`}>
                    <RiErrorWarningFill className="" />
                    <p className="">{error.length > 0 ? error : "Usuário ou senha incorretos!"}</p>
                </div>

            </div>

        </div>
    )
}