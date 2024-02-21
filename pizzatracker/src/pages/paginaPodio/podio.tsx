import { useEffect, useState } from "react";
import Podio from "@/components/podio/Podio";
import Link from "next/link";
import Nav from "@/components/geral/Nav";
export default function PaginaCampeao() {

  const [resultado, setResultado] = useState<any>(null);

  useEffect(() => {
    const strCampeao = localStorage.getItem("campeao");
    if (strCampeao) {
      setResultado(JSON.parse(strCampeao));
    }

  }, [])


  return (
    <div className="flex flex-col min-h-screen  bg-white items-center">

      <Nav></Nav>

      {resultado?.pessoas && <Podio pessoas={resultado.pessoas} />}

      <Link
        className="botao h-16 w-40 rounded-3xl m-3 flex justify-center items-center font-medium text-2xl"
        href={`/`}
      >
        Voltar
      </Link>

        
    </div>
  )
}
