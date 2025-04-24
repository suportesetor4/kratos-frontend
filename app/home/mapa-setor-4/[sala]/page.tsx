"use client"

import { Check, CheckCheck, List, Square, SquareCheck } from "lucide-react";
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react";

interface Chamado {
    id: number;
    titulo: string;
    descricao: string;
    checked: boolean;
    
}



interface ListaChamadosParams {
    chamados: Chamado[];
    setChamados: Dispatch<SetStateAction<Chamado[]>>;
}

function ListaChamados({
    chamados,
    setChamados
}: ListaChamadosParams){
    return(
    <div className="w-1/4 h-1/2 p-5 flex flex-col gap-5 border border-neutral-200 rounded-sm shadow ml-10">
        <h1 className="text-4xl text-neutral-800 self-start flex items-center justify-center gap-5 p-1">
            <List className="w-7 h-7 text-neutral-800"/> Chamados</h1>
        <ul className="text-xl text-neutral-600 flex flex-col gap-2 mt-5">
            {chamados.map((chamado)=>(
                <li 
                className={`flex items-center gap-2 hover:bg-blue-200 hover:text-black cursor-pointer p-1 rounded-sm select-none transition-all duration-200 ${chamado.checked ? "line-through text-neutral-500 hover:bg-neutral-200" : ""}`}
                onClick={()=>{

                }}
                key={chamado.id}>
                    <div 
                    className={`hover:text-blue-500 ${chamado.checked ? "text-blue-500" : ""}`}
                    onClick={()=>{
                        const newChamados = chamados.map(
                            c => c.id === chamado.id 
                            ? {...c, checked: !c.checked}
                            : c
                        )
                                       
                        setChamados(newChamados)
                    }}>
                        {!chamado.checked&&<Square />}
                        {chamado.checked&&<SquareCheck />}
                    </div>
                    {chamado.titulo}
                </li>
            ))}
        </ul>
    </div>
    )
}

export default function Sala(){

    const [chamados, setChamados] = useState<Chamado[]>([
        {
            id: 1,
            titulo: "Trocar HDMI do projetor",
            descricao: "",
            checked: false
        },
        {
            id: 2,
            titulo: "Verificar atualizações do windows",
            descricao: "",
            checked: false
            
        },
        
    ])

    const params = useParams()
    

    return(
        <div className="w-screen h-screen flex flex-col">
        <h1 className="text-5xl text-center my-5">Sala {params.sala}</h1>
            <ListaChamados 
                chamados={chamados}
                setChamados={setChamados}
            />
        </div>
    )
}