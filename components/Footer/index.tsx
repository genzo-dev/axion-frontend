import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between px-6 sm:px-12 lg:px-10 2xl:px-120 py-24 bg-black font-dm-sans">
      <div className="flex flex-col text-xs sm:text-sm mb-12 md:mb-0">
        <Logo />
        <span className="my-4">
          Bem-vindo ao Axion — onde o conhecimento <br />
          se encontra em trilhas.
        </span>

        <span className="">
          Desenvolvido por{" "}
          <Link
            target="_blanck"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/genzo-dev/"
            className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
          >
            Gabriel Enzo (genzo-dev.)
          </Link>
        </span>
        {/* <span className="">2026 © Todos os direitos reservados.</span> */}
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Institucional</label>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="about"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Sobre
            </Link>
            <Link
              href="/#purpose"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Propósito
            </Link>
            <Link
              href="/#how-it-works"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Funcionamento
            </Link>
            <Link
              href="/#audience"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Público
            </Link>
            <Link
              href="/#roadmap"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Roadmap
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Plataforma</label>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="/discover"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Explorar trilhas
            </Link>
            <Link
              href="/trails/create"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Criar trilha
            </Link>
            <Link
              href="/register"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Cadastrar-se
            </Link>
            <Link
              href="/login"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Entrar
            </Link>
            <Link
              href="/trails/favorite"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Trilhas favoritas
            </Link>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Ajuda</label>
          <div className="flex flex-col gap-2 text-sm">
            <Link
              href="privacy-policy"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Políticas de Privacidade
            </Link>
            <Link
              href="security"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Segurança
            </Link>
            <Link
              href="terms-of-use"
              className="brightness-75 hover:brightness-100 hover:text-[#ff4f00]"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
