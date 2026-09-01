import { getCurrentUser } from "@/lib/user/get-current-user";
import NavbarBase from "./_components/NavbarBase";

// TODO: Refatorar após o MVP.
// Avaliar a separação da navbar em <NavbarMobile> e <NavbarDesktop>
// caso a complexidade e as diferenças entre os layouts justifiquem.

export default async function Navbar() {
  const user = await getCurrentUser();
  return <NavbarBase user={user} />;
}
