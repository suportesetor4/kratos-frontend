"use client"

import { useParams } from "next/navigation"

export default function Sala(){

    const params = useParams()
    

    return(
        <div className="w-screen h-screen flex flex-col">
        <h1 className="text-5xl text-center ">Sala {params.sala}</h1>
        <div className=" w-1/4 h-1/2 p-5 mt-5 self-center flex flex-col items-center gap-5 border-2 border-neutral-200 rounded-sm">
            <h1 className="text-4xl text-neutral-800">Problemas</h1>
            <ul className="text-xl text-neutral-600">
                <li>Projetor ruim</li>
                <li>HDMI ruim</li>
                <li>Trocar mouse</li>
            </ul>
        </div>
        </div>
    )
}