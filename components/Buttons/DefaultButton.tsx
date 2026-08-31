import clsx from "clsx";
import Link from "next/link";

type ButtonVariants = "default" | "ghost" | "contrast" | "active" | "danger";
type ButtonSizes = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ComponentProps<"button"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  React.ComponentProps<typeof Link> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function DefaultButton({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx("bg-primary text-black font-bold hover:brightness-75"),
    ghost: clsx(
      "bg-transparent text-white brightness-90 hover:brightness-125",
      "hover:contrast-125 border border-white/10 hover:border-white/20",
    ),
    contrast: clsx(
      "bg-black text-white brightness-75 hover:brightness-125",
      "hover:contrast-125 border border-white/10 hover:border-white/20",
    ),
    active: clsx(
      "bg-transparent text-white",
      "hover:bg-primary hover:text-black border border-white/10",
    ),
    danger: clsx("bg-red-600 text-black hover:bg-red-700 border"),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx("font-bold text-sm px-2 py-1", "[&_svg]:w-3 [&_svg]:h-3 gap-1"),
    md: clsx(
      "font-bold text-sm xl:text-base px-3 py-2",
      "[&_svg]:w-5 [&_svg]:h-5 gap-2",
    ),
    lg: clsx(
      "px-4 lg:px-6 py-2 lg:py-3 sm:text-lg",
      "[&_svg]:w-6 [&_svg]:h-6 gap-3",
    ),
  };

  const buttonClasses = clsx(
    buttonVariants[variant],
    buttonSizes[size],
    "flex items-center justify-center cursor-pointer transition font-dm-sans",
    "disabled:bg-transparent disabled:border disabled:border-white/10 disabled:text-slate-300 disabled:cursor-not-allowed",
    className,
  );

  if (props.href) {
    return (
      <Link {...props} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button {...(props as ButtonAsButton)} className={buttonClasses}>
      {children}
    </button>
  );
}
