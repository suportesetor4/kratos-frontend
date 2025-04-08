import { SetStateAction } from "react";

declare global{
    type setBoolean = Dispatch<SetStateAction<boolean>>
    type setUser = Dispatch<SetStateAction<User>>

    type Papeis = "ROLE_ADMIN" | "ROLE_SERVIDOR" | "ROLE_BOLSISTA" | "ROLE_CLIENTE"

    interface User {
        id?: string;
        login: string;
        nome: string;
        email: string;
        telefone: string;
        papel: Papeis;

    }

}