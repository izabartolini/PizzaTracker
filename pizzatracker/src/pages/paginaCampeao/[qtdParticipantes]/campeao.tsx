import Campeao from "@/components/campeao/Campeao";
import Nav from "@/components/geral/Nav";

export default function PaginaCampeao() {
  return (
    <div className="flex flex-col  max-h-screen  bg-branco ">
      <Nav></Nav>
      <Campeao></Campeao>
    </div>
  )
}
