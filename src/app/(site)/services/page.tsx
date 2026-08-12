import type { Metadata } from "next";
import GradientButton from "@/components/GradientButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollDownButton from "@/components/ScrollDownButton";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prestations — Majesty Conciergerie",
  description:
    "Sept domaines, un seul interlocuteur, aucune tâche laissée au propriétaire.",
};

export default function ServicesPage() {
  return (
    <div>
      <div
        className="h-[650px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/hero-prestations.jpg)" }}
        role="img"
        aria-label="Salon contemporain lumineux"
      />
      <div className="mx-auto max-w-[1180px] px-5 pt-[40px] pb-[120px] sm:px-8 md:px-12">
        <h1
          id="services-title"
          className="max-w-3xl font-serif text-5xl pb-[40px] leading-[1.02] font-light sm:text-6xl lg:text-[74px]"
        >
          Tout est pris en charge.
        </h1>
        <div className="pb-6">
          <ScrollDownButton targetId="services-title" />
        </div>
        <p className="mt-6 max-w-[520px] text-lg leading-[1.7] font-light text-muted-1">
          Sept domaines, un seul interlocuteur, aucune tâche laissée au
          propriétaire.
        </p>

        <div className="mt-16 flex flex-col gap-[18px]">
          {services.map((s, i) => {
            const alt = i % 2 === 1;
            return (
              <RevealOnScroll key={s.num} delay={i * 0.11}>
                <div
                  className={`grid grid-cols-1 items-center gap-6 rounded-[22px] bg-white px-6 py-8 shadow-[0_1px_3px_rgba(26,26,24,0.04),0_14px_34px_-16px_rgba(26,26,24,0.14)] transition-[transform,box-shadow] duration-300 hover:translate-x-1.5 hover:shadow-[0_3px_8px_rgba(26,26,24,0.05),0_26px_54px_-18px_rgba(138,110,47,0.26)] sm:px-10 md:grid-cols-[180px_280px_1fr] md:gap-10 ${
                    alt ? "md:grid-cols-[1fr_280px_180px]" : ""
                  }`}
                >
                  <div
                    className={`h-[140px] w-[140px] flex-none bg-contain bg-center bg-no-repeat md:h-[180px] md:w-[180px] ${
                      alt ? "md:order-3 mx-auto md:mx-0" : "mx-auto md:mx-0"
                    }`}
                    style={{ backgroundImage: `url(${s.img})` }}
                    role="img"
                    aria-label={s.titre}
                  />
                  <h3
                    className={`font-serif text-2xl leading-[1.12] font-normal sm:text-[31px] ${
                      alt ? "md:order-2 md:text-right" : ""
                    }`}
                  >
                    {s.titre}
                  </h3>
                  <div
                    className={`flex flex-col gap-3 ${
                      alt ? "md:order-1 md:text-right" : ""
                    }`}
                  >
                    <p className="text-base leading-[1.8] font-light text-muted-1">
                      {s.long}
                    </p>
                    <div className="text-[10px] tracking-[0.2em] text-gold uppercase">
                      {s.detail}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col items-start gap-6 border-t border-border pt-[50px] sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Un besoin en dehors de ce cadre ?
          </h2>
          <GradientButton href="/contact">Nous écrire</GradientButton>
        </div>
      </div>
    </div>
  );
}
