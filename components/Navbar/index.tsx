import { getCurrentUser } from "@/lib/user/get-current-user";
import NavbarBase from "./_components/NavbarBase";

export default async function Navbar() {
  const user = await getCurrentUser();
  return <NavbarBase user={user} />;
}
