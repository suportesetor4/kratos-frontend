import Image from "next/image";

import LoadingDuck from '@/public/patin-loading.gif'
import LoadingIcon from '@/public/loading.gif'

export default function Loading(){
    return(
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
            <Image 
                alt=""
                src={LoadingDuck}
            />        
            <div className="flex items-center justify-center gap-2 self-center">
                <h1 className="text-5xl">Carregando</h1>
                <Image 
                    alt=""
                    src={LoadingIcon}
                />
            </div>
        </div>
    )
}