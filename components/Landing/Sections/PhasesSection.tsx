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
          <div className="flex flex-col">
            <p>
              Antes de construir qualquer funcionalidade, foi preciso preparar o
              terreno. Esta fase estabeleceu a base técnica que será utilizada
              no <strong>Axion</strong>: as tecnologias escolhidas, a
              configuração dos ambientes, a estrutura do projeto e a
              documentação inicial.
            </p>

            <p className="mt-2">
              O foco foi estabelecer uma estrutura sólida para dar os primeiros
              passos no desenvolvimento do Axion e criar uma base capaz de
              acompanhar sua evolução.
            </p>

            <StatusPhaseBadge status="CONCLUIDO" className="mt-4 lg:mt-8" />
          </div>
        </Accordion>
        <Accordion title="Fase 1 - MVP (Produto Mínimo Viável)">
          <div className="flex flex-col">
            <p>
              Aqui o Axion começa a ganhar vida. Estamos desenvolvendo as
              funcionalidades essenciais da plataforma: cadastro de usuários,
              autenticação segura, criação e gerenciamento de trilhas de estudo,
              além de interações como curtidas, comentários e favoritos. É a
              base que vai permitir que a comunidade comece a criar,
              compartilhar e descobrir conhecimento por meio de trilhas de
              estudo.
            </p>

            <StatusPhaseBadge status="EM ANDAMENTO" className="mt-4 lg:mt-8" />
          </div>
        </Accordion>
        <Accordion title="Fase 2 - Apoio a criadores">
          <div className="flex flex-col">
            <p>
              Criar conteúdo de qualidade exige dedicação. Nesta fase, vamos
              implementar um sistema que permitirá à comunidade apoiar
              financeiramente outros criadores de trilhas, reconhecendo o valor
              de quem dedica tempo para organizar e compartilhar conhecimento.
            </p>

            <p className="mt-2">
              A iniciativa também busca contribuir para a sustentabilidade do
              ecossistema e incentivar a criação de conteúdos cada vez mais
              completos e relevantes.
            </p>

            <StatusPhaseBadge status="PLANEJADO" className="mt-4 lg:mt-8" />
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
          <div className="flex flex-col">
            <p>
              Ser independente em seus estudos não significa aprender sozinho.
              Esta fase busca ajudar a conectar estudantes através de grupos de
              estudo com chat integrado — permitindo discussões, troca de
              conhecimento e colaboração em tempo real. Um espaço para aprender
              junto, mesmo que cada um esteja no seu próprio ritmo.
            </p>

            <StatusPhaseBadge status="PLANEJADO" className="mt-4 lg:mt-8" />
          </div>
        </Accordion>
        <Accordion title="Fase 5 - Recomendação por IA (Inteligência Artificial)">
          <div className="flex flex-col">
            <p>
              Com o crescimento da plataforma, encontrar trilhas adequadas aos
              seus objetivos pode se tornar um desafio. É aqui que a
              inteligência artificial entra: um sistema de recomendação que vai
              sugerir trilhas personalizadas com base no seu histórico,
              interesses e nível de conhecimento. A ideia é ajudar você a
              descobrir conteúdos relevantes sem precisar perder tempo
              procurando entre tantas opções.
            </p>

            <StatusPhaseBadge status="PLANEJADO" className="mt-4 lg:mt-8" />
          </div>
        </Accordion>
      </div>
    </LandingSectionWrapper>
  );
}
