import clsx from "clsx";
import Link from "next/link";

type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
  onClick?: () => void;
};

export default function NavbarLink({
  children,
  url,
  onClick,
}: NavbarLinkProps) {
  return (
    <Link
      href={url}
      className={clsx(
        "font-dm-sans bg-transparent hover:bg-[#1a1a1a] w-full lg:w-auto px-3 sm:px-8 lg:px-3 py-2 font-medium text-sm sm:text-base lg:text-sm xl:text-base text-white transition",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
