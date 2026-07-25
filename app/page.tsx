import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Card from "@/components/Landing/Card";
import AudienceSection from "@/components/Landing/Sections/AudienceSection";
import CTASection from "@/components/Landing/Sections/CTASection";
import FunctionSection from "@/components/Landing/Sections/FunctionSection";
import HeroSection from "@/components/Landing/Sections/HeroSection";
import PhasesSection from "@/components/Landing/Sections/PhasesSection";
import ProblemSection from "@/components/Landing/Sections/ProblemSection";
import Navbar from "@/components/Navbar";
import { TextLoopCustom } from "@/components/TextLoopCustom";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaCalendar, FaCheck } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { RiProgress1Line, RiProgress6Line } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <ProblemSection />

      <FunctionSection />

      <AudienceSection />

      <CTASection />

      {/* TODO: CRIAR ROADMAP SECTION */}
      {/* <RoadmapSection /> */}

      <PhasesSection />

      {/* <section className="flex flex-col lg:flex-row lg:gap-24 items-center lg:items-start lg:justify-between px-6 sm:px-12 lg:px-10 2xl:px-40 py-24">
        <div className="flex flex-col w-full lg:flex-1 items-start font-manrope pb-12 lg:pb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-manrope md:text-center ">
            O que está por vir
          </h2>
          <p className="lg:max-w-1/2">
            O projeto Axion está divido em 6 fases (0 - 5), onde cada uma só
            deve ser implementada após a anterior ser concluída.
          </p>

          <p className="text-sm lg:max-w-1/2 mt-4">
            <label className="text-[#ff4f00]">Status atual</label>: Atualmente o
            projeto concluiu a Fase 0 e a Fase 1 está sendo implementada.
          </p>
     
        </div>

        <div className="flex flex-col w-full lg:flex-1 gap-4">
          <Accordion title="Fase 0 - Estrutura básica do projeto">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Antes de construir qualquer funcionalidade, foi preciso preparar
                o terreno. Esta fase estabeleceu toda a base técnica do projeto:
                a configuração dos ambientes de desenvolvimento, a escolha das
                tecnologias, a organização dos repositórios e a documentação
                inicial. Tudo isso para garantir que o Axion fosse construído
                sobre fundações sólidas — do backend ao frontend.
              </p>

              <label className="flex items-center justify-center gap-4 border border-transparent text-black w-full py-2 px-2 bg-[#ff4f00]">
                <FaCheck /> CONCLUÍDO
              </label>
            </div>
          </Accordion>
          <Accordion title="Fase 1 - MVP (Produto Mínimo Viável)">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Aqui o Axion começa a ganhar vida. Estamos desenvolvendo as
                funcionalidades essenciais da plataforma: cadastro de usuários,
                autenticação segura, criação e gerenciamento de trilhas de
                estudo, além de interações como curtidas, comentários e
                favoritos. É a base que vai permitir que a comunidade comece a
                criar, compartilhar e descobrir conhecimento de forma
                organizada.
              </p>

              <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-transparent">
                <RiProgress6Line /> EM ANDAMENTO
              </label>
            </div>
          </Accordion>
          <Accordion title="Fase 2 - Apoio a criadores">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Criar conteúdo de qualidade exige dedicação. Nesta fase, vamos
                implementar um sistema que permite que a comunidade apoie
                financeiramente os criadores de trilhas — reconhecendo o valor
                de quem dedica tempo para organizar o conhecimento. Uma forma de
                manter o ecossistema sustentável e incentivar a produção de
                conteúdo de alto nível.
              </p>

              <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-transparent">
                <FaCalendar /> PLANEJADO
              </label>
            </div>
          </Accordion>
          <Accordion title="Fase 3 - Gamificação">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Estudar por conta própria requer disciplina, e um pouco de
                estímulo nunca é demais. Vamos transformar o aprendizado em uma
                jornada ainda mais engajante com um sistema de níveis,
                experiência (XP) e conquistas. Cada trilha concluída, cada
                interação — tudo vira progresso. Quanto mais você aprende, mais
                você evolui na plataforma.
              </p>

              <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-transparent">
                <FaCalendar /> PLANEJADO
              </label>
            </div>
          </Accordion>
          <Accordion title="Fase 4 - Grupos de estudo">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Aprender sozinho não significa aprender isolado. Esta fase vai
                conectar estudantes através de grupos de estudo com chat
                integrado — permitindo discussões, troca de conhecimento e
                colaboração em tempo real. Um espaço para aprender junto, mesmo
                que cada um esteja no seu próprio ritmo.
              </p>

              <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-transparent">
                <FaCalendar /> PLANEJADO
              </label>
            </div>
          </Accordion>
          <Accordion title="Fase 5 - Recomendação por IA (Inteligência Artificial)">
            <div className="flex flex-col gap-4 sm:gap-8">
              <p>
                Com o crescimento da plataforma, encontrar a trilha certa pode
                ser um desafio. É aqui que a inteligência artificial entra: um
                sistema de recomendação inteligente que vai sugerir trilhas
                personalizadas com base no seu histórico, interesses e nível de
                conhecimento. Descubra conteúdo relevante sem perder tempo
                procurando.
              </p>

              <label className="flex items-center justify-center gap-4 border border-white/10  w-full py-2 px-2 bg-transparent">
                <FaCalendar /> PLANEJADO
              </label>
            </div>
          </Accordion>
        </div>
      </section> */}
    </>
  );
}
