"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isClientLoggedIn, logout } from "@/utils/auth-functions";
import Loading from "@/components/ui-kratos/loading";



export default function Home() {
  const router = useRouter()

  function logoutUser(){
    logout()
    router.push("login")
  }

  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(()=>{
    isClientLoggedIn(router, setIsLogged)

  }, [])


  return (<Loading />);
}
