import Link from "next/link";
import { useRouter } from "next/router";

interface NomeProps {
    participantes: string
}
export default function Mostrar(props: NomeProps){

    const quantidadeParticipantes = props.participantes;
    return(
        <div className={`
            flex justify-center items-center
        `}>
            <Link
                className="botao p-4 rounded-3xl text-2xl"
                href={`/paginaPodio/podio`}
            >
            Mostrar ganhador
            </Link>
        </div>
    )
}