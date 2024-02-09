import Link from "next/link";

interface NomeProps {
    participantes: any;
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
            <button disabled={quantidadeParticipantes == 2}>Mostrar ganhador</button>
            </Link>
        </div>
    )
}