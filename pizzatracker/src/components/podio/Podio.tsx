import { PessoaEntidade } from "@/pages/paginaPrincipal/[qtdParticipantes]/principal";
export default function Podio({ pessoas }: { pessoas: PessoaEntidade[] }) {

    pessoas = pessoas.sort((a, b) => b.qtdComeu - a.qtdComeu);

    return (

        <main className={`flex justify-center flex-col items-center
        bg-white text-black font-bold gap-4
        
        `}>
            <div>
                <div className="flex items-center justify-center flex-col">

                    <h1 className="text-center text-4xl truncate w-64 mt-5 ">{pessoas[0].nome}</h1>

                    <img
                        className="w-96 h-96"
                        src="/images/trofeu.png"
                    />
                </div>

                <div className="flex flex-col items-center ">
                    <h1 className="text-7xl flex items-end ">{pessoas[0].qtdComeu}<p className="text-3xl">Fatias</p> </h1>
                </div>
            </div>

            <div className="flex flex-col gap-3 items-center">

                {pessoas[1] && <div className="flex items-end">
                    <h1 className="text-2xl truncate w-40 flex justify-center">{pessoas[1]?.nome}</h1>
                    <h1 className="text-5xl flex items-end ">{pessoas[1]?.qtdComeu} <p className="text-xl">Fatias</p></h1>
                </div>}


                {pessoas[2] && <div className="flex items-end">
                    <h1 className="text-2xl truncate w-40 flex justify-center">{pessoas[2]?.nome}</h1>
                    <h1 className="text-5xl flex items-end ">{pessoas[2]?.qtdComeu} <p className="text-xl">Fatias</p></h1>
                </div>}

            </div>
        </main>
    )
}