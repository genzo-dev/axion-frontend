import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src="/images/axion.svg"
        alt="Logo do Axion"
        width={434}
        height={89}
        className={`w-20 xl:w-24 hover:cursor-pointer transition ${className || ""}`}
      />
    </Link>
  );
}
