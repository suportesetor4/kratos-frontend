// Access Token: access_token
// User Id: user_id

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function getAccessToken(){
    return localStorage.getItem("access_token")
}

export function setAccessToken(token: string){
    localStorage.setItem("access_token", token)
}

export function logout(){
    localStorage.setItem("access_token", "")
    localStorage.setItem("user_id", "")
}

export function isAccessTokenValid(token: string | null){
    
    // add logic to verify if token is valid in backend
    if(token){
        return true
    } 

    return false
}

export function isClientLoggedIn(router: AppRouterInstance, setIsLogged: setBoolean) {
    const token = getAccessToken()

    // verification is ok
    if(isAccessTokenValid(token)){
        setIsLogged(true)
        router.push("/home")
        return
    } 

    // verification is not ok
    router.push("/login")
    return

}