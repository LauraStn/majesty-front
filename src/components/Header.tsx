"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path
        fill="#1877F2"
        d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
      />
    </svg>
  );
}

function InstagramIcon() {
  const gradientId = useId();
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="35%" stopColor="#FF543E" />
          <stop offset="65%" stopColor="#C837AB" />
          <stop offset="100%" stopColor="#5851DB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6.5" fill={`url(#${gradientId})`} />
      <rect
        x="4.8"
        y="4.8"
        width="14.4"
        height="14.4"
        rx="4.2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="#fff" strokeWidth="1.6" />
      <circle cx="16.3" cy="7.7" r="1.05" fill="#fff" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 448 512"
      aria-hidden="true"
    >
      <path
        fill="#0A66C2"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3C448 46.5 433.6 32 416 32zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3.5" y1="7" x2="20.5" y2="7" />
          <line x1="3.5" y1="12" x2="20.5" y2="12" />
          <line x1="3.5" y1="17" x2="20.5" y2="17" />
        </>
      )}
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9s1.3-6.4 3.8-9z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2.5">
      <a
        href="#0"
        aria-label="Facebook"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full transition-opacity hover:opacity-75"
      >
        <FacebookIcon />
      </a>
      <a
        href="#0"
        aria-label="Instagram"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full transition-opacity hover:opacity-75"
      >
        <InstagramIcon />
      </a>
      <a
        href="#0"
        aria-label="LinkedIn"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full transition-opacity hover:opacity-75"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        id="site-header"
        className="sticky top-0 z-30 backdrop-blur-md bg-header-bg"
      >
        <div className="hidden flex-wrap items-center justify-between gap-4 px-5 py-[18px] sm:px-8 md:flex md:px-12">
          <Link href="/" className="flex flex-none items-center">
            <Image
              src="/images/logo-header.jpg"
              alt="Majesty Conciergerie"
              width={200}
              height={58}
              className="block h-[58px] w-auto [mix-blend-mode:multiply]"
              priority
            />
          </Link>

          <div className="flex flex-1 flex-wrap items-center gap-1 rounded-full border border-border bg-white p-1 sm:flex-none">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`whitespace-nowrap rounded-full px-[17px] py-[9px] text-[11px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                    active
                      ? "bg-gold-gradient text-ink"
                      : "text-muted-3 hover:text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-none items-center gap-3.5">
            <GradientCTA />
            <SocialLinks />
          </div>
        </div>

        <div className="relative z-30 flex items-center justify-between bg-header-bg px-5 py-[14px] md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="flex h-9 w-9 flex-none items-center justify-center text-ink"
          >
            <BurgerIcon open={open} />
          </button>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="absolute left-1/2 flex -translate-x-1/2 items-center"
          >
            <Image
              src="/images/majesty-conciergerie-logo-mobil-nav.png"
              alt="Majesty Conciergerie"
              width={40}
              height={40}
              className="block h-9 w-auto"
              priority
            />
          </Link>

          <button
            type="button"
            aria-label="Changer de langue"
            className="flex h-9 w-9 flex-none items-center justify-center text-ink"
          >
            <LanguageIcon />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-20 flex flex-col bg-bg pt-[68px] transition-transform duration-500 ease-in-out md:hidden ${
          open ? "translate-x-0" : "pointer-events-none -translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col items-center gap-2 px-6 pt-10">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`w-full rounded-full px-[17px] py-[14px] text-center text-[13px] tracking-[0.14em] uppercase transition-colors duration-300 ${
                  active
                    ? "bg-gold-gradient text-ink"
                    : "text-muted-3 hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col items-center gap-6 px-6 pb-10">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full whitespace-nowrap rounded-full bg-gold-gradient px-[22px] py-[15px] text-center text-[10px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
          >
            Nous contacter
          </Link>

          <SocialLinks />
        </div>
      </div>
    </>
  );
}

function GradientCTA() {
  return (
    <Link
      href="/contact"
      className="whitespace-nowrap rounded-full bg-gold-gradient px-[22px] py-[13px] text-[10px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
    >
      Nous contacter
    </Link>
  );
}
