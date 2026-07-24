import clsx from "clsx";
import Image from "next/image";
import { FaBook } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

export default function AudienceSection() {
  return (
    <div className="px-6 sm:px-12 lg:px-10 2xl:px-40">
      <div className="flex flex-col items-start py-12 lg:max-w-1/2 font-manrope">
        <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-manrope md:text-center md:pt-12">
          Para quem é o Axion?
        </h2>
        <p>Feito por autodidatas, para autodidatas</p>
        {/* <p>
          Feito por autodidatas, para autodidatas — uma plataforma construída
          por quem estuda de verdade, para quem estuda de verdade.
          </p> */}
      </div>
      <div className="flex flex-col lg:gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-12 items-stretch">
          <div className="relative w-full h-full bg-white/10">
            <Image
              src="/students.jpg"
              alt="sla"
              fill
              className="object-cover"
            />
          </div>
          <div className=" w-0.5 bg-[#ff4f00] hidden lg:block"></div>
          <div className="w-auto lg:w-full h-auto lg:h-90 mb-8 sm:mt-4 lg:mt-0">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={clsx(
                  "font-manrope bg-[#ff4f00] w-auto px-3 py-3 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
                )}
              >
                <FaBook size={24} />
              </div>
              <h3 className="font-manrope font-bold text-lg">
                Autodidatas e estudantes independentes
              </h3>
            </div>
            <p className="font-manrope">
              Você aprendeu cedo que não precisa de permissão para estudar. Mas
              aprender sozinho não significa aprender desorganizado. O Axion é o
              mapa que transforma a sopa de abas e links soltos em uma jornada
              clara — construída por quem também estuda de verdade. Menos tempo
              filtrando, mais tempo aprendendo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 lg:gap-12 items-stretch">
          <div className="w-auto lg:w-full h-auto lg:h-90 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-8 sm:mt-4 lg:mt-0">
              <div
                className={clsx(
                  "font-manrope bg-[#ff4f00] w-auto px-3 py-3 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
                )}
              >
                <MdGroups2 size={24} />
              </div>
              <h3 className="font-manrope font-bold text-lg">
                Profissionais que buscam aprendizado contínuo
              </h3>
            </div>
            <p className="font-manrope">
              Você sabe que parar de aprender não é opção. Mas entre entregas e
              prazos, sobra pouco tempo para garimpar o que realmente vale a
              pena. O Axion entrega curadoria feita por quem domina o assunto —
              para você estudar no seu ritmo, sem perder tempo com conteúdo
              irrelevante. O próximo degrau da sua carreira está na próxima
              trilha certa.
            </p>
          </div>
          <div className=" w-0.5 bg-[#ff4f00] hidden lg:block lg:order-2"></div>
          <div className="relative w-full h-full bg-white/10 order-1 lg:order-3">
            <Image src="/tests.jpg" alt="sla" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
