"use client"

import { sendEmailForgotPassword } from "@/api_calls/auth"
import InputFormCadastro from "@/components/ui-kratos/input-form-cadastro"
import localFont from "next/font/local"
import { useRouter } from "next/navigation"
import { useState } from "react"

const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })

import success from '@/public/success.gif'
import Image from "next/image"
import { RiErrorWarningFill } from "react-icons/ri"

export default function EsqueceuSenha(){

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [emailEnviado, setEmailEnviado] = useState(false)
    const [error, setError] = useState("")

    async function handleSendEmail(){
        const response = await sendEmailForgotPassword(email)

        if(response){
            setEmailEnviado(true)
        } else{
            setError("Erro ao enviar email")
        }
    }

    return(
        <div className="flex items-center justify-end">
            {!emailEnviado&&<div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <h1 className={`w-2/3 mb-10 text-6xl font-bold tracking-tighter  text-transparent bg-clip-text bg-black`}>KRATOS</h1>
                <InputFormCadastro 
                    titulo="Usuário"
                    placeholder={"email@email.com"}
                    tipoInput="text"
                    setInput={setEmail}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={` text-xl `}
                    addStylePlaceholder={``}
                />

                <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85 bg-blue-400 text-white`}
                    onClick={handleSendEmail}
                >Enviar Email</button>
                
                <p onClick={()=>{
                        router.push("/login")
                    }} 
                    className={`${gothamLight.className} mt-2 text-blue-400 font-semibold text-center text-sm hover:underline cursor-pointer `}
                >Voltar para o início</p>
            </div>}
            {emailEnviado&&
            <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="flex gap-2 items-center justify-center text-6xl">Email Enviado <Image 
                        alt=""
                        src={success}
                        className=""
                    /></h1>            
                    <p className={`${gothamLight.className} mb-10`}>Verifique sua caixa de email em {email}</p>
                    
                </div>

                <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85 bg-green-600 text-white`}
                    onClick={()=>{
                        router.push("/login")
                    }}
                >Voltar para o início</button>
        </div>
            }

            <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${error.length > 0 ? "opacity-100": "opacity-0"} text-white bg-blackw-1/3 self-center text-center text-lg font-semibold flex justify-center items-center gap-2 p-2 rounded-sm transition-all`}>
                <RiErrorWarningFill className="" />
                <p className="">{error.length > 0 ? error : "Usuário ou senha incorretos!"}</p>
            </div>



        </div>
    )
}