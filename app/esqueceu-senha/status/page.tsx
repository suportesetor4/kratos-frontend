"use client"

import { verifyEmailTokenStatus } from "@/api_calls/auth"
import localFont from "next/font/local"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
const gothamLight = localFont({ src: '../../../fonts/gothamXlight.otf' })

import error from '@/public/error.gif'
import success from '@/public/success.gif'
import loading from '@/public/loading.gif'

export default function Status(){
    
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const [verifyingToken, setVerifyingToken] = useState(true)
    const [tokenStatusOk, setTokenStatusOk] = useState(false)

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
    
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center">

            {verifyingToken&&
                <div className="flex items-center justify-center flex-col">
                    <h1 className={`text-6xl font-bold tracking-tighter text-black`}>Validando Acesso</h1>
                    <p className={`${gothamLight.className} mb-5 text-sm`}>Validando o acesso à redefinição de senha</p>
                    <Image 
                        alt=""
                        src={loading}
                    />

                </div>

            }
            {
                tokenStatusOk&&
                <div className="flex items-center justify-center flex-col">
                    <h1 className={`text-6xl font-bold tracking-tighter text-black`}>Validando Acesso</h1>
                    <p className={`${gothamLight.className} mb-5 text-sm`}>Validando o acesso à redefinição de senha</p>
                    <Image 
                        alt=""
                        src={success}

                    />

            </div>

            }
            {
                !tokenStatusOk&&!verifyingToken&&
                <div className="flex items-center justify-center flex-col">
                    <h1 className={`text-6xl font-bold tracking-tighter text-black`}>Validando Acesso</h1>
                    <p className={`${gothamLight.className} mb-5 text-sm`}>Validando o acesso à redefinição de senha</p>
                    <Image 
                        alt=""
                        src={error}

                    />

                </div>

            }
        </div>
    )
}