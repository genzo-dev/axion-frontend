import { getCurrentUser } from "@/lib/user/get-current-user";
import Image from "next/image";

export default async function AuthenticatedUserPage() {
  const user = await getCurrentUser();

  //TODO: Criar um layout para a landing page SEM o pt-24 e um layout para as demais páginas COM o pt-24
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/cloud-noiva.jpg"
        alt="test-user-image"
        width={500}
        height={500}
        className="object-cover rounded-full w-32 h-32"
      />
      <div>{user?.name}</div>
    </div>
  );
}
