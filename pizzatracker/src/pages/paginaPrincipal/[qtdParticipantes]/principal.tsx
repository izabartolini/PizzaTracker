import Mostrar from "@/components/principal/Mostrar";
import Nav from "@/components/geral/Nav";
import Adicionar from "@/components/principal/Adicionar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Pessoa from "@/components/principal/Pessoa";
import ModalComponent from "@/components/modalComponent/modalComponent";
import EstiloModal from "@/components/modalComponent/modalEstilo";

export class PessoaEntidade {

    public nome?: string = "";
    public qtdComeu: number = 0;

    constructor(_nome: string) {
        this.nome = _nome;
        this.qtdComeu = 0;
    }
}

export default function PaginaPrinciapal<T>(key: string, fallbackValue: T) {

    const router = useRouter();

    const [pessoas, setPessoas] = useState<PessoaEntidade[]>([]);

    const statusCompeticao = useMemo(() => {
        const pessoasQueComerao = pessoas.filter(pessoa => (pessoa?.qtdComeu || 0) > 0);

        if (pessoasQueComerao.length === 0) {
            return {
                status: 'NINGUEM'
            };
        }

        const candidatoAGanhador = pessoasQueComerao.reduce((a, b) => (a.qtdComeu || 0) > (b.qtdComeu || 0) ? a : b);
        const pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador = pessoasQueComerao.filter(pessoa => pessoa.qtdComeu === candidatoAGanhador.qtdComeu && pessoa.nome !== candidatoAGanhador.nome);



        const objetoCampeao2 = {
            status: 'EMPATE',
            pessoas: pessoasQueComerao

        };
        if (pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.length > 0) {
            localStorage.setItem("campeao", JSON.stringify(objetoCampeao2))
        }

        const objetoCampeao = {
            status: 'GANHADOR',
            pessoas: pessoasQueComerao
        };
        if (pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.length <= 0) {
            localStorage.setItem("campeao", JSON.stringify(objetoCampeao))
        }
        return objetoCampeao;

    }, [pessoas]);


    useEffect(() => {
        setPessoas(
            Array(Number(router.query.qtdParticipantes)).fill('').map((_, idx: number) => new PessoaEntidade(`Pessoa ${idx + 1}`))
        );
    }, []);


    useEffect(() => {
        let value
        value = localStorage.getItem("campeao") || ""
    }, [])

    const onAdicionar = () => {
        setPessoas([
            ...pessoas,
            new PessoaEntidade('Pessoa ' + (pessoas.length + 1))
        ])
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="flex flex-col justify-between  min-h-screen gap-4 bg-branco overflow-y-auto text-black">
            <Nav></Nav>

            {pessoas.map((pessoa, idx) => {
                return <Pessoa pessoa={pessoa} onChange={(novosDadosPessoa: PessoaEntidade) => {
                    pessoas[idx] = novosDadosPessoa;
                    setPessoas([...pessoas]);
                }}
                    onDelete={(index: number) => {
                        const novaListaPessoas = [...pessoas];
                        novaListaPessoas.splice(index, 1);
                        setPessoas(novaListaPessoas);
                    }}
                    index={idx}
                    />;
                })}
            <Adicionar onClick={onAdicionar} ></Adicionar>

            <div className="flex justify-center">
                <button onClick={openModal} className="botao h-16 w-60 rounded-3xl m-3 mt-7 flex justify-center items-center font-medium text-2xl">Compartilhar</button>
            </div>


            <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
                <EstiloModal funcaoFechar={closeModal}></EstiloModal >
            </ModalComponent>

            <div className="mb-5">
                <Mostrar participantes={1}></Mostrar>
            </div>
        </div>
    )
}