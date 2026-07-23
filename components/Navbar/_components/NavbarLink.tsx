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
        "font-manrope bg-transparent hover:bg-[#ff4f00] w-full lg:w-auto px-3 sm:px-8 lg:px-3 py-2 font-bold text-sm sm:text-base lg:text-sm xl:text-base text-white hover:text-black transition",
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
