import Link from "next/link";
import React from "react";
import { useState } from 'react';

export default function TelaInicial() {

  function inicio(){
    <Link href="/paginaPrincipal/principal">a</Link>
  }
  
  const [valor, setValor] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
    setValor(event.target.value)
  }

      return (
        <div className="flex flex-col  justify-center items-center gap-12 text-center text-black ">
          <h1 className="font-bold text-3xl mt-7">Quantas pessoas participarão do rodizio?</h1>
          <input type="number" onChange={handleChange} value={valor} className="bg-gray-300 w-80 h-24 text-center text-4xl" />
          <Link className="botao w-64 h-14 rounded-lg text-xl flex justify-center items-center" href="/paginaPrincipal/principal">Começar rodízio</Link>
        </div>
      )
    }
