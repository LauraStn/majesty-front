import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import ScrollDownButton from "@/components/ScrollDownButton";
import { etapes } from "@/lib/content";

export default function HomePage() {
  return (
    <div>
      <div
        className="h-[65vh] min-h-[380px] bg-cover bg-center bg-fixed bg-[url('/images/home-mobile.png')] md:h-[630px] md:bg-[url('/images/hero-accueil.jpg')]"
        role="img"
        aria-label="Intérieur chaleureux face au lac"
      />

      <div className="flex justify-center px-5 pt-[10px] sm:px-8 md:px-12">
        <Image
          src="/images/logo-heros.png"
          alt="Majesty Conciergerie"
          width={1439}
          height={404}
          className="block h-auto w-[420px] max-w-[80vw] [mix-blend-mode:multiply]"
          priority
          id="home-title"
        />
      </div>
      <ScrollDownButton
        targetId="home-title"
        expandedClassName="h-12"
        collapsedClassName="h-0"
      />
      <div className="mx-auto max-w-[1180px] px-5 pb-[90px] text-center sm:px-8 md:px-12">
        <h1 className="mx-auto mt-6 max-w-3xl pb-[15px] text-balance font-serif text-6xl leading-[0.98] font-light sm:text-7xl md:text-8xl lg:text-[96px]">
          Votre location,
          <br />
          <em className="italic">tenue comme un hôtel</em>
        </h1>
        <span className="text-[10px] tracking-[0.3em] text-sage uppercase">
          Haute-Savoie · Genève · Suisse romande
        </span>
        <p className="mx-auto mt-15 max-w-[540px] text-lg leading-[1.7] font-light text-muted-1">
          Nous gérons l&rsquo;intégralité de votre bien Airbnb et Booking —
          voyageurs, entretien, annonces, revenus. Vous n&rsquo;ouvrez plus une
          seule messagerie.
        </p>
        <div className="mt-15 flex flex-wrap justify-center gap-3">
          <GradientButton href="/services">
            Découvrir nos services
          </GradientButton>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-[70px]">
          <div className="flex flex-col gap-[30px]">
            <h2 className="font-serif text-5xl leading-[1.02] font-light sm:text-6xl lg:text-[62px]">
              L&rsquo;hôtellerie dans l&rsquo;âme,
              <br />
              l&rsquo;immobilier par passion.
            </h2>
            <p className="max-w-[560px] text-[16px] leading-[1.85] font-light text-muted-1">
              Mon parcours a commencé dans l&rsquo;hôtellerie, un univers où
              j&rsquo;ai appris l&rsquo;excellence du service, le sens du détail
              et l&rsquo;importance d&rsquo;offrir une expérience irréprochable
              à chaque client.
            </p>
            <p className="max-w-[560px] text-[16px] leading-[1.85] font-light text-muted-1">
              Animés par une passion commune pour l&rsquo;immobilier et
              l&rsquo;exigence du service, nous avons fondé Majesty Conciergerie
              avec une ambition simple : proposer aux propriétaires une gestion
              haut de gamme inspirée des meilleurs standards de
              l&rsquo;hôtellerie.
            </p>
            <p className="max-w-[560px] text-[16px] leading-[1.85] font-light text-muted-1">
              En réunissant nos compétences et nos expériences, nous avons créé
              une conciergerie où chaque bien bénéficie d&rsquo;un suivi
              rigoureux, d&rsquo;une communication transparente et d&rsquo;un
              accompagnement personnalisé. Notre objectif est simple : valoriser
              votre bien et offrir à vos voyageurs une expérience
              d&rsquo;exception.
            </p>
            <div className="mt-1 flex items-center gap-3.5">
              <div className="text-[13px] tracking-[0.18em] text-muted-4 uppercase">
                — Les fondateurs de Majesty Conciergerie
              </div>
            </div>
          </div>
          <div className="relative h-[660px] w-full">
            <Image
              src="/images/terrasse-villa.jpg"
              alt="Terrasse d'une villa au coucher du soleil"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="rounded-[20px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-5 py-[90px] sm:px-8 md:px-12">
        <h2 className="mb-11 font-serif text-4xl font-light">Fonctionnement</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((e) => (
            <div key={e.num} className="border-t border-ink pt-6">
              <div className="font-serif text-sm tracking-[0.14em] text-sage">
                {e.num}
              </div>
              <h3 className="mt-2 font-serif text-2xl font-normal">
                {e.titre}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] font-light text-muted-2">
                {e.texte}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-[110px] text-center sm:px-8 md:px-12">
        <h2 className="font-serif text-5xl leading-[1.05] font-light sm:text-6xl lg:text-[62px]">
          Parlons de votre bien.
        </h2>
        <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.75] font-light text-muted-2">
          Visite du logement et premier échange offerts, sans engagement.
        </p>
        <GradientButton href="/contact" className="mt-8">
          Nous contacter
        </GradientButton>
      </div>
    </div>
  );
}
