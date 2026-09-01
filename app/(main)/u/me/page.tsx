import { getCurrentUser } from "@/lib/user/get-current-user";

export default async function AuthenticatedUserPage() {
  const user = await getCurrentUser();

  //TODO: Criar um layout para a landing page SEM o pt-24 e um layout para as demais páginas COM o pt-24
  return <div className="pt-24">{user?.name}</div>;
}
