import { useState } from "react"

export default function Contador() {
    const [valor, setValor] = useState(0)
    if (valor === 0) {
        return (
            <div className="flex gap-3 mb-2 items-center text-3xl">
                <button disabled className='botao w-14 h-9 border-2 border-black bg-red-900 flex justify-center items-center'
                    onClick={() => setValor(valor - 1)}
                >
                    -</button>

                <span className="bg-vermelho font-bold text-white rounded w-16 h-11 flex items-center justify-center border-2 border-black" >
                    {valor}
                </span>

                <button className='botao w-14 h-9  border-2 border-black flex justify-center items-center'
                    onClick={() => setValor(valor + 1)}
                >
                    +</button>
            </div>
        )
    }
    return (
        <div className="flex gap-3 mb-2
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        text-3xl items-center">
            <button className='botao w-14 h-9 border-2 border-black flex justify-center items-center'
                onClick={() => setValor(valor - 1)}
            >
                -</button>

            <span className="bg-vermelho font-bold text-white rounded w-16 h-11 flex justify-center items-center border-2 border-black" >
                {valor}
            </span>

            <button className='botao  w-14 h-9 border-2 border-black flex justify-center items-center'
                onClick={() => setValor(valor + 1)}
            >
                +</button>


        </div>

    )
}