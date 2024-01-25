import { useState } from "react";
import Contador from "./Contador";
import { PessoaEntidade } from "@/pages/paginaPrincipal/[qtdParticipantes]/principal";

export default function Pessoa({pessoa, onChange }: { pessoa: PessoaEntidade, onChange: Function }) {

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
                    onChange={(e: any) => {
                        onChange({...pessoa, nome: e.target.value})
                    }}
                    value={pessoa.nome}
                    className="text-xl font-bold bg-amareloclaro rounded-md w-52 border-2 border-black mt-1 truncate text-center"
                />
                <Contador value={pessoa.qtdComeu || 0} onChange={(novoDadoQtdComeu: number) => {
                    onChange({...pessoa, qtdComeu: novoDadoQtdComeu});
                }} ></Contador>
            </div>
        </div>
    )
}