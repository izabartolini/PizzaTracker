import Mostrar from "@/components/inicial/Mostrar";
import Nav from "@/components/inicial/Nav";
import Pessoa from "@/components/inicial/Pessoa";

export default function PaginaInicial(){
    return(
        <div className="flex justify-center flex-col h-screen ">
            <Nav></Nav>
            <Pessoa nome="fauwge"></Pessoa>
            <Mostrar></Mostrar>
        </div>
    )
}