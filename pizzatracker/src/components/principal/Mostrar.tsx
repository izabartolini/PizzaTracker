import Link from "next/link";

export default function Mostrar(){
    return(
        <div className={`
            flex justify-center items-center
        `}>
            <Link
                className="botao p-4 rounded-3xl text-2xl"
                href={"/paginaCampeao/campeao"}
            >
            Mostrar ganhador
            </Link>
        </div>
    )
}