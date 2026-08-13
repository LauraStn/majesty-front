import Image from "next/image";
import Link from "next/link";

export default function RootPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between pt-7 pb-20 gap-4 px-5 text-center">
      <div className="absolute inset-0 bg-bg bg-cover bg-center bg-fixed bg-[url('/images/villa.png')] opacity-75" />
      <Image
        src="/images/logo-bgrmv.png"
        alt="Majesty Conciergerie"
        width={420}
        height={130}
        className="relative z-10 block h-auto w-[300px] max-w-[80vw]"
        priority
        id="home-title"
      />
      <div className="relative z-10 flex max-w-xl flex-col items-center gap-3">
        <h2 className="font-serif text-xl font-light tracking-[0.12em] text-white uppercase">
          Vous aviez mieux à faire.
        </h2>
        <p className="text-sm leading-[1.7] font-light text-white/80">
          Votre temps est précieux.
          <br />
          Vos exigences le sont encore davantage.
        </p>
        <h2 className="font-serif text-xl font-light tracking-[0.12em] text-white uppercase">
          Vivez. Nous nous occupons du reste
        </h2>
      </div>
      <div className="relative z-10 flex w-full max-w-md items-center gap-4 text-gold">
        <span className="h-px flex-1 bg-gold" />
        <span className="text-sm">✦</span>
        <span className="h-px flex-1 bg-gold" />
      </div>
      <div className="relative z-10 flex max-w-xl flex-col items-center gap-3">
        <h2 className="font-serif text-xl font-light tracking-[0.12em] text-white uppercase">
          You had better things to do.
        </h2>
        <p className="text-sm leading-[1.7] font-light text-white/80">
          Your time is precious.
          <br />
          Your standards even more so.
        </p>
        <h2 className="font-serif text-xl font-light tracking-[0.12em] text-white uppercase">
          Live. We take care of the rest
        </h2>
      </div>
      <div className="relative flex gap-6 px-5 text-center">
        <Link
          href="/home"
          className="rounded-full bg-gold-gradient px-6 py-2.5 text-sm tracking-[0.2em] text-ink uppercase transition-colors duration-300"
        >
          Français
        </Link>
        <Link
          href="/home"
          className="rounded-full bg-gold-gradient px-6 py-2.5 text-sm tracking-[0.2em] text-ink uppercase transition-colors duration-300"
        >
          English
        </Link>
      </div>
    </div>
  );
}
