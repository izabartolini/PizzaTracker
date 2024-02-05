import Link from "next/link"
import { PessoaEntidade } from "@/pages/paginaPrincipal/[qtdParticipantes]/principal";

export default function Campeao({ pessoa }: { pessoa: PessoaEntidade[][]  }) {

    pessoa[0].sort((a,b) => b.qtdComeu - a.qtdComeu);
    console.log(pessoa);


    return (

        
        <main className={`flex justify-between flex-col h-screen bg-white
        text-black font-bold items-center 
        `}>
            <div className="flex items-center flex-col">
                <h1 className="text-4xl my-7 ">O campeão</h1>
                <img
                    className="w-80 h-80"
                    src="/images/trofeu.png"
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-4xl truncate w-64">{pessoa[0][0].nome}</h1>
                <h1 className="text-7xl flex items-end ">{pessoa[0][0].qtdComeu} <p className="text-3xl">Fatias</p></h1>
            </div>
            <div className="flex flex-col gap-3">

                    <div className="flex items-end">
                        <h1 className="text-2xl truncate w-40">{pessoa[0][1].nome}</h1>
                        <h1 className="text-5xl flex items-end ">{pessoa[0][1].qtdComeu} <p className="text-xl">Fatias</p></h1>
                    </div>
                    

                <div className="flex items-end">
                    <h1 className="text-2xl truncate w-40 ">{pessoa[0][2].nome}</h1>
                    <h1 className="text-5xl flex items-end ">{pessoa[0][2].qtdComeu} <p className="text-xl">Fatias</p></h1>
                </div>
            </div>
            <Link
                className="botao h-16 w-60 rounded-3xl m-3 flex justify-center items-center font-medium text-2xl"
                href={`/`}
            >
                Voltar
            </Link>
        </main>
    )
}