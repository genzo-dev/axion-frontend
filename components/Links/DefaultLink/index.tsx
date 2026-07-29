import clsx from "clsx";
import Link from "next/link";

type DefaultLinkProps = {
  href: string;
  blank?: boolean;
  children: string;
  className?: string;
};

export default function DefaultLink({
  href,
  blank,
  children,
  className,
}: DefaultLinkProps) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className={clsx("underline text-white hover:decoration-primary")}
    >
      {children}
    </Link>
  );
}
