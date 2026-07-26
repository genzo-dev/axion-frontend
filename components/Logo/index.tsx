import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/axion.svg"
      alt="Logo do Axion"
      width={434}
      height={89}
      className="w-20 xl:w-24 2xl:w-32 hover:cursor-pointer transition"
    />
  );
}
