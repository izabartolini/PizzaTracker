import { useEffect, useState } from "react";
import Podio from "@/components/podio/Podio";
import ModalComponent from "@/components/modalComponent/modalComponent";
import Link from "next/link";
import EstiloModal from "@/components/modalComponent/modalEstilo";
import Nav from "@/components/geral/Nav";
export default function PaginaCampeao() {

  const [resultado, setResultado] = useState<any>(null);

  useEffect(() => {
    const strCampeao = localStorage.getItem("campeao");
    if (strCampeao) {
      setResultado(JSON.parse(strCampeao));
    }

  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen  bg-white items-center">

      <Nav></Nav>

      {resultado?.pessoas && <Podio pessoas={resultado.pessoas} />}

      <button onClick={openModal} className="botao h-16 w-60 rounded-3xl m-3 mt-7 flex justify-center items-center font-medium text-2xl">Compartilhar</button>

      <Link
        className="botao h-16 w-40 rounded-3xl m-3 flex justify-center items-center font-medium text-2xl"
        href={`/`}
      >
        Voltar
      </Link>

        <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
          <EstiloModal funcaoFechar={closeModal}></EstiloModal >
        </ModalComponent>
    </div>
  )
}
