import type { Metadata } from "next";
import GradientButton from "@/components/GradientButton";
import ScrollDownButton from "@/components/ScrollDownButton";
import { formules, options } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs — Majesty Conciergerie",
  description:
    "Deux formules, une commission sur les revenus encaissés. Pas d'abonnement, pas de frais d'entrée.",
};

export default function PricingPage() {
  return (
    <div>
      <div
        className="h-[650px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/hero-tarifs.jpg)" }}
        role="img"
        aria-label="Mas en pierre avec vue sur la vallée"
      />
      <div className="mx-auto max-w-[1180px] px-5 pt-[40px] pb-[150px] sm:px-8 md:px-12">
        <h1
          id="pricing-title"
          className="text-center font-serif text-5xl pb-[40px] font-light sm:text-6xl lg:text-[74px]"
        >
          Deux formules.
        </h1>
        <div className="flex justify-center pb-6">
          <ScrollDownButton targetId="pricing-title" />
        </div>
        <p className="mx-auto mt-5 max-w-[520px] text-center text-lg leading-[1.7] font-light text-muted-1">
          Une commission sur les revenus encaissés. Pas d&rsquo;abonnement, pas
          de frais d&rsquo;entrée.
        </p>

        <div className="mx-auto mt-16 grid max-w-[820px] grid-cols-1 gap-7 sm:grid-cols-2">
          {formules.map((f) => (
            <div
              key={f.nom}
              className="flex flex-col gap-3.5 rounded-[20px] bg-white px-8 pt-[38px] pb-[34px] shadow-[0_2px_6px_rgba(26,26,24,0.05),0_18px_40px_-12px_rgba(26,26,24,0.14)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_4px_10px_rgba(26,26,24,0.06),0_30px_60px_-14px_rgba(138,110,47,0.28)]"
            >
              <div className="text-[10px] tracking-[0.24em] text-sage uppercase">
                {f.nom}
              </div>
              <div className="font-serif text-6xl leading-[0.98] font-light sm:text-7xl">
                {f.prix}
              </div>
              <div className="border-b border-border pb-[18px] text-[10px] tracking-[0.16em] text-muted-4 uppercase">
                des revenus locatifs
              </div>
              {f.inclus.map((i) => (
                <div
                  key={i}
                  className="flex items-baseline gap-2.5 text-sm leading-[1.65] font-light text-muted-1"
                >
                  <span className="h-[5px] w-[5px] flex-none -translate-y-0.5 bg-sage" />
                  <span>{i}</span>
                </div>
              ))}
              <GradientButton className="mt-auto w-full py-3.5 text-[10px]">
                Choisir
              </GradientButton>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="mb-[18px] font-serif text-3xl font-light sm:text-4xl">
            Options à la carte
          </h2>
          {options.map((o) => (
            <div
              key={o.nom}
              className="flex items-baseline justify-between gap-4 border-t border-border py-[18px]"
            >
              <span className="text-base font-light">{o.nom}</span>
              <span className="font-serif text-xl">{o.prix}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
