import Mostrar from "@/components/inicial/Mostrar";
import Nav from "@/components/geral/Nav";
import Pessoa from "@/components/inicial/Pessoa";
import Adicionar from "@/components/inicial/Adicionar";

export default function PaginaInicial(){
    return(
        <div className="flex flex-col justify-between min-h-screen gap-5 bg-branco overflow-y-auto">
            <Nav></Nav>
            <Pessoa nome="HA"></Pessoa>
            <Pessoa nome="HAHAHA"></Pessoa>
            <Pessoa nome="AHAHAHAHAH"></Pessoa>
            <Pessoa nome="fauwge"></Pessoa>
            <Pessoa nome="fauwge"></Pessoa>
            <Adicionar></Adicionar>
            <Mostrar></Mostrar>
        </div>
    )
}