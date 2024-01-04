import Contador from "./Contador";

interface NomeProps{
    nome: string
}

export default function Pessoa(props: NomeProps){

    return(
        <div className={`
        bg-amarelo m-8 h-24 rounded-l-full rounded-r-3xl
        flex justify-start items-center text-black font-bold
        ` }>
            pizza
            <div className={`
                ml-5 w-full h-full
                flex flex-col justify-between items-center
            `}>
                <h1 className="text-xl font-bold bg-amareloclaro rounded-md px-24 border-2 border-black mt-1">
                    {props.nome}
                </h1>
                <Contador></Contador>
            </div>
        </div>
    )
}