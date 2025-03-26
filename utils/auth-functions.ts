// Access Token: access_token


export function getAccessToken(){
    return localStorage.getItem("access_token")
}

export function logout(){
    localStorage.setItem("access_token", "")
}

export function isAccessTokenValid(token: string | null){
    
    // add logic to verify if token is valid in backend
    if(token){
        return true
    } 

    return false
}

export function isClientLoggedIn(){
    const token = getAccessToken()

    if(isAccessTokenValid(token)){
        return true
    }

}