
export default function Adicionar({ onClick }: { onClick: Function }) {
    return (
        <div>
            <div id="2" onClick={() => onClick()} className={`
        bg-amarelo mx-6 h-24 rounded-l-full rounded-r-3xl
        flex justify-between  items-center text-black font-bold 
        ` }>
                <button className="bg-vermelho text-white ml-4 text-5xl w-16 h-16 rounded-full"><h1 className="text-center h-full">+</h1></button>
                <h1 className="font-bold text-2xl mr-7">Adicionar Pessoa</h1>
            </div>
        </div>
    )
}