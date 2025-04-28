import { getAccessToken, setAccessToken } from '@/utils/auth-functions';
import getApiUrl from '@/utils/getApiUrl';
import axios from 'axios'

interface LoginParams{ 
    token: string | null | undefined;
}

export async function login(login: string, senha: string) : Promise<boolean> {
    try{
        const response = await axios.post<LoginParams>(getApiUrl('login'), {
            login: login,
            senha: senha
        })
    
        if(!(response.status === 200 && response.data.token)){
            return false
        }
    
        setAccessToken(response.data.token)
        return true
    } catch(error){
        console.log(error)
        return false
    }

}

export async function cadastrar(
    nome: string,
    telefone: string,
    email: string,
    login: string,
    senha: string
) : Promise<boolean> {
    try{
        const response = await axios.post<LoginParams>(getApiUrl('usuario/cadastrar'), {
            login: login,
            nome: nome,
            telefone: telefone,
            email: email,
            senha: senha
        })
    
        if(!(response.status === 201)){
            return false
        }
    
        return true
    } catch(error){
        console.log(error)
        return false
    }

}

export async function getUserInfoByLogin(login: string, senha: string){

    try{
        const response = await axios.post<User>(getApiUrl("usuario/login"), {
            login: login,
            senha: senha
        })

        if(!(response.status === 200 && response.data)){
            return false
        }

        response.data.id ? localStorage.setItem("user_id", response.data.id) : ()=>{}

        return response.data

    } catch(error){
        console.log(error)

    }
}

export async function getUserInfoById(id: string){

    try{
        const token = getAccessToken()
        const response = await axios.get<User>(getApiUrl(`usuario/${id}`), {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        if(!(response.status === 200 && response.data)){
            return false
        }

        return response.data

    } catch(error){
        console.log(error)
        return false
    }
}

export async function sendEmailForgotPassword(email: string){
    try{
        const response = await axios.get(getApiUrl("api/auth/forgot-password"), {
            params: {
                email: email
            }
        })

        if(!(response.status === 200)){
            return false
        }

        return true
    } catch(e){
        return false
        console.log(e)
    }

}