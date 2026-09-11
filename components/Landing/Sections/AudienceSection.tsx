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
        <p>Feito por estudantes, para estudantes</p>
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
            <div className="flex items-center gap-4 mb-4 lg:mb-8">
              <div
                className={clsx(
                  "font-dm-sans bg-primary w-auto px-3 py-3 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-black transition",
                )}
              >
                <FaBook size={24} />
              </div>
              <h3 className="font-dm-sans font-bold text-lg">
                Estudantes independentes
              </h3>
            </div>
            <p className="font-dm-sans mb-2">
              Você já sabe que consegue estudar sem a necessidade de uma sala de
              aula ou de um professor te auxiliando o tempo inteiro. Sua
              curiosidade e vontade de aprender te permitem isso. Mas também
              sabe o quão vasto é o conteúdo disponível na internet. Que tal uma
              plataforma que busca organizar esses conteúdos com base na
              experiência de outros estudantes como você?
            </p>

            <p className="font-dm-sans">
              Pessoas que já percorreram diferentes caminhos de aprendizado e
              podem compartilhar o que funcionou para elas, ajudando você a
              encontrar uma sequência de estudos que faça sentido para os seus
              objetivos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 lg:gap-12 items-stretch">
          <div className="w-auto lg:w-full h-auto lg:h-90 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4 lg:mb-8">
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
              Parar de aprender não é uma opção. O mundo está em constante
              mudança e, mesmo para quem já está consolidado em sua área, novas
              tecnologias, ferramentas e conhecimentos surgem o tempo todo. O
              Axion também é para você. Encontre trilhas criadas por outros
              estudantes e profissionais, compartilhe aquilo que você já
              aprendeu e continue construindo seu conhecimento ao longo da
              carreira.
            </p>
          </div>
          <div className=" w-0.5 bg-primary hidden lg:block lg:order-2"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-full bg-white/10 bg-white/10 order-1 lg:order-3">
            <Image
              src="/images/pro-studies.jpg"
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
