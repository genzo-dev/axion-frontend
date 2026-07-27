import clsx from "clsx";

type LandingSectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export default function LandingSectionWrapper({
  id,
  className,
  children,
}: LandingSectionWrapperProps) {
  return (
    <section
      className={clsx(
        "scroll-mt-30 px-6 sm:px-12 lg:px-10 2xl:px-40",
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
}
