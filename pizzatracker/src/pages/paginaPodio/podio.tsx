import Campeao from "@/components/podio/Podio";
import Nav from "@/components/geral/Nav";
import { useEffect, useState } from "react";
export default function PaginaCampeao() {

  const [resultado, setResultado] = useState<any>(null);

  useEffect(() => {
    const strCampeao = localStorage.getItem("campeao");
    if (strCampeao) {
      setResultado(JSON.parse(strCampeao));
    }

  }, [])

  return (
    <div className="flex flex-col  max-h-screen  bg-branco ">
      <Nav></Nav>
      {resultado?.pessoas && <Campeao pessoas={resultado.pessoas} />}
    </div>
  )
}
