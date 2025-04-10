"use client"

interface Sala {
    nome: string;
    status: "OK" | "PENDENTE" | "ANDAMENTO";
    role: "SUPORTE" | "ADMIN"
}

interface Bloco {
    bloco: ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I")
    sentido: "norte" | "sul";
    salas: string[];
}

const mapa : Bloco[] = [
    {
        bloco: "A",
        sentido: "sul",
        salas: [
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",

        ]
    },
    {
        bloco: "A",
        sentido: "sul",
        salas: [
            "E. L. & Q.",
            "A6",
            "A7",
            "A8",
            "A9",
            "A10"
        ]
    },
    {
        bloco: "B",
        sentido: "norte",
        salas: [
            "BANHEIRO",
            "B1",
            "B2",
            "AUD."
        ]
    },
    {
        bloco: "C",
        sentido: "sul",
        salas: [
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "LAB. 1"
        ]
    },
    {
        bloco: "D",
        sentido: "norte",
        salas: [
            "BANHEIRO",
            "D1",
            "D2",
            "D3",
            "LAB. 2",
            "D4"
        ]
    },
    {
        bloco: "E",
        sentido: "sul",
        salas: [
            "SUPERVISÃO",
            "SUPORTE",
            "LAB. 3",
            "SL. EST.",
            "LAB. 4"
        ]
    },
    {
        bloco: "F",
        sentido: "norte",
        salas: [
            "BANHEIRO",
            "F1",
            "F2",
            "F3",
            "F4",
            "F5"
        ]
    },
    {
        bloco: "G",
        sentido: "sul",
        salas: [
            "LAB. 5",
            "G1",
            "G2",
            "G3",
            "G4",
            "LAB. 6"
        ]
    },
    {
        bloco: "H",
        sentido: "norte",
        salas: [
            "BANHEIRO",
            "H1",
            "H2",
            "H3",
            "H4",
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            "ADMIN",
            "I1",
            "I2",
            "I3",
            "I4",
            
            
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            "BANHEIRO"
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            "I5",
            "I6",
            "I7",
            "I8",
            "I9",
            
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            "BANHEIRO"
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            "I10",
            "I11",
            "I12",
            "I13",
            "I14",
            
        ]
    },
    {
        bloco: "I",
        sentido: "norte",
        salas: [
            "BANHEIRO"
        ]
    },
    {
        bloco: "I",
        sentido: "sul",
        salas: [
            "I15",
            "I16",
            "I17",
            "I18",
            "I19"
        ]
    },
]

function Mapa(){
    return(
        <div className="w-11/12 h-11/12 border-2 p-5 flex flex-col">
            {mapa.map((bloco, index)=>(
                <div key={index} className="flex flex-col w-full"
                style={{
                    height: `50px`
                }}
                >
                    
                    <div className={`w-[49%] h-full ${bloco.sentido === "norte" ? "self-end " : "self-start"}`}

                    >

                        <div className={`flex h-full w-full ${bloco.sentido === "norte" ? "flex-row" : "flex-row-reverse"} gap-1`}>
                            {mapa[index].salas.map((sala, index)=>(
                                <div key={index} className={`h-full border-2 text-sm flex justify-center items-center cursor-pointer hover:bg-neutral-100 transition-all duration-300 hover:animate-bounce`}
                                    style={{ 
                                        width: `${100 / bloco.salas.length}%` 
                                    }}
                                >
                                    {sala}
                                </div>
                            ))}
                        </div>

                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default function MapaSetor4(){

    
    
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-neutral-900">Mapa do Setor IV</h1>
            <Mapa 

            />


        </div>
    )
}