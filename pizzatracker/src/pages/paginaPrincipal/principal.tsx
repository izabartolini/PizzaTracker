import Mostrar from "@/components/principal/Mostrar";
import Nav from "@/components/geral/Nav";
import Pessoa from "@/components/principal/Pessoa";
import Adicionar from "@/components/principal/Adicionar";

export default function PaginaPrinciapal(){
    interface PrincipalProps{
        nome: string;
    }
    
    return(
        <div className="flex flex-col justify-between min-h-screen gap-5 bg-branco overflow-y-auto">
            <Nav></Nav>
            <Pessoa nome="{}"></Pessoa>
            <Pessoa nome="HAHAHA"></Pessoa>
            <Pessoa nome="AHAHAHAHAH"></Pessoa>
            <Pessoa nome="fauwge"></Pessoa>
            <Pessoa nome="fauwge"></Pessoa>
            
            
            <Adicionar></Adicionar>
            <Mostrar></Mostrar>
        </div>
    )
}