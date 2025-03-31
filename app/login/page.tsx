"use client"

import LoginForm from "@/components/login/login-form";
import LoginSection from "@/components/login/login-section";
import Loading from "@/components/ui/loading";
import { isClientLoggedIn } from "@/utils/auth-functions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Login(){
  const router = useRouter()
  
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(()=>{
    isClientLoggedIn(router, setIsLogged)

  }, [])


  return(!isLogged?
    
      <div className={` w-screen h-screen flex items-center justify-center`}>
          <LoginSection />
          <LoginForm />
      </div>
    : <Loading />)
}