import CreateUserForm from "@/components/Forms/user/create-user-form";
import clsx from "clsx";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <section className="relative">
      <Image
        src="/images/hero-bg.png"
        alt="Axion Background Image"
        width={1920}
        height={1080}
        unoptimized
        priority
        className="w-full h-screen object-cover"
      />
      <div
        id="hero"
        className={clsx(
          "absolute inset-0 flex flex-col items-center justify-center text-center gap-8 px-6",
          "text-neutral-100",
          "lg:gap-16 lg:px-20 2xl:px-72",
        )}
      >
        <CreateUserForm />
      </div>
    </section>
  );
}
