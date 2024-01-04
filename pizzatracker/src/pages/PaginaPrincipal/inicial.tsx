import Nav from "@/components/inicial/Nav";
import Pessoa from "@/components/inicial/Pessoa";

export default function PaginaInicial(){
    return(
        <div className="flex justify-center flex-col h-screen ">
            <Nav></Nav>
            <Pessoa></Pessoa>
        </div>
    )
}