import { useState } from "react"

export default function Contador(){
    const [valor, setValor]= useState(0)
    return(
        <div className="flex gap-3 mb-2">
                <button className='botao px-7 border-2 border-black'
                    onClick={()=>setValor(valor - 1)}
                >
                -1</button>

                <span className="bg-verde font-bold text-white rounded px-7 py-2 flex items-center border-2 border-black" >
                    {valor}
                </span>  

                <button className='botao px-6 border-2 border-black'
                    onClick={()=>setValor(valor + 1)}
                >
                +1</button>
        </div>
    )
}