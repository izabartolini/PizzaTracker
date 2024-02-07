import { useEffect, useState } from "react";
import Podio from "@/components/podio/Podio";
export default function PaginaCampeao() {

  const [resultado, setResultado] = useState<any>(null);

  useEffect(() => {
    const strCampeao = localStorage.getItem("campeao");
    if (strCampeao) {
      setResultado(JSON.parse(strCampeao));
    }

  }, [])

  return (
    <div className="flex flex-col  min-h-screen  bg-branco ">
      {resultado?.pessoas && <Podio pessoas={resultado.pessoas} />}
    </div>
  )
}
