import Contador from "./Contador";
import { PessoaEntidade } from "@/pages/paginaPrincipal/[qtdParticipantes]/principal";

export default function Pessoa({ pessoa, onChange }: { pessoa: PessoaEntidade, onChange: Function }) {

    let quantidadeDePizzasComidasPorPessoa = pessoa.qtdComeu;
    return (
        <div className={`
        bg-amarelo mx-6 h-24 rounded-l-full
         text-black font-bold
         flex justify-end gap-8
        ` }>
            {quantidadeDePizzasComidasPorPessoa > 0 && quantidadeDePizzasComidasPorPessoa < 9 &&
                <div
                    className="flex justify-start"
                >
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
                    <span className="text-xs">+{quantidadeDePizzasComidasPorPessoa - 8}</span>


                </div>}
            <div className={`
                h-full
                flex flex-col justify-between items-end mr-5
            `}>
                <input
                    type="text"
                    onChange={(e: any) => {
                        onChange({ ...pessoa, nome: e.target.value })
                    }}
                    value={pessoa.nome}
                    className="text-xl font-bold bg-amareloclaro rounded-md w-44 border-2 border-black mt-1 truncate text-center"
                />
                <Contador value={quantidadeDePizzasComidasPorPessoa || 0} onChange={(novoDadoQtdComeu: number) => {
                    onChange({ ...pessoa, qtdComeu: novoDadoQtdComeu });
                }} ></Contador>
            </div>
        </div>
    )
}