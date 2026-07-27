import clsx from "clsx";
import Link from "next/link";

type FooterLinkProps = {
  href: string;
  blank?: boolean;
  children: string;
  className?: string;
};

export default function FooterLink({
  href,
  blank = false,
  children,
  className,
}: FooterLinkProps) {
  return (
    <Link
      href={href}
      target={blank ? "_blank" : undefined}
      rel={blank ? "noopener noreferrer" : undefined}
      className={clsx(
        "brightness-75 hover:brightness-100 hover:text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
