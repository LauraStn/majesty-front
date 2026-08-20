import type { Metadata } from "next";
import Image from "next/image";
import GradientButton from "@/components/GradientButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollDownButton from "@/components/ScrollDownButton";
import { biens } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nos biens — Majesty Conciergerie",
  description:
    "Une sélection de chalets, villas et appartements gérés par Majesty Conciergerie entre Annecy, Chamonix et Genève.",
};

export default function PropertiesPage() {
  return (
    <div>
      <div
        className="h-[65vh] min-h-[380px] bg-cover bg-center bg-fixed bg-[url('/images/hero-properties.png')] md:h-[650px]"
        role="img"
        aria-label="Villa au bord du lac Léman"
      />
      <div className="mx-auto max-w-[1680px] px-5 pt-[10px] pb-[150px] sm:px-8 md:px-12">
        <h1
          id="properties-title"
          className="mx-auto max-w-3xl text-center font-serif text-5xl pb-[10px] leading-[1.02] font-light sm:text-6xl lg:text-[74px]"
        >
          Ils nous font confiance.
        </h1>
        <div className="flex justify-center pb-6">
          <ScrollDownButton targetId="properties-title" />
        </div>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-lg leading-[1.7] font-light text-muted-1">
          Un aperçu des logements confiés à Majesty Conciergerie, entre
          Annecy, Chamonix et Genève.
        </p>

        <div className="mx-auto mt-16 grid max-w-[1680px] grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
          {biens.map((b, i) => (
            <RevealOnScroll key={b.nom}>
              <div className="flex h-full flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_2px_6px_rgba(26,26,24,0.05),0_18px_40px_-12px_rgba(26,26,24,0.14)]">
                <div className="grid grid-cols-2 gap-[2px]">
                  <div className="relative h-[190px]">
                    <Image
                      src={b.imgExt}
                      alt={`${b.nom} — extérieur`}
                      fill
                      sizes="(min-width: 1024px) 195px, (min-width: 640px) 300px, 50vw"
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>
                  <div className="relative h-[190px]">
                    <Image
                      src={b.imgInt}
                      alt={`${b.nom} — intérieur`}
                      fill
                      sizes="(min-width: 1024px) 195px, (min-width: 640px) 300px, 50vw"
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3.5 px-7 pt-6 pb-7">
                  <div className="text-[11px] tracking-[0.24em] text-sage uppercase">
                    {b.type} · {b.lieu}
                  </div>
                  <h3 className="font-serif text-[26px] font-light">{b.nom}</h3>
                  <p className="text-[15px] leading-[1.7] font-light text-muted-1">
                    {b.texte}
                  </p>
                  <div className="text-[13px] font-light tracking-[0.02em] text-muted-4">
                    {b.chambres} chambre{b.chambres > 1 ? "s" : ""} ·{" "}
                    {b.voyageurs} voyageurs
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3.5 py-1.5 text-[11px] font-light tracking-[0.04em] text-muted-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <GradientButton
                    href="/contact"
                    className="mt-auto w-full py-4 text-[10px]"
                  >
                    Demander la disponibilité
                  </GradientButton>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-center gap-6 border-t border-border pt-[50px] text-center">
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Votre bien pourrait rejoindre cette sélection.
          </h2>
          <p className="max-w-[460px] text-[15px] leading-[1.75] font-light text-muted-2">
            Visite du logement et premier échange offerts, sans engagement.
          </p>
          <GradientButton href="/contact">Nous contacter</GradientButton>
        </div>
      </div>
    </div>
  );
}
