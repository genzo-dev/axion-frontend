import { getCurrentUser } from "@/lib/user/get-current-user";
import { Metadata } from "next";
import UserProfileCard from "./_components/UserProfileCard";
import InfoSectionSelector from "../../../../components/InfoSectionSelector";
import InputText from "@/components/Inputs/InputText";
import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { TbUserEdit } from "react-icons/tb";
import { formatDistanceToNow } from "@/utils/format-datetime";

type ProfileSection = "profile" | "trails";

const sections = [
  {
    label: "Meu Perfil",
    value: "profile",
    href: "?section=profile",
  },
  {
    label: "Minhas Trilhas",
    value: "trails",
    href: "?section=trails",
  },
];

export const metadata: Metadata = {
  title: "Meu Perfil",
};

export default async function AuthenticatedUserPage({
  searchParams,
}: {
  searchParams: Promise<{ section?: ProfileSection }>;
}) {
  const user = await getCurrentUser();

  const userHasDescrition = Boolean(user?.description);
  const userCreated = formatDistanceToNow(user?.createdAt || "");

  const { section } = await searchParams;

  return (
    <>
      <UserProfileCard user={user} />
      <div className="mt-12">
        <InfoSectionSelector
          activeSection={section ?? "profile"}
          sections={sections}
        />
        {/* TODO: Criar uma seção separada para cada seção do perfil. Atualmente
        possuindo Meu Pefil e Minhas Trilhas, mas deve permitir a inclusão de novas seções */}

        {section === "profile" && (
          <section className="flex flex-col gap-4 sm:gap-6 bg-white/5 border border-white/10 px-6 sm:px-10 py-6 mt-4 min-h-60">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-12">
              <div className="flex flex-col">
                <label>Nome:</label>
                <span className="border border-white/10 bg-black  px-2 py-1 mt-1">
                  {user?.name}
                </span>
              </div>

              <div className="flex flex-col">
                <label>Nome de usuário:</label>
                <span className="border border-white/10 bg-black px-2 py-1 mt-1">
                  @{user?.username}
                </span>
              </div>

              <div className="flex flex-col">
                <label>E-mail:</label>
                <span className="border border-white/10 bg-black  px-2 py-1 mt-1">
                  {user?.email}
                </span>
              </div>

              <div className="flex flex-col">
                <label>Participa</label>
                <span className="border border-transparent py-1 mt-1 font-bold">
                  {userCreated.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Descrição:</label>

              <span className="flex flex-col items-center justify-center border border-white/10 bg-black px-6 sm:px-2 py-1 mt-1 min-h-60 text-center">
                {userHasDescrition ? (
                  user?.description
                ) : (
                  <span className="text-white/60 text-sm">
                    Você ainda não criou uma descrição para o seu perfil
                    <Link
                      href="/u/me/edit"
                      className="mt-4 decoration-0 flex items-center justify-center gap-2 text-black bg-primary w-full hover:underline text-center rounded-full py-2 border border-transparent hover:brightness-90 transition"
                    >
                      <TbUserEdit /> Editar Perfil
                    </Link>
                  </span>
                )}
              </span>
            </div>
          </section>
        )}

        {section === "trails" && (
          <section className="flex items-center justify-center bg-white/5 border border-white/10 px-10 py-6 mt-4 min-h-60">
            <div className="flex flex-col gap-4">
              <span className="text-white/60 text-center text-sm">
                Você ainda não possui nenhuma trilha
              </span>
              <DefaultButton variant="ghost">
                <FiPlus /> Criar Trilha
              </DefaultButton>
            </div>
          </section>
        )}
      </div>
      <DefaultButton className="border-2 bg-red-500! border-red-500! text-black! hover:brightness-75! ml-auto mt-4">
        DELETAR CONTA
      </DefaultButton>
    </>
  );
}
