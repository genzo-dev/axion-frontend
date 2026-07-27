import Logo from "../Logo";
import FooterLink from "../Links/FooterLink";

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
          <FooterLink blank href="https://www.linkedin.com/in/genzo-dev/">
            Gabriel Enzo (genzo-dev.)
          </FooterLink>
        </span>
        {/* <span className="">2026 © Todos os direitos reservados.</span> */}
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Institucional</label>
          <div className="flex flex-col gap-2 text-sm">
            <FooterLink href="/about">Sobre</FooterLink>
            <FooterLink href="/#purpose">Propósito</FooterLink>
            <FooterLink href="/#how-it-works">Funcionamento</FooterLink>
            <FooterLink href="/#audience">Público</FooterLink>
            <FooterLink href="/#roadmap">Roadmap</FooterLink>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Plataforma</label>
          <div className="flex flex-col gap-2 text-sm">
            <FooterLink href="/discover">Explorar trilhas</FooterLink>
            <FooterLink href="/trails/create">Criar trilha</FooterLink>
            <FooterLink href="/register">Cadastrar-se</FooterLink>
            <FooterLink href="/login">Entrar</FooterLink>
            <FooterLink href="/trails/favorite">Trilhas favoritas</FooterLink>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-lg mb-4">Ajuda</label>
          <div className="flex flex-col gap-2 text-sm">
            <FooterLink href="privacy-policy">
              Políticas de Privacidade
            </FooterLink>
            <FooterLink href="security">Segurança</FooterLink>
            <FooterLink href="terms-of-use">Termos de Uso</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
