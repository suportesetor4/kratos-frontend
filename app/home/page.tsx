"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isClientLoggedIn, logout } from "@/utils/auth-functions";
import Loading from "@/components/ui/loading";



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


  return (isLogged?

    <div className="h-full w-full bg-gray-200">
      <h1>Home</h1>
      <button onClick={logoutUser} className="hover:cursor-pointer hover:opacity-90 p-2 bg-red-500 m-2">Logout</button>
    </div>

    :<Loading />);
}
