"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9z" />
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
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-ink hover:text-sage"
      >
        <FacebookIcon />
      </a>
      <a
        href="#0"
        aria-label="Instagram"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-ink hover:text-sage"
      >
        <InstagramIcon />
      </a>
      <a
        href="#0"
        aria-label="LinkedIn"
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-ink hover:text-sage"
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
