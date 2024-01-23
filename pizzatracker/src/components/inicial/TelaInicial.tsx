import Link from "next/link";
import React from "react";
import { useState } from 'react';

export default function TelaInicial() {

    const [quantidadeParticipantes, setQuantidadeParticipantes] = useState("");

    return (
      <div className="flex flex-col  justify-center items-center gap-12 text-center text-black ">

        <h1 className="font-bold text-3xl mt-7">Quantas pessoas participarão do rodizio?</h1>

        <input 
          type="number" 
          onChange={(e: any) => setQuantidadeParticipantes(e.target.value)} 
          value={quantidadeParticipantes} 
          className="bg-gray-300 w-80 h-24 text-center text-4xl" 
        />

        <Link 
          className="botao w-64 h-14 rounded-lg text-xl flex justify-center items-center"
          href={`/paginaPrincipal/${quantidadeParticipantes}/principal`} 
        >
          Comecar
        </Link>
       
      </div>
    )
    
  }

