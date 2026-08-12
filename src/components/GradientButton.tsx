import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
  };

type GradientButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center rounded-full text-[11px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-300";

const variants: Record<"solid" | "outline", string> = {
  solid: "bg-gold-gradient text-ink border-0 px-[30px] py-4",
  outline:
    "bg-transparent text-ink border border-border-2 px-[30px] py-4 hover:border-ink",
};

export default function GradientButton({
  variant = "solid",
  className = "",
  children,
  href,
  ...rest
}: GradientButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
