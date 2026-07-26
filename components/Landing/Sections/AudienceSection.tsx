import clsx from "clsx";
import Image from "next/image";
import { FaBook } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import LandingSectionWrapper from "../LandingSectionWrapper";

export default function AudienceSection() {
  return (
    <LandingSectionWrapper id="audience">
      <div className="flex flex-col items-start py-12 lg:max-w-1/2 font-dm-sans">
        <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans md:text-center md:pt-12">
          Para quem é o Axion?
        </h2>
        <p>Feito por autodidatas, para autodidatas</p>
      </div>
      <div className="flex flex-col lg:gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-12 items-stretch">
          <div className="relative w-full h-64 sm:h-80 lg:h-full bg-white/10">
            <Image
              src="/images/students.jpg"
              alt="Estudantes buscando mais conhecimento"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className=" w-0.5 bg-primary hidden lg:block"></div>
          <div className="w-auto lg:w-full h-auto lg:h-90 mb-8 sm:mt-4 lg:mt-0">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={clsx(
                  "font-dm-sans bg-primary w-auto px-3 py-3 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
                )}
              >
                <FaBook size={24} />
              </div>
              <h3 className="font-dm-sans font-bold text-lg">
                Autodidatas e estudantes independentes
              </h3>
            </div>
            <p className="font-dm-sans">
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
            <div className="flex items-center gap-4 mb-8 lg:mt-0">
              <div
                className={clsx(
                  "font-dm-sans bg-primary w-auto px-3 py-3 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
                )}
              >
                <MdGroups2 size={24} />
              </div>
              <h3 className="font-dm-sans font-bold text-lg">
                Profissionais que buscam aprendizado contínuo
              </h3>
            </div>
            <p className="font-dm-sans">
              Você sabe que parar de aprender não é opção. Mas entre entregas e
              prazos, sobra pouco tempo para garimpar o que realmente vale a
              pena. O Axion entrega curadoria feita por quem domina o assunto —
              para você estudar no seu ritmo, sem perder tempo com conteúdo
              irrelevante. O próximo degrau da sua carreira está na próxima
              trilha certa.
            </p>
          </div>
          <div className=" w-0.5 bg-primary hidden lg:block lg:order-2"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-full bg-white/10 bg-white/10 order-1 lg:order-3">
            <Image
              src="/images/tests.jpg"
              alt="Profissional analisando materiais de estudo"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </LandingSectionWrapper>
  );
}
