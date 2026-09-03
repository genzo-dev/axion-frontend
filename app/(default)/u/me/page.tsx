import { getCurrentUser } from "@/lib/user/get-current-user";
import { Metadata } from "next";
import UserProfileCard from "./_components/UserProfileCard";
import InfoSectionSelector from "../../../../components/InfoSectionSelector";

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

        {section === "profile" && <p>MEU PERFIL</p>}

        {section === "trails" && <p>MEU TRILHAS</p>}
      </div>
    </>
  );
}
