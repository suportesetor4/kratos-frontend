"use client"

import CadastrarForm from "@/components/cadastrar/cadastrar-form";
import CadastrarSection from "@/components/cadastrar/cadastrar-section";
import { useRouter } from "next/navigation";

export default function Cadastrar(){
  const router = useRouter()

  return(
      <div className={`w-screen h-screen flex items-center justify-center`}>
          <CadastrarSection />
          <CadastrarForm />
      </div>
  )
}