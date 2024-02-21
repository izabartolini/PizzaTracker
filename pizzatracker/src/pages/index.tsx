import Nav from "@/components/geral/Nav";
import TelaInicial from "@/components/inicial/TelaInicial";

export default function PaginaInicial() {
  return (

    <div className="flex flex-col  min-h-screen  bg-branco ">
      <Nav></Nav>
      <TelaInicial></TelaInicial>
    </div>
  )
}
