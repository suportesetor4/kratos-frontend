import { setAccessToken } from '@/utils/auth-functions';
import getApiUrl from '@/utils/getApiUrl';
import axios from 'axios'

interface User {
    id: string | number;
}

interface LoginParams{ 
    token: string | null | undefined;
}

export async function login(login: string, senha: string){
    const response = await axios.post<LoginParams>(getApiUrl('login'), {
        login: login,
        senha: senha
    })

    if(!(response.status === 200 && response.data.token)){
        return
    }

    setAccessToken(response.data.token)
}