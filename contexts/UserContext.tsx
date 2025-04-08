"use client"

import { getUserInfoById } from '@/api_calls/auth';
import { useContext, createContext, useState, ReactNode } from 'react'

interface UserProviderParams {
    children: ReactNode;
}

interface UserContextType {
    user: User;
    setUser: setUser | (()=>void);
    getUser: ()=>void
}

export const UserContext = createContext<UserContextType>({
    user: {login: "", nome: "", papel: "ROLE_ADMIN", telefone: "", email: ""},
    setUser: ()=>{},
    getUser: ()=>{}

})


export default function UserProvider({ children } : UserProviderParams){
    const [user, setUser] = useState<User>({
        login: "",
        nome: "",
        telefone: "",
        papel: "ROLE_ADMIN",
        email: ""
    })

    async function getUser(){
        const userId = localStorage.getItem("user_id")
        if(!userId) return

        try{
            const response = await getUserInfoById(userId)
            if(response){
                setUser(response)
            }

            
        } catch(error){
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{ user, setUser, getUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    const context = useContext(UserContext)
    if(!context){
        throw new Error("contexto do user não foi passado no provedor")
    }

    return context
}