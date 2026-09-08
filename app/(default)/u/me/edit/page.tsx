import UpdateUserForm from "@/components/Forms/user/update-user-form";
import { getCurrentUser } from "@/lib/user/get-current-user";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type ProfileSection = "profile" | "trails";

export const metadata: Metadata = {
  title: "Meu Perfil",
};

export default async function AuthenticatedUserUpdatePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="font-dm-sans">
      <h1 className="text-3xl">Editar Perfil</h1>

      <UpdateUserForm user={user} />
    </div>
  );
}
