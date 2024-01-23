import Link from "next/link"

export default function Campeao() {
    let valor1 = "Leonardo"
    let valor2 = "Leonardo 2"
    let valor3 = "Leonardo 3"
    let pizza1 = "40"
    let pizza2 = "30"
    let pizza3 = "25"

    return (
        <main className={`flex justify-between flex-col h-screen bg-branco
        text-black font-bold items-center 
        `}>
            <div className="flex items-center flex-col">
                <h1 className="text-4xl my-7 ">O campeão</h1>
                <div className="w-72 h-64 bg-cyan-300"></div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-center text-4xl truncate w-64">{valor1}</h1>
                <h1 className="text-7xl flex items-end ">{pizza1} <p className="text-3xl">Fatias</p></h1>
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-end">
                    <h1 className="text-2xl truncate w-40">{valor2}</h1>
                    <h1 className="text-5xl flex items-end ">{pizza2} <p className="text-xl">Fatias</p></h1>
                </div>
                <div className="flex items-end">
                    <h1 className="text-2xl truncate w-40 ">{valor3}</h1>
                    <h1 className="text-5xl flex items-end ">{pizza3} <p className="text-xl">Fatias</p></h1>
                </div>
            </div>
            <Link
                className="botao h-16 w-60 rounded-3xl m-3 flex justify-center items-center font-medium text-2xl"
                href={"/paginaPrincipal/principal"}
            >
            Voltar
            </Link>
        </main>
    )
}