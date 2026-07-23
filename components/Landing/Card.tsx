import Link from "next/link";

type CardProps = {
  title: string;
  children: React.ReactNode;
  url: string;
};

export default function Card({ title, children, url }: CardProps) {
  return (
    <div className="flex flex-col gap-8 justify-between w-full hover:scale-105 transition bg-white/10 border border-white/5 px-4 py-6">
      <div>
        <h3 className="text-xl/loose mb-4 font-extrabold text-[#ff4f00]">
          {title}
        </h3>
        {children}
      </div>
      <div>
        <Link
          href={url}
          className="font-bold border-b border-white hover:text-[#ff4f00] hover:border-[#ff4f00]"
        >
          O que está por vir {"->"}
        </Link>
      </div>
    </div>
  );
}
