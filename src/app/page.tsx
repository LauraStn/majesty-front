import Link from "next/link";

export default function RootPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <h1 className="font-serif text-4xl font-light sm:text-5xl">
        Majesty Conciergerie
      </h1>
      <Link
        href="/home"
        className="rounded-full bg-gold-gradient px-9 py-[17px] text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
      >
        Entrer sur le site
      </Link>
    </div>
  );
}
