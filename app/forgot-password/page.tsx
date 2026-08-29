import ForgotPasswordForm from "@/components/Forms/auth/forgot-password-form";
import Logo from "@/components/Logo";
import clsx from "clsx";
import Image from "next/image";

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ForgotPasswordPage({ searchParams }: Props) {
  const params = await searchParams;
  const email = params.email as string;

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
        <div className="flex flex-col font-dm-sans rounded-2xl bg-bg-component border border-white/10 px-6 sm:px-12 py-12 sm:py-24">
          <div className="flex justify-center">
            <Logo className="mb-16 w-28! sm:w-36!" />
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="flex justify-center font-bold text-lg sm:text-xl">
                Redefinição de senha
              </h1>
              <p className="text-xs sm:text-sm mt-6">
                Insira seu e-mail e iremos te enviar um link para que você possa
                redefinir sua senha
              </p>
            </div>

            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}
