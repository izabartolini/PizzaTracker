import Mostrar from "@/components/principal/Mostrar";
import Nav from "@/components/geral/Nav";
import Pessoa from "@/components/principal/Pessoa";
import Adicionar from "@/components/principal/Adicionar";
import { useRouter } from "next/router";


export default function PaginaPrinciapal() {
    const { qtdParticipantes, teste } = useRouter()?.query

    // console.log(qtdParticipantes,'<--- qtdParticpantes' )
    // console.log(Array(Number(qtdParticipantes)).fill(null))

    return (
        <div className="flex flex-col justify-between min-h-screen gap-5 bg-branco overflow-y-auto text-black">
            <Nav></Nav>

            {Array(Number(qtdParticipantes)).fill(null).map((_, index) => {
                return <Pessoa nome={`Pessoa ${String(index + 1)}`}></Pessoa>;
            })}

            <Adicionar></Adicionar>
            <Mostrar participantes={String(qtdParticipantes)}></Mostrar>
        </div>
    )
}