import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <div className="absolute inset-0 bg-bg bg-cover bg-center bg-fixed bg-[url('/images/red.jpg')] opacity-75" />
      {/* <h1 className="font-serif text-4xl font-light sm:text-5xl">
        Majesty Conciergerie
      </h1> */}
      <Image
        src="/images/logo-bgrmv.png"
        alt="Majesty Conciergerie"
        width={420}
        height={130}
        className="relative z-10 block h-auto w-[420px] max-w-[80vw]"
        priority
        id="home-title"
      />
      <div className="relative z-10 flex max-w-xl flex-col items-center gap-3">
        <h2 className="font-serif text-2xl font-light tracking-[0.12em] text-white uppercase">
          Louez sans stress
        </h2>
        <p className="text-sm leading-[1.7] font-light text-white/80">
          Vous avez un appartement ou une maison à louer et vous n&rsquo;êtes
          pas sur place, vous n&rsquo;avez pas le temps ou vous ne voulez pas
          vous en occuper ?
        </p>
      </div>

      <div className="relative z-10 h-px w-16 bg-white/30" />

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-3">
        <h2 className="font-serif text-2xl font-light tracking-[0.12em] text-white uppercase">
          Rent stress-free
        </h2>
        <p className="text-sm leading-[1.7] font-light text-white/80">
          Do you have an apartment or a house to rent, but you&rsquo;re not
          around, you don&rsquo;t have time, or you simply don&rsquo;t want to
          deal with it?
        </p>
      </div>

      <div className="relative flex gap-6 px-5 text-center">
        <Link
          href="/home"
          className="rounded-full bg-gold-gradient px-9 py-[17px] text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
        >
          Anglais
        </Link>
        <Link
          href="/home"
          className="rounded-full bg-gold-gradient px-9 py-[17px] text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
        >
          Français
        </Link>
      </div>
    </div>
  );
}
