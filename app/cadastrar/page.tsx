"use client"

import CadastrarForm from "@/components/cadastrar/cadastrar-form";
import CadastrarSection from "@/components/cadastrar/cadastrar-section";
import Loading from "@/components/ui-kratos/loading";
import { isClientLoggedIn } from "@/utils/auth-functions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Cadastrar(){
  const router = useRouter()
  
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(()=>{
    isClientLoggedIn(router, setIsLogged)

  }, [])


  return(!isLogged?
    
      <div className={` w-screen h-screen flex items-center justify-center`}>
          <CadastrarForm />
          <CadastrarSection />
      </div>
    : <Loading />)
}