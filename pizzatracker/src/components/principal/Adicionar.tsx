import { useState } from "react";

export default function Adicionar(){

    const [valor, setValor] = useState("");

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) =>{
      setValor(event.target.value)
    }

    function Adiciona(){
        <div className={`
            bg-amarelo mx-6 h-24 rounded-l-full rounded-r-3xl
            flex justify-start items-center text-black font-bold gap-3
            ` }>
                <button className="bg-vermelho text-white ml-4 text-5xl w-16 h-16 rounded-full"><h1 className="text-center h-full">X</h1></button>

                <button className="bg-verde text-white text-5xl w-16 h-16 rounded-full"><h1 className="text-center h-full">/</h1></button>

                <input className="text-2xl font-bold bg-amareloclaro rounded-md w-36 border-2  border-black mt-1 truncate text-center"
                value={valor}
                type="text" 
                onChange={handleChange}
                />
            </div>
    }
    return(
        <div className={`
        bg-amarelo mx-6 h-24 rounded-l-full rounded-r-3xl
        flex justify-between  items-center text-black font-bold 
        ` }>
            <button onClick={Adiciona} className="bg-vermelho text-white ml-4 text-5xl w-16 h-16 rounded-full"><h1 className="text-center h-full">+</h1></button>
            <h1 className="font-bold text-2xl mr-7">Adicionar Pessoa</h1>
        </div>
    )
}