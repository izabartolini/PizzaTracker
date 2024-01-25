import Mostrar from "@/components/principal/Mostrar";
import Nav from "@/components/geral/Nav";
import Adicionar from "@/components/principal/Adicionar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Pessoa from "@/components/principal/Pessoa";

export class PessoaEntidade {
    public nome?: string = "";
    public qtdComeu: number = 0;

    constructor(_nome: string) {
        this.nome = _nome;
        this.qtdComeu = 0;
    }
}

export default function PaginaPrinciapal() {

    const router = useRouter();

    const [ pessoas, setPessoas ] = useState<PessoaEntidade[]>([]);

    // const statusCompeticao = useMemo(() => {
    //     const pessoasQueComerao = pessoas.filter(pessoa => (pessoa?.qtdComeu || 0) > 0);
    //     if(pessoasQueComerao.length == 0) {
    //         return {
    //             status: 'NINGUEM'
    //         };
    //     }
    //     const candidatoAGanhador = pessoasQueComerao.sort((a,b) => a.qtdComeu - b.qtdComeu)[0];
    //     const pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador: PessoaEntidade[] = pessoasQueComerao.filter(pessoa => pessoa.qtdComeu == candidatoAGanhador.qtdComeu && pessoa.nome != candidatoAGanhador.nome)

    //     if(pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.length > 0) {
    //         pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.push(candidatoAGanhador)
    //         return {
    //             status: 'EMPATE',
    //             pessoas: pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador
    //         }
    //     }

    //     return { status: 'GANHADOR', pessoas :candidatoAGanhador}

    // }, [ pessoas ])

    const statusCompeticao = useMemo(() => {
        const pessoasQueComerao = pessoas.filter(pessoa => (pessoa?.qtdComeu || 0) > 0);
    
        if (pessoasQueComerao.length === 0) {
            return {
                status: 'NINGUEM'
            };
        }
    
        const candidatoAGanhador = pessoasQueComerao.reduce((a, b) => (a.qtdComeu || 0) > (b.qtdComeu || 0) ? a : b);
        const pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador = pessoasQueComerao.filter(pessoa => pessoa.qtdComeu === candidatoAGanhador.qtdComeu && pessoa.nome !== candidatoAGanhador.nome);
    
        if (pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador.length > 0) {
            return {
                status: 'EMPATE',
                pessoas: [...pessoasQueComeramAMesmaQuantidadeDoCandidatoGanhador, candidatoAGanhador]
            };
        }
    
        return {
            status: 'GANHADOR',
            pessoas: [candidatoAGanhador]
        };
    
    }, [pessoas]);
    

    useEffect(() => {
        setPessoas(
            Array(Number(router.query.qtdParticipantes)).fill('').map((_,idx: number) => new PessoaEntidade(`Pessoa ${idx+1}`))
        );
    }, []);

    return (
        <div className="flex flex-col justify-between min-h-screen gap-5 bg-branco overflow-y-auto text-black">
            <Nav></Nav>

            {JSON.stringify(pessoas)}
<br/>
            GANHADOR: {JSON.stringify(statusCompeticao)}

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