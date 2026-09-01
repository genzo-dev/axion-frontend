import { UserResponseDto } from "@/schemas/users/user-response-schema";
import Image from "next/image";
import { FiUser } from "react-icons/fi";

type ProfileNavButtonProps = {
  user: UserResponseDto | null;
  onClick?: () => void;
};

export default function ProfileNavButton({
  user,
  onClick,
}: ProfileNavButtonProps) {
  if (!user) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className="w-8 h-8 lg:w-9 lg:h-9 rounded-full overflow-hidden lg:border border-white/10 hover:text-black hover:bg-primary hover:border-primary hover:cursor-pointer flex items-center justify-center transition"
    >
      {/* TODO: Atualizar para buscar a imagem do usuário logado, caso exista. Caso não exista, exibir o ícone de usuário padrão. */}
      <Image
        src="/images/cloud-noiva.jpg"
        alt="profile image test"
        width={36}
        height={36}
        className="object-cover"
      />
      {/* <FiUser /> */}
    </button>
  );
}
