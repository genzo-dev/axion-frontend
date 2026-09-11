import Accordion from "@/components/Accordion";
import FooterLink from "@/components/Links/FooterLink";

export default function AboutPage() {
  return (
    <div className="py-35 px-6 sm:px-12 lg:px-10 2xl:px-40">
      <h1 className="text-4xl/relaxed font-bold">Sobre o Axion</h1>
      <span className="text-sm">Última atualização: 26/07/2026</span>
      <div className="h-px w-full bg-primary my-8"></div>
      <section className="my-8">
        <h1 className="text-2xl/relaxed font-bold">
          Por que &quot;Axion&quot;?
        </h1>
        <p className="mt-4">
          Na física, o áxion é uma partícula elementar hipotética proposta nos
          anos 1970 para resolver um problema da cromodinâmica quântica (a tal
          &quot;CP forte&quot;). Com o tempo, os físicos perceberam que, se o
          áxion realmente existir, ele pode ser o principal componente da
          matéria escura — aquela substância invisível que compõe cerca de 85%
          de toda a matéria do universo. O áxion é pequeno. É invisível. É
          hipotético. Mas, segundo a teoria, é ele que sustenta a estrutura do
          cosmos.
        </p>
        <p className="mt-4">
          O Axion — a plataforma — se inspira nessa partícula. Cada trilha de
          conhecimento aqui é como um universo formado por pequenas unidades
          (vídeos, artigos, textos, exercícios) que, juntas, sustentam uma
          grande jornada de aprendizado. Cada trilha no Axion sustenta um cosmos
          de conhecimento.
        </p>
      </section>

      <div className="flex flex-col gap-4">
        <section>
          <Accordion reverse titleSize="xl" title="O problema">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                O <strong>Axion</strong> busca solucionar um problema cada vez
                mais comum para quem aprende de forma independente: a
                dificuldade de transformar a enorme quantidade de conteúdo
                disponível na internet em um caminho de aprendizado claro e
                organizado. Encontrar bons materiais é apenas uma parte do
                processo; também é necessário avaliar sua qualidade, descobrir
                quais conteúdos estudar primeiro e entender como eles se
                conectam. Além disso, esses recursos estão espalhados por
                diferentes plataformas, como YouTube, blogs, cursos e
                ferramentas de anotações. O Axion reúne esses caminhos em
                trilhas de estudo construídas e compartilhadas pela própria
                comunidade, permitindo que a experiência de quem já percorreu
                determinado caminho possa ajudar outros estudantes a
                economizarem tempo e encontrarem melhores formas de aprender.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion reverse titleSize="xl" title="Como funciona">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                O Axion é uma plataforma aberta onde estudantes criam,
                compartilham e descobrem trilhas de aprendizado. Diferente dos
                cursos tradicionais, aqui você monta sua própria jornada com o
                melhor conteúdo que a internet já tem — e ainda ajuda outros a
                aprenderem.
              </p>
              <p>
                Você cria roteiros de estudo com módulos, links e recursos —
                pode ser público para a comunidade ou seu registro pessoal
                privado. Depois, publica sua trilha para que outros possam
                curtir, comentar e favoritar, ajudando outros estudantes a
                encontrar o caminho certo. Por fim, você segue trilhas curadas
                por quem entende do assunto, marca seu progresso e evolui no seu
                próprio ritmo.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion reverse titleSize="xl" title="Valores">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                Acreditamos que conhecimento bom é conhecimento compartilhado. O
                Axion é uma plataforma aberta — qualquer pessoa pode criar
                trilhas, contribuir com a comunidade e aprender sem barreiras.
                Se você domina um assunto, você pode ensinar.
              </p>
              <p>
                O melhor filtro de conteúdo é quem já estudou o assunto. No
                Axion, a comunidade decide o que é relevante através de
                curtidas, comentários e favoritos. Qualidade emerge da
                colaboração, não de um departamento editorial.
              </p>

              <p>
                Cada pessoa tem seu próprio tempo de aprendizado e o Axion
                respeita isso — sem prazos apertados, sem grades fixas, sem
                pressão. Estude quando puder, como puder, no ritmo que funciona
                para você.
              </p>

              <p>
                Criar conteúdo de qualidade exige dedicação. Por isso, o Axion
                vai implementar um sistema de apoio financeiro para que a
                comunidade possa reconhecer e incentivar quem dedica tempo a
                organizar o conhecimento para os outros.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion reverse titleSize="xl" title="Para quem é">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                Estudantes independentes que aprenderam cedo que não precisam de
                permissão para estudar. Profissionais em aprendizado contínuo
                que, entre entregas e prazos, querem conteúdo curado sem perder
                tempo garimpando. Educadores e criadores que têm conhecimento
                para compartilhar e buscam um espaço para criar trilhas e
                alcançar quem realmente quer aprender. Curiosos que simplesmente
                gostam de aprender coisas novas, sem compromisso com grade
                curricular.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion reverse titleSize="xl" title="Fases do projeto">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                O projeto Axion está dividido em 6 fases, da Fase 0 à Fase 5,
                onde cada uma só deve ser implementada após a anterior ser
                concluída.
              </p>
              <p>
                A Fase 0, já concluída, estabeleceu toda a base técnica do
                projeto — configuração de ambientes, escolha das tecnologias,
                organização dos repositórios e documentação inicial. A Fase 1,
                atualmente em andamento, é o MVP — cadastro de usuários,
                autenticação, criação e gerenciamento de trilhas, curtidas,
                comentários e favoritos. A Fase 2 vai implementar um sistema de
                apoio financeiro para criadores de trilhas. A Fase 3 trará
                gamificação com níveis, XP e conquistas. A Fase 4 vai conectar
                estudantes através de grupos de estudo com chat integrado. E a
                Fase 5 vai usar inteligência artificial para recomendar trilhas
                personalizadas com base no histórico e interesses de cada
                usuário.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion reverse titleSize="xl" title="Tecnologias">
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                O frontend usa Next.js com App Router, React, TypeScript e
                Tailwind CSS v4. O backend é construído em Node.js. O design
                system é próprio, com variáveis CSS centralizadas. O frontend
                está deployado na Vercel. O código é open source e pode ser
                acompanhado nos repositórios do GitHub.
              </p>
            </div>
          </Accordion>
        </section>

        <section>
          <Accordion
            reverse
            titleSize="xl"
            title="Quem está por trás do Axion?"
          >
            <div className="flex flex-col gap-4 text-sm lg:text-base">
              <p>
                O Axion nasceu como Trabalho de Conclusão de Curso (TCC) de
                Gabriel Enzo (genzo-dev), desenvolvedor fullstack apaixonado por
                aprendizado autodidata.
              </p>

              <div className="flex flex-col gap-2">
                <span>
                  LinkedIn:{" "}
                  <FooterLink
                    blank
                    href="https://www.linkedin.com/in/genzo-dev/"
                  >
                    https://www.linkedin.com/in/genzo-dev/
                  </FooterLink>
                </span>

                <span>
                  GitHub:{" "}
                  <FooterLink blank href="https://github.com/genzo-dev">
                    https://github.com/genzo-dev
                  </FooterLink>
                </span>
              </div>
            </div>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
