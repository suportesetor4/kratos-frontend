"use client"

import InputFormCadastro from "@/components/ui-kratos/input-form-cadastro";
import Loading from "@/components/ui-kratos/loading";
import TextareaFormCadastro from "@/components/ui-kratos/textarea-form-cadastro";
import { isClientLoggedIn } from "@/utils/auth-functions";
import { Check, CheckCheck, ClipboardPen, List, Plus, Square, SquareCheck, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Chamado {
    id: number;
    titulo: string;
    descricao: string;
    checked: boolean;
}

interface ListaChamadosParams {
    chamados: Chamado[];
    setChamados: Dispatch<SetStateAction<Chamado[]>>;
    setModalAberto: () => void;
}

function ListaChamados({
    chamados,
    setChamados,
    setModalAberto
}: ListaChamadosParams){

    const router = useRouter()

    const [isLogged, setIsLogged] = useState<boolean>(false)

    useEffect(()=>{
      isClientLoggedIn(router, setIsLogged)
    }, [])

    return( isLogged ?
        <div className="w-1/4 h-1/2 p-5 flex flex-col gap-5 border border-neutral-200 rounded-sm shadow ml-10">
            <h1 className="text-3xl text-neutral-800 self-start flex items-center justify-center gap-5 p-1">
                <List className="w-7 h-7 text-neutral-800"/> Chamados Pendentes
            </h1>
            <ul className="text-xl text-neutral-600 flex flex-col gap-2 mt-5">
                {chamados.map((chamado) => (
                    <li 
                        key={chamado.id}
                        className={`flex items-center gap-2 hover:bg-blue-200 hover:text-black cursor-pointer p-1 rounded-sm select-none transition-all duration-200 ${chamado.checked ? "line-through text-neutral-500 hover:bg-neutral-200" : ""}`}
                    >
                        <div 
                            className={`hover:text-blue-500 ${chamado.checked ? "text-blue-500" : ""}`}
                            onClick={() => {
                                const newChamados = chamados.map(
                                    c => c.id === chamado.id 
                                    ? { ...c, checked: !c.checked }
                                    : c
                                );
                                setChamados(newChamados);
                            }}
                        >
                            {!chamado.checked && <Square />}
                            {chamado.checked && <SquareCheck />}
                        </div>
                        {chamado.titulo}
                    </li>
                ))}
            </ul>
            <div 
                className={`flex items-center gap-2 hover:bg-blue-200 hover:text-black text-neutral-500 cursor-pointer p-1 rounded-sm select-none transition-all duration-200 text-xl hover:shadow-sm`}
                onClick={setModalAberto}
            >
                <Plus /> Criar Chamado
            </div>
        </div>
    : <Loading />)
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
    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [modalAberto, setModalAberto] = useState(false)
    const [mostrarModal, setMostrarModal] = useState(false)

    const abrirModal = () => {
        setMostrarModal(true)
        setTimeout(() => setModalAberto(true), 10)
    }

    const fecharModal = () => {
        setModalAberto(false)
        setTimeout(() => setMostrarModal(false), 200)
    }

    return(
        <div className="w-screen h-screen flex flex-col">
            <h1 className="text-5xl my-5 ml-10">Sala {params.sala}</h1>

            <ListaChamados 
                chamados={chamados}
                setChamados={setChamados}
                setModalAberto={abrirModal}
            />

            {mostrarModal && (
                <div 
                    className={`w-screen h-screen fixed flex items-center justify-center top-0 left-0 bg-black/50 z-50 transition-opacity duration-200 ${modalAberto ? "opacity-100" : "opacity-0"}`}
                    onClick={fecharModal}
                >
                    <div 
                        className={`bg-white rounded-sm shadow-sm shadow-neutral-600 w-1/2 h-4/5 flex flex-col gap-7 p-10 relative transition-all duration-200 transform ${modalAberto ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h1 className="text-3xl text-neutral-800 flex gap-5 items-center"><ClipboardPen className="w-6 h-6"/> Novo Chamado</h1>

                        <div className="w-11/12 flex flex-col gap-7">
                            <InputFormCadastro 
                                placeholder=""
                                setInput={setTitulo}
                                tipoInput="text"
                                inputValue={titulo}
                                titulo="Titulo"
                                addStyleDivInput="border-2 border-neutral-400 text-lg"
                                addStyleDivTitle="text-neutral-800 text-lg"
                            />
                            <TextareaFormCadastro 
                                placeholder=""
                                setInput={setDescricao}
                                inputValue={descricao}
                                titulo="Descrição"
                                addStyleDivInput="border-2 border-neutral-400 h-72 text-lg"
                                addStyleDivTitle="text-neutral-800 text-lg"
                            />

                            <button className={`text-2xl  transition-all duration-200 p-2 rounded-sm text-start flex items-center gap-5 ${(titulo.length > 0 && descricao.length > 0) ? "bg-blue-200 text-black cursor-pointer hover:bg-blue-300 hover:text-black" : "bg-neutral-100 text-neutral-500 cursor-not-allowed"}`}
                                onClick={()=>{
                                    const newChamados : Chamado[] = [
                                        ...chamados,
                                        {
                                            id: chamados.length + 1,
                                            checked: false,
                                            descricao: descricao,
                                            titulo: titulo
                                        }
                                    ]
                                    
                                    if(titulo.length > 0 && descricao.length > 0){
                                        setChamados(newChamados)
                                        setTitulo("")
                                        setDescricao("")
                                        setModalAberto(false)

                                    }
                                }}
                            >
                                <Plus 
                                    className="w-6 h-6"
                                />
                                Criar
                            </button>
                        </div>

                        <div 
                            className="absolute top-2 right-2 cursor-pointer"
                            onClick={fecharModal}
                        >
                            <X className="w-8 h-8"/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
