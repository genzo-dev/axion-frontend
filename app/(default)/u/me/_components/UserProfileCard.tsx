import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { UserResponseDto } from "@/schemas/users/user-response-schema";
import Image from "next/image";
import Link from "next/link";
import { FiPlus, FiUser } from "react-icons/fi";
import { TbUserEdit } from "react-icons/tb";

export default function UserProfileCard({
  user,
}: {
  user: UserResponseDto | null;
}) {
  return (
    <section className="flex flex-col items-center sm:items-start justify-center sm:bg-white/5 sm:border sm:border-white/10 sm:p-4 md:p-8 sm:rounded-lg">
      <div className="flex flex-col sm:flex-row sm:w-full">
        <div className="w-32 h-32 shrink-0">
          {user?.profileImageKey ? (
            <Image
              src={`/pictures/${user?.profileImageKey}`}
              alt="test-user-image"
              width={500}
              height={500}
              className="object-cover self-center rounded-full"
            />
          ) : (
            <div className="w-full h-full border border-primary rounded-full flex items-center justify-center">
              <FiUser className="text-[80px]" />
            </div>
          )}
        </div>
        <div className="flex flex-col items-center sm:items-start sm:justify-between w-full sm:ml-4 justify-center gap-1 mt-4 sm:mt-0">
          <div className="w-full text-center sm:text-left">
            <div className="flex gap-1 items-center justify-center sm:justify-start">
              <span className="text-sm text-primary">@{user?.username}</span>

              <span className="text-xs text-muted-foreground font-bold">
                · 32 trilhas
              </span>
            </div>

            <span className="block font-bold text-lg">{user?.name}</span>
          </div>

          <div className="sm:flex hidden items-center justify-between w-full gap-4">
            <div className="flex flex-1 gap-2 items-center">
              <Link
                href="/u/me/edit"
                className="text-sm max-w-42 decoration-0 flex items-center justify-center gap-2 text-black bg-primary w-full hover:underline text-center rounded-full py-2 border border-transparent hover:brightness-90 transition"
              >
                <TbUserEdit /> Editar Perfil
              </Link>

              <Link
                href="/u/me/edit"
                className="text-sm max-w-42 decoration-0 flex items-center justify-center gap-2 text-white bg-transparent w-full hover:underline text-center rounded-full py-2 border border-white/15 hover:border-white/30 transition"
              >
                <FiPlus /> Criar Trilha
              </Link>
            </div>

            <div className="flex justify-center gap-2 items-center">
              {/* TODO: Criar variante para danger */}
              <DefaultButton
                variant="ghost"
                size="sm"
                className="w-32 border-2 border-red-400! text-red-400! hover:bg-red-500 hover:border-red-500! hover:text-black!"
              >
                Sair
              </DefaultButton>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 sm:hidden justify-between w-full gap-4 mt-4">
        <Link
          href="/u/me/edit"
          className="text-sm decoration-0 flex items-center justify-center gap-2 text-black bg-primary w-full hover:underline text-center rounded-full py-2 border border-transparent hover:brightness-90 transition"
        >
          <TbUserEdit /> Editar Perfil
        </Link>

        <Link
          href="/u/me/edit"
          className="text-sm decoration-0 flex items-center justify-center gap-2 text-white bg-transparent w-full hover:underline text-center rounded-full py-2 border border-white/15 hover:border-white/30 transition"
        >
          <FiPlus /> Criar Trilha
        </Link>
      </div>

      <div className="flex sm:hidden w-full justify-between gap-2 items-center">
        <DefaultButton
          variant="ghost"
          size="sm"
          className="w-full border-2 border-red-400! text-red-400! hover:bg-red-500 hover:border-red-500! hover:text-black! mt-4"
        >
          Sair
        </DefaultButton>
      </div>
    </section>
  );
}
