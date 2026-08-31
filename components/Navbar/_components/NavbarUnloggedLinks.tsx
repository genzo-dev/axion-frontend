import Link from "next/link";

export default function NavbarUnloggedLinks() {
  return (
    <>
      <Link
        href="/register"
        className="font-dm-sans w-full lg:w-auto border border-white/10 bg-transparent hover:bg-primary px-3 py-2 lg:py-1.5 font-bold lg:font-normal text-sm xl:text-base text-white hover:text-black transition"
      >
        Cadastrar-se
      </Link>
      <Link
        href="/login"
        className="font-dm-sans w-full lg:w-auto border border-transparent bg-primary hover:brightness-75 px-3 py-2 lg:py-1.5 font-bold lg:font-normal text-sm xl:text-base text-black transition"
      >
        Entrar
      </Link>
    </>
  );
}
