import { DefaultButton } from "@/components/Buttons/DefaultButton";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-16 gap-8 lg:gap-12 mt-24 w-full bg-primary font-dm-sans text-black">
      <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:5xl">
        Pronto para começar a criar suas trilhas?
      </h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/trails/create">
          <DefaultButton
            variant="contrast"
            className="px-12! border-transparent!"
          >
            Criar Trilha
          </DefaultButton>
        </Link>

        <p className="text-base">
          <strong>Obs</strong>: atualmente o Axion está em desenvolvimento
        </p>
      </div>
    </section>
  );
}
