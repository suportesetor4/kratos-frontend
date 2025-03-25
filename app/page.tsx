"use client"

import { useEffect } from "react";
import Login from "./login/page";
import { useRouter } from "next/navigation";

const isLogged = false

export default function Home() {

  const router = useRouter()

  async function isClientLoggedIn(){
    // verify if user has token in localstorage
    if(!isLogged){
      router.push("login")
    } 
  }

  useEffect(()=>{
    isClientLoggedIn()
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
