"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isClientLoggedIn, logout } from "@/utils/auth-functions";
import Loading from "@/components/ui-kratos/loading";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import { useUser } from "@/contexts/UserContext";



export default function Home() {
  const router = useRouter()

  const { user, getUser } = useUser()

  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(()=>{
    isClientLoggedIn(router, setIsLogged)
    getUser()
  }, [])


  return (isLogged?

    <div className="h-full w-full ">
      <ThemeSwitcher />
      {user.nome}
    </div>

    :<Loading />);
}
