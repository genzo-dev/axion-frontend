"use client";

import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import LandingSectionWrapper from "../LandingSectionWrapper";
import StatusPhaseBadge from "../StatusPhaseBadge";

export default function PhasesSection() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <LandingSectionWrapper
      id="roadmap"
      className="flex flex-col lg:flex-row lg:gap-24 items-center lg:items-start lg:justify-between  py-24"
    >
      {isLg ? (
        <StickyBox offsetTop={120}>
          {" "}
          <div className="flex flex-col w-full lg:flex-1 2xl:max-w-1/2 items-start font-dm-sans pb-12 lg:pb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans ">
              O que está por vir
            </h2>
            <p className="">
              O projeto Axion está dividido em 6 fases (0 - 5), onde cada uma só
              deve ser implementada após a anterior ser concluída.
            </p>

            <p className="text-sm mt-4">
              <label className="text-primary">Status atual</label>: Atualmente o
              projeto concluiu a <strong>Fase 0</strong> e a{" "}
              <strong>Fase 1</strong> está sendo desenvolvimento.
            </p>
          </div>
        </StickyBox>
      ) : (
        <div className="flex flex-col w-full lg:flex-1 xl:max-w-1/2 items-start font-dm-sans pb-12 lg:pb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans text-start ">
            O que está por vir
          </h2>
          <p className="xl:max-w-1/2">
            O projeto Axion está dividido em 6 fases (0 - 5), onde cada uma só
            deve ser implementada após a anterior ser concluída.
          </p>

          <p className="text-sm xl:max-w-1/2 mt-4">
            <label className="text-primary">Status atual</label>: Atualmente o
            projeto concluiu a <strong>Fase 0</strong> e a{" "}
            <strong>Fase 1</strong> está sendo implementada.
          </p>
        </div>
      )}

      <div className="flex flex-col w-full xl:max-w-1/2 2xl:max-w-1/3 gap-4">
        <Accordion title="Fase 0 - Estrutura básica do projeto">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Antes de construir qualquer funcionalidade, foi preciso preparar o
              terreno. Esta fase estabeleceu toda a base técnica do projeto: a
              configuração dos ambientes de desenvolvimento, a escolha das
              tecnologias, a organização dos repositórios e a documentação
              inicial. Tudo isso para garantir que o Axion fosse construído
              sobre fundações sólidas — do backend ao frontend.
            </p>

            <StatusPhaseBadge status="CONCLUIDO" />
          </div>
        </Accordion>
        <Accordion title="Fase 1 - MVP (Produto Mínimo Viável)">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Aqui o Axion começa a ganhar vida. Estamos desenvolvendo as
              funcionalidades essenciais da plataforma: cadastro de usuários,
              autenticação segura, criação e gerenciamento de trilhas de estudo,
              além de interações como curtidas, comentários e favoritos. É a
              base que vai permitir que a comunidade comece a criar,
              compartilhar e descobrir conhecimento de forma organizada.
            </p>

            <StatusPhaseBadge status="EM ANDAMENTO" />
          </div>
        </Accordion>
        <Accordion title="Fase 2 - Apoio a criadores">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Criar conteúdo de qualidade exige dedicação. Nesta fase, vamos
              implementar um sistema que permite que a comunidade apoie
              financeiramente os criadores de trilhas — reconhecendo o valor de
              quem dedica tempo para organizar o conhecimento. Uma forma de
              manter o ecossistema sustentável e incentivar a produção de
              conteúdo de alto nível.
            </p>

            <StatusPhaseBadge status="PLANEJADO" />
          </div>
        </Accordion>
        <Accordion title="Fase 3 - Gamificação">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Estudar por conta própria requer disciplina, e um pouco de
              estímulo nunca é demais. Vamos transformar o aprendizado em uma
              jornada ainda mais engajante com um sistema de níveis, experiência
              (XP) e conquistas. Cada trilha concluída, cada interação — tudo
              vira progresso. Quanto mais você aprende, mais você evolui na
              plataforma.
            </p>

            <StatusPhaseBadge status="PLANEJADO" />
          </div>
        </Accordion>
        <Accordion title="Fase 4 - Grupos de estudo">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Aprender sozinho não significa aprender isolado. Esta fase vai
              conectar estudantes através de grupos de estudo com chat integrado
              — permitindo discussões, troca de conhecimento e colaboração em
              tempo real. Um espaço para aprender junto, mesmo que cada um
              esteja no seu próprio ritmo.
            </p>

            <StatusPhaseBadge status="PLANEJADO" />
          </div>
        </Accordion>
        <Accordion title="Fase 5 - Recomendação por IA (Inteligência Artificial)">
          <div className="flex flex-col gap-4 sm:gap-8">
            <p>
              Com o crescimento da plataforma, encontrar a trilha certa pode ser
              um desafio. É aqui que a inteligência artificial entra: um sistema
              de recomendação inteligente que vai sugerir trilhas personalizadas
              com base no seu histórico, interesses e nível de conhecimento.
              Descubra conteúdo relevante sem perder tempo procurando.
            </p>

            <StatusPhaseBadge status="PLANEJADO" />
          </div>
        </Accordion>
      </div>
    </LandingSectionWrapper>
  );
}
