import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";

type CardProps = {
  title: string;
  children: React.ReactNode;
  url: string;
};

export default function Card({ title, children, url }: CardProps) {
  return (
    <div className="flex flex-col gap-8 justify-between w-full hover:scale-105 transition bg-white/5 border border-white/10 px-4 py-6">
      <div>
        <h3 className="text-xl/loose mb-4 font-extrabold text-primary">
          {title}
        </h3>
        {children}
      </div>
      <div>
        <Link
          href={url}
          className="inline-flex gap-2 items-center font-bold border-b border-white hover:text-primary hover:border-primary"
        >
          O que está por vir <MdOutlineArrowRightAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
