export default function ProblemSection() {
  return (
    <section
      id="purpose"
      className=" scroll-mt-30 flex flex-col gap-4 lg:gap-4 bg-[#FAF9F6] rounded-lg -translate-y-40 -mb-40 mx-6 sm:mx-12 lg:mx-6 2xl:mx-40 px-4 pt-4 pb-6"
    >
      <div>
        <h2 className="border-b-2 border-black text-black text-2xl/relaxed md:text-3xl/relaxed lg:text-4xl/relaxed font-dm-sans font-bold">
          Por que o Axion existe?
        </h2>

        <p className="font-dm-sans text-black text-lg mt-4 text-justify">
          Estudantes independentes possuem disciplina para estudar, mas muitas
          vezes perdem tempo filtrando conteúdos, avaliando sua qualidade e
          tentando descobrir como organizá-los em uma sequência de aprendizado.
          <br className="block md:hidden mb-2" /> O <strong>Axion</strong> surge
          como uma tentativa de solucionar esse problema acreditando na
          inteligência coletiva e colaborativa da comunidade: pessoas que estão
          em busca de aprender e que também podem ajudar outras a encontrarem e
          seguirem boas trilhas de estudo.
        </p>
      </div>

      <div>
        <h3 className="border-b-2  border-black text-black text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-dm-sans font-bold">
          Plataformas tradicionais possuem um modelo centralizado
        </h3>

        <p className="font-dm-sans text-black text-lg mt-4 text-justify">
          Plataformas como Udemy, Coursera e Alura centralizam a criação e
          publicação de cursos em instrutores e produtores selecionados. Esse
          modelo funciona bem para oferecer conteúdos estruturados, mas não
          possui como proposta central permitir que os próprios estudantes
          construam e organizem trilhas de aprendizado de forma colaborativa.
        </p>
      </div>

      <div>
        <h3 className="border-b-2 border-black text-black text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-dm-sans font-bold">
          Falta organização
        </h3>

        <p className="font-dm-sans text-black text-lg mt-4 text-justify">
          Existem diversos meios pelos quais estudantes compartilham
          conhecimento e organizam seus estudos: playlists e cursos no YouTube,
          anotações e páginas no Notion, artigos no Medium, entre diversos
          outros.
          <br className="block mb-2" />
          Esses recursos podem ser muito úteis, mas normalmente estão espalhados
          por diferentes plataformas e não têm como foco central a construção
          colaborativa de trilhas de aprendizado. Como consequência, o estudante
          ainda precisa encontrar, avaliar e organizar os conteúdos por conta
          própria para criar uma sequência de estudos coerente.
        </p>

        <p className="font-dm-sans text-black border-b-2 border-primary sm:text-lg lg:text-xl font-bold mt-4">
          O Axion nasce para resolver esses três problemas de uma vez.
        </p>
      </div>
    </section>
  );
}
