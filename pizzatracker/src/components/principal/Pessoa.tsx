import Contador from "./Contador";
import { PessoaEntidade } from "@/pages/paginaPrincipal/[qtdParticipantes]/principal";

export default function Pessoa({ pessoa, onChange, onDelete, index }: { pessoa: PessoaEntidade, onChange: Function, onDelete: (index:number) => void, index: number }) {

    let quantidadeDePizzasComidasPorPessoa = pessoa.qtdComeu;

    const handleDelete = () => {
        onDelete(index);
    };


    return (
        <div className={`
        bg-amarelo mx-6 h-24 rounded-l-full
         text-black font-bold
         flex justify-between
        ` }>

            <div className=" ">
                {quantidadeDePizzasComidasPorPessoa > 0 && quantidadeDePizzasComidasPorPessoa < 9 &&

                    <div className="flex justify-start ">
                        <img
                            className="w-28 h-24"
                            src={`/images/pizzas ${quantidadeDePizzasComidasPorPessoa}.png`}
                        />
                    </div>}

                {quantidadeDePizzasComidasPorPessoa >= 9 &&
                    <div
                        className="flex items-center justify-start"
                    >
                        <img
                            className="w-28 h-24"
                            src={`/images/pizzas 8.png`}
                        />

                        <div className="flex justify-center items-center bg-blue-400 rounded-full w-7 h-7">
                            <span className="text-xs">+{quantidadeDePizzasComidasPorPessoa - 8}</span>
                        </div>
                    </div>}
            </div>

            <div className={`
                h-full
                flex flex-col justify-between items-center mr-3
            `}>
                <div className="flex items-end justify-center gap-2">
                    <input
                        type="text"
                        onChange={(e: any) => {
                            onChange({ ...pessoa, nome: e.target.value })
                        }}
                        value={pessoa.nome}
                        className="text-xl font-bold bg-amareloclaro rounded-md w-36 border-2 border-black mt-1 truncate text-center"
                    />
                    <button onClick={handleDelete}>
                        <img src="/images/trash-bin.png" alt="Icon Lixo" className="w-7 h-7" />
                    </button>
                </div>

                <Contador value={quantidadeDePizzasComidasPorPessoa || 0} onChange={(novoDadoQtdComeu: number) => {
                    onChange({ ...pessoa, qtdComeu: novoDadoQtdComeu });
                }} ></Contador>

            </div>
        </div>
    )
}