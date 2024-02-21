import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from 'react';

export default function TelaInicial() {

  const [valor, setValor] = useState(0)

  {/* <input
        type="number"
        onChange={(e: any) => setQuantidadeParticipantes(e.target.value)}
        className="bg-gray-300 w-80 h-24 text-center text-4xl"
      /> */}

  return (
    <div className="flex flex-col items-center gap-14 text-center text-black min-h-screen ">

      <h1 className="font-bold text-3xl m-7">Quantas pessoas participarão do rodizio?</h1>

      <div className="flex  justify-center items-center gap-2">

        <button disabled={valor == 0} className='botao w-16 h-16 rounded-full flex justify-center items-center border-black border-2'
          onClick={() => setValor(valor - 1)}
        >
          <img src="/images/minus.png" className="w-7" />
        </button>

        <span className=" w-32 h-11 flex justify-center items-center bg-amareloclaro border-black border-2 rounded-lg"
        >{valor}</span>

        {/* <input className=" w-32 h-11 flex justify-center text-center items-center bg-amareloclaro border-black border-2 rounded-lg"
          value={valor}
          onChange={(e: any) => setValor(parseInt(e.target.value))}
        /> */}
      

        <button className='botao rounded-full w-16 h-16 flex justify-center items-center border-black border-2'
          onClick={() => setValor(valor + 1)}
        >
          <img src="/images/add.PNG" className="w-5" />
        </button>
      </div>

      <Link
        className="botao w-64 h-14 rounded-lg text-xl flex justify-center items-center"
        href={`/paginaPrincipal/${valor}/principal`}

      >
        Começar Competição
      </Link>

    </div>
  )

}

