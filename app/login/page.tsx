import LoginForm from "@/components/Forms/auth/login-form";
import CreateUserForm from "@/components/Forms/user/create-user-form";
import Logo from "@/components/Logo";
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
      <div className="absolute inset-0 flex">
        <div
          id="hero"
          className={clsx(
            "flex w-full lg:w-1/2 xl:w-2/6 h-full  flex-col items-center justify-center",
            "text-neutral-100",
          )}
        >
          <LoginForm />
        </div>
        <div className="hidden lg:flex bg-black lg:w-1/2 xl:w-4/6 h-full items-center justify-center relative overflow-hidden">
          {/* <Logo className="w-72!" /> */}
          <Image
            src="/images/auth-bg.png"
            fill
            alt="foto-profissionais-estudando"
            className="object-cover"
            priority
          />

          <Logo className="absolute inset-0 m-auto lg:w-100! xl:w-130!" />
        </div>
      </div>
    </section>
  );
}
