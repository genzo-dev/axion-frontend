export default function ProblemSection() {
  return (
    <section
      id="problema"
      className=" scroll-mt-30 flex flex-col gap-2 lg:gap-4 bg-neutral-100 rounded-lg -translate-y-10 -mb-10 mx-6 sm:mx-12 lg:mx-6 2xl:mx-40 px-4 pt-2 pb-6"
    >
      <div>
        <h2 className="border-b-2 border-black text-black text-2xl/relaxed md:text-3xl/relaxed lg:text-4xl/relaxed font-manrope font-bold">
          Por que o Axion existe?
        </h2>

        <p className="font-manrope text-black text-lg mt-4">
          Autodidatas têm disciplina para estudar, mas perdem tempo filtrando
          conteúdo duvidoso. As plataformas tradicionais são fechadas — apenas
          instrutores aprovados podem criar conteúdo, ignorando a inteligência
          coletiva da comunidade. Não existe um espaço onde aprendizes
          organizem, compartilhem e descubram trilhas curadas por outros
          autodidatas como eles.
        </p>
      </div>

      <div>
        <h3 className="border-b-2 border-black text-black text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-manrope font-bold">
          Plataformas tradicionais são fechadas
        </h3>

        <p className="font-manrope text-black text-lg mt-4">
          Udemy, Coursera, Alura — todas têm algo em comum: apenas instrutores
          aprovados podem criar cursos. Um engenheiro sênior que domina um
          tópico nichado não pode compartilhar seu conhecimento sem passar por
          um processo burocrático.
        </p>
      </div>

      <div>
        <h3 className="border-b-2 border-black text-black text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-manrope font-bold">
          Autodidatas perdem tempo filtrando
        </h3>

        <p className="font-manrope text-black text-lg mt-4">
          Sem curadoria comunitária, cada estudante refaz o trabalho de filtro
          que outros já fizeram. O resultado? Horas perdidas entre abas do
          navegador e anotações soltas.
        </p>
      </div>

      <div>
        <h3 className="border-b-2 border-black text-black text-xl/relaxed md:text-2xl/relaxed lg:text-3xl/relaxed font-manrope font-bold">
          Falta organização
        </h3>

        <p className="font-manrope text-black text-lg mt-4">
          Um tutorial no YouTube, um artigo no Medium, uma documentação oficial
          — cada peça do aprendizado está num canto diferente. Não existe um fio
          condutor que transforme esses fragmentos em uma jornada coerente.
        </p>

        <p className="font-manrope text-black border-b-2 border-[#ff4f00] sm:text-lg font-bold mt-4">
          O Axion nasce para resolver esses três problemas de uma vez.
        </p>
      </div>
    </section>
  );
}
