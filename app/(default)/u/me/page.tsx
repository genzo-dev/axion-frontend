import { DefaultButton } from "@/components/Buttons/DefaultButton";
import { getCurrentUser } from "@/lib/user/get-current-user";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { TbUserEdit } from "react-icons/tb";
import UserProfileCard from "./_components/UserProfileCard";

export const metadata: Metadata = {
  title: "Meu Perfil",
};

export default async function AuthenticatedUserPage() {
  const user = await getCurrentUser();

  return (
    <>
      <UserProfileCard user={user} />
    </>
  );
}
