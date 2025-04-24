"use client"

import { OctagonX } from "lucide-react";
import { useRouter } from "next/navigation";

type Role = "ADMIN" | "GERAL"
const role_user : Role = "GERAL"

interface Sala {
    nome: string;
    status: "OK" | "PENDENTE" | "ANDAMENTO" | "INTERDITADO" | "VERIFICAR";
    role: Role;
    tipo: "LAB" | "SALA" | "AUD" | "BANHEIRO" | "OUTRO";
}

interface Bloco {
    bloco: ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I")
    sentido: "norte" | "sul";
    salas: Sala[];
}

let mapa : Bloco[] = [
    {
        bloco: "A",
        sentido: "sul",
        salas: [
            {
                nome: "A1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A5",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "A",
        sentido: "sul",
        salas: [
            {
                nome: "E. L. & Q.",
                status: "OK",
                role: "ADMIN",
                tipo: "SALA"
            },
            {
                nome: "A6",
                status: "VERIFICAR",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A7",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A8",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A9",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "A10",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "B",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "INTERDITADO",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "B1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "B2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "AUD.",
                status: "OK",
                role: "GERAL",
                tipo: "AUD"
            },
        ]
    },
    {
        bloco: "C",
        sentido: "sul",
        salas: [
            {
                nome: "C1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "C2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "C3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "C4",
                status: "PENDENTE",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "C5",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "LAB. 1",
                status: "OK",
                role: "GERAL",
                tipo: "LAB"
            },
        ]
    },
    {
        bloco: "D",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "INTERDITADO",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "D1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "D2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "D3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "LAB. 2",
                status: "OK",
                role: "GERAL",
                tipo: "LAB"
            },
            {
                nome: "D4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "E",
        sentido: "sul",
        salas: [
            {
                nome: "SUPERVISÃO",
                status: "OK",
                role: "GERAL",
                tipo: "OUTRO"
            },
            {
                nome: "SUPORTE",
                status: "OK",
                role: "GERAL",
                tipo: "OUTRO"
            },
            {
                nome: "LAB. 3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "SL. EST.",
                status: "INTERDITADO",
                role: "GERAL",
                tipo: "OUTRO"
            },
            {
                nome: "LAB. 4",
                status: "OK",
                role: "GERAL",
                tipo: "LAB"
            },
        ]
    },
    {
        bloco: "F",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "INTERDITADO",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "F1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "F2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "F3",
                status: "ANDAMENTO",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "F4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "F5",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "G",
        sentido: "sul",
        salas: [
            {
                nome: "LAB. 5",
                status: "OK",
                role: "GERAL",
                tipo: "LAB"
            },
            {
                nome: "G1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "G2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "G3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "G4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "LAB. 6",
                status: "OK",
                role: "GERAL",
                tipo: "LAB"
            },
        ]
    },
    {
        bloco: "H",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "INTERDITADO",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "H1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "H2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "H3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "H4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            {
                nome: "ADMIN",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I1",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I2",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I3",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I4",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            
            
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            {
                nome: "I5",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I6",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I7",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I8",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I9",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            {
                nome: "I10",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I11",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I12",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I13",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I14",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            {
                nome: "BANHEIRO",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
            {
                nome: "",
                status: "OK",
                role: "ADMIN",
                tipo: "BANHEIRO"
            },
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            {
                nome: "I15",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I16",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I17",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I18",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },
            {
                nome: "I19",
                status: "OK",
                role: "GERAL",
                tipo: "SALA"
            },

        ]
    },
]

mapa = mapa.map(bloco => ({
    ...bloco,
    salas: role_user as string === "ADMIN"
        ? bloco.salas 
        : bloco.salas.filter(sala => sala.role !== "ADMIN") 
}));


function Mapa(){

    const router = useRouter()

    return(
        <div className="w-4/5 h-3/4 border-2 p-5 flex flex-col bg-neutral-100">
            {mapa.map((bloco, index)=>(
                <div key={index} className="flex flex-col w-full"
                style={{
                    height: `50px`
                }}
                >

                    <div className={`w-[45%] h-full ${bloco.sentido === "norte" ? "self-end " : "self-start"}`}

                    >

                        <div className={`flex h-full w-full ${bloco.sentido === "norte" ? "flex-row" : "flex-row-reverse"} gap-1`}>
                            <h1 className={`text-sm self-center `}>{bloco.salas.length === 0 ? "" : bloco.bloco}</h1>
                            {mapa[index].salas.map((sala, index)=>(

                                 <div key={index} onClick={()=>{
                                    router.push(`/home/mapa-setor-4/${sala.nome}`)
                                 }} className={`h-full border-2 text-sm flex justify-center items-center cursor-pointer transition-all duration-300 ${sala.status === "PENDENTE" ? "bg-red-500 animate-bounce hover:bg-red-600": ""} ${sala.status === "VERIFICAR" ? "bg-yellow-300 animate-pulse hover:bg-yellow-300": ""} ${sala.status === "ANDAMENTO" ? "bg-orange-400 hover:bg-orange-400": ""} ${sala.status === "OK" ? "bg-blue-300 hover:bg-blue-400": ""} ${sala.status === "INTERDITADO" ? " bg-blue-300  text-black hover:bg-neutral-100": ""} gap-1 ${sala.nome.length === 0 ? "bg-neutral-100 border-none hover:bg-neutral-100 cursor-" : ""}`}
                                     style={{ 
                                         width: `${100 / bloco.salas.length}%` 
                                     }}
                                 >
                                 {sala.status === "INTERDITADO" && <OctagonX className="text-red-700"/>}
                                 {sala.nome}
                                 </div>

                            ))}
                        </div>

                    </div>
                    
                </div>
            ))}
        </div>
    )
}

function Sumario(){
    return(
    <div className="w-4/5 self-center">
        <ul className="flex items-start gap-4">
            <li className="flex items-center justify-center gap-1"><div className="w-6 h-6 border-2 border-neutral-700 bg-blue-300"></div>Ok</li>
            <li className="flex items-center justify-center gap-1"><div className="w-6 h-6 border-2 border-neutral-700 bg-yellow-300"></div>Verificar</li>
            <li className="flex items-center justify-center gap-1"><div className="w-6 h-6 border-2 border-neutral-700 bg-red-500"></div>Pendente</li>
            <li className="flex items-center justify-center gap-1"><div className="w-6 h-6 border-2 border-neutral-700 bg-orange-400"></div>Andamento</li>
            <li className="flex items-center justify-center gap-1"><div className="w-6 h-6 border-2 border-neutral-700 bg-blue-300 flex items-center justify-center"><OctagonX className="text-red-700 w-6 h-6"/></div>Interditado</li>
        </ul>
    </div>
    )
}

export default function MapaSetor4(){
    
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-neutral-900">Mapa do Setor IV</h1>
            <Sumario />
            <Mapa 

            />


        </div>
    )
}