"use client"

import InputFormCadastro from "@/components/ui-kratos/input-form-cadastro"
import localFont from "next/font/local"
import { useEffect, useState } from "react"
import { RiErrorWarningFill } from "react-icons/ri"
import { useRouter, useSearchParams } from "next/navigation"
import { resetPassword, verifyEmailTokenStatus } from "@/api_calls/auth"
import Image from "next/image"
const gothamLight = localFont({ src: '../../../fonts/gothamXlight.otf' })

import ErrorIcon from '@/public/error.gif'
import loading from '@/public/loading.gif'
import success from '@/public/success.gif'


export default function Redifinir(){

    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const [error, setError] = useState("")
    const [novaSenha, setNovaSenha] = useState("")
    const [novaSenhaConfirmacao, setNovaSenhaConfirmacao] = useState("")
    
    const [verifyingToken, setVerifyingToken] = useState(true)
    const [tokenStatusOk, setTokenStatusOk] = useState(false)
    const [redefiniuSenha, setRedefiniuSenha] = useState(false)
    const [redefinindoSenhaLoading, setRedefinindoSenhaLoading] = useState(false)

    async function verifyToken(){
        if(token){
            setVerifyingToken(true)
            const isTokenValid = await verifyEmailTokenStatus(token)
            if(isTokenValid){
                setVerifyingToken(false)
                setTokenStatusOk(true)
            } else {
                setVerifyingToken(false)
                setTokenStatusOk(false)
            }
            

        }
    }

    useEffect(()=>{
        verifyToken()
    }, [])

    async function redefinirSenha(){
        if((novaSenha !== novaSenhaConfirmacao) || (novaSenha.length === 0 || novaSenhaConfirmacao.length === 0)){
            setError("As senhas não batem ou são vazias!")
            setTimeout(()=>{
                setError("")
            }, 5000)
        } else {
            setError("")
            setRedefinindoSenhaLoading(true)
            const response = await resetPassword(token || "", novaSenha)
            if(response){
                setRedefinindoSenhaLoading(false)
                setRedefiniuSenha(true)
            }
        }
    }

    return(
        <div className="flex items-center justify-end">
            {!verifyingToken&&tokenStatusOk&&!redefiniuSenha&&
            <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                <h1 className={`w-2/3 text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-black`}>Redefinir</h1>
                <p className={`${gothamLight.className} mb-5 w-2/3 text-sm`}>Redefina sua nova senha e confirme-a abaixo</p>
                <InputFormCadastro 
                    titulo="Nova Senha"
                    placeholder={"********"}
                    tipoInput="password"
                    setInput={setNovaSenha}
                    addStyleMain="w-2/3 self-center"
                    addStyleDivInput={`${gothamLight.className} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={` text-xl `}
                    addStylePlaceholder={``}
                    showPassword
                />
                <InputFormCadastro 
                    titulo="Confirmação de Nova Senha"
                    placeholder={"********"}
                    tipoInput="password"
                    setInput={setNovaSenhaConfirmacao}
                    addStyleMain="w-2/3 self-center mt-5"
                    addStyleDivInput={`${gothamLight.className} py-2 text-lg  font-semibold`}
                    addStyleDivTitle={` text-xl `}
                    addStylePlaceholder={``}
                    showPassword
                />

                <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85 bg-blue-400 text-white`}
                    onClick={()=>{
                        redefinirSenha()
                    }}
                >Redefinir</button>
                
            </div>}

            {!verifyingToken&&!tokenStatusOk&&!redefiniuSenha&&
                <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                    <h1 className={`text-6xl font-bold tracking-tighter text-black flex items-center gap-2`}>Acesso Inválido
                        <Image 
                            alt=""
                            src={ErrorIcon}

                        />
                    </h1>
                    <p className={`${gothamLight.className} text-sm`}>A validação de acesso está incorreta ou expirada, tente novamente mais tarde</p>

                    <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85  bg-blue-400 text-white`}
                    onClick={()=>{
                        router.push("/login")
                    }}
                    >Voltar Para o Início</button>
                </div>
            }

            {redefiniuSenha&&!redefinindoSenhaLoading&&
                <div className="h-screen w-1/2 flex flex-col justify-center items-center">
                    <h1 className={`w-2/3 text-6xl font-bold tracking-tighter text-black flex items-center gap-2`}>Sucesso
                    <Image 
                        alt=""
                        src={success}
                    />
                    </h1>
                    <p className={`${gothamLight.className} w-2/3 text-sm`}>Sua senha foi alterada com sucesso, teste na página de login</p>
                    
                    <button className={`text-2xl w-2/3 p-3 mt-5 rounded-sm cursor-pointer hover:opacity-85  bg-blue-400 text-white`}
                    onClick={()=>{
                        router.push("/login")
                    }}
                    >Voltar Para o Início</button>
                </div>
            }
            {redefiniuSenha&&redefinindoSenhaLoading&&
            <div className="h-screen flex flex-col items-center justify-center w-1/2">
            <h1 className={`w-2/3 text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-black`}>Redefinir</h1>
            <p className={`${gothamLight.className} mb-5 w-2/3 text-sm`}>Redefina sua nova senha e confirme-a abaixo</p>
            <Image 
                alt=""
                src={loading}
            />
        </div>
            }


            <div className={`fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ${error.length > 0 ? "opacity-100": "opacity-0"} text-white bg-black w-1/3 self-center text-center text-lg font-semibold flex justify-center items-center gap-2 p-2 rounded-sm transition-all`}>
                <RiErrorWarningFill className="" />
                <p className="">{error.length > 0 ? error : "As senhas não batem!"}</p>
            </div>



        </div>
    )
}