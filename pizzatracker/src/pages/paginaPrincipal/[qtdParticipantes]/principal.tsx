import Mostrar from "@/components/principal/Mostrar";
import Nav from "@/components/geral/Nav";
import Adicionar from "@/components/principal/Adicionar";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useMemo, useState } from "react";
import Pessoa from "@/components/principal/Pessoa";

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
        const pessoasEmpatadasQueNaoCompetemComOGanhador = pessoasQueComerao.filter(pessoa => pessoa.qtdComeu === pessoa.qtdComeu && pessoa.nome !== candidatoAGanhador.nome);;

        const objetoCampeao2 = {
            status: 'EMPATE',
            pessoas: [...pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador, candidatoAGanhador]
        };
        if (pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.length > 0) {
            localStorage.setItem("campeao", JSON.stringify(objetoCampeao2))
        }

        const objetoCampeao = {
            status: 'GANHADOR',
            pessoas: [candidatoAGanhador, pessoasEmpatadasQueNaoCompetemComOGanhador]
            // pessoas: [pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador]
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

        return (
            <div className="flex flex-col justify-between min-h-screen gap-5 bg-branco overflow-y-auto text-black">
                <Nav></Nav>
                {/* {JSON.stringify(pessoas)} */}
                {/* GANHADOR: {JSON.stringify(statusCompeticao)} */}

                {pessoas.map((pessoa, idx) => {
                    return <Pessoa pessoa={pessoa} onChange={(novosDadosPessoa: PessoaEntidade) => {
                        pessoas[idx] = novosDadosPessoa;
                        setPessoas([...pessoas]);
                    }} ></Pessoa>;
                })}

                <Adicionar></Adicionar>
                <Mostrar participantes={'a'}></Mostrar>
            </div>
        )
    }