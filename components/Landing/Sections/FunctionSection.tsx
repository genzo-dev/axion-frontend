import Card from "../Card";

export default function FunctionSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-30 flex flex-col items-center py-12 px-6 sm:px-12 lg:px-10 2xl:px-40 gap-8"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl/relaxed font-bold font-dm-sans text-center py-12">
        Como o Axion vai funcionar?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 font-dm-sans">
        <Card title="1. Crie sua trilha" url="#">
          {" "}
          <p className="mb-4 text-sm">
            Monte roteiros de estudo com módulos, links e recursos. Pode ser um
            guia público para a comunidade ou seu registro pessoal privado.
          </p>
        </Card>
        <Card title="2. Compartilhe conhecimento" url="#">
          {" "}
          <p className="mb-4 text-sm">
            Publique sua trilha para que a comunidade possa interagir, ajudando
            outros autodidatas a encontrar o caminho certo.
          </p>
          <p className="text-sm">
            <strong className="text-[#ff4f00]">Futuro:</strong> sistema de apoio
            financeiro para usuários criadores e gamificação com XP e
            conquistas.
          </p>
        </Card>
        <Card title="3. Estude no seu ritmo" url="#">
          {" "}
          <p className="mb-4 text-sm">
            Siga trilhas curadas pela comunidade, marque seu progresso e evolua
            com conteúdo organizado por quem entende do assunto.
          </p>
          <p className="text-sm">
            <strong className="text-[#ff4f00]">Futuro:</strong> grupos de estudo
            com chat para aprendizado colaborativo e recomendação por IA para
            descobrir novas trilhas.
          </p>
        </Card>

        <div className="flex flex-col justify-center itens-center hover:scale-105 transition text-black font-black w-full bg-[#ff4f00] border border-transparent px-4 py-6">
          <h3 className="text-3xl/loose mb-4 font-extrabold">Axion</h3>
          <span className="text-lg">
            Pequena partícula, grande universo. Cada trilha no Axion sustenta um
            cosmos de conhecimento.
          </span>
        </div>
      </div>
    </section>
  );
}
