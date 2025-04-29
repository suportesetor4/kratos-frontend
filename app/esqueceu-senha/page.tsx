"use client"

import { sendEmailForgotPassword } from "@/api_calls/auth"
import InputFormCadastro from "@/components/ui-kratos/input-form-cadastro"
import localFont from "next/font/local"
import { useRouter } from "next/navigation"
import { useState } from "react"

const gothamLight = localFont({ src: '../../fonts/gothamXlight.otf' })

import success from '@/public/success.gif'
import loading from '@/public/loading.gif'

import Image from "next/image"
import { RiErrorWarningFill } from "react-icons/ri"



export default function EsqueceuSenha(){

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [emailEnviado, setEmailEnviado] = useState(false)
    const [error, setError] = useState("")
    const [sendingEmail, setSendingEmail] = useState(false)

    async function handleSendEmail(){
        setSendingEmail(true)
        const response = await sendEmailForgotPassword(email)

        if(response){
            setEmailEnviado(true)
            setSendingEmail(false)
        } else{
            setError("Email incorreto ou já enviado!")    
            setTimeout(()=>{
                setError("")
            }, 5000)
            setSendingEmail(false)
        }
    }

    return(
        <div className="flex items-center justify-end">
            {!emailEnviado&&!sendingEmail&&<div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <h1 className={`w-2/3 text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-black`}>Redefinir Senha</h1>
                <p className={`${gothamLight.className} mb-5 w-2/3 text-sm`}>Esqueceu a senha? Envie um email de recuperação para o email conectado a sua conta</p>
                <InputFormCadastro 
                    titulo="Email"
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
            {emailEnviado&&!sendingEmail&&
            <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h1 className="flex gap-2 items-center justify-center text-6xl">Email Enviado <Image 
                        alt=""
                        src={success}
                        className=""
                    /></h1>            
                    <p className={`${gothamLight.className} mb-5 text-sm`}>Verifique sua caixa de email em {email}</p>
                    
                </div>

                <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85 bg-blue-400 text-white`}
                    onClick={()=>{
                        router.push("/login")
                    }}
                >Voltar para o início</button>
            </div>
            }

            {sendingEmail&&
            <div className="h-screen flex flex-col items-center justify-center w-1/2">
                <h1 className={`w-2/3 text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-black`}>Redefinir Senha</h1>
                <p className={`${gothamLight.className} mb-5 w-2/3 text-sm`}>Esqueceu a senha? Envie um email de recuperação para o email conectado a sua conta</p>
                <Image 
                    alt=""
                    src={loading}
                />
            </div>
                
            }

            <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${error.length > 0 ? "opacity-100": "opacity-0"} text-white bg-black w-1/3 self-center text-center text-lg font-semibold flex justify-center items-center gap-2 p-2 rounded-sm transition-all`}>
                <RiErrorWarningFill className="" />
                <p className="">{error.length > 0 ? error : "Email incorreto ou já enviado!"}</p>
            </div>



        </div>
    )
}