import { useState } from "react";
import Contador from "./Contador";

interface NomeProps {
    nome: string
}
export default function Pessoa(props: NomeProps) {
    const [nome, setNomeParticipante] = useState(props.nome);

    return (
        <div className={`
        bg-amarelo mx-6 h-24 rounded-l-full
        flex justify-start items-center text-black font-bold
        ` }>
            <div className={`
                ml-20 w-full h-full
                flex flex-col justify-between items-center
            `}>
                <input
                    type="text"
                    onChange={(e: any) => setNomeParticipante(e.target.value)}
                    value={nome}
                    className="text-xl font-bold bg-amareloclaro rounded-md w-52 border-2 border-black mt-1 truncate text-center"
                />
                <Contador></Contador>
            </div>
        </div>
    )
}