import type { Metadata } from "next";
import ScrollDownButton from "@/components/ScrollDownButton";
import { formules, options } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tarifs — Majesty Conciergerie",
  description:
    "Trois formules, une commission sur les revenus encaissés.",
};

export default function PricingPage() {
  return (
    <div>
      <div
        className="h-[65vh] min-h-[380px] bg-cover bg-center bg-fixed bg-[url('/images/pricing-mobile.png')] md:h-[650px] md:bg-[url('/images/hero-tarifs.jpg')]"
        role="img"
        aria-label="Mas en pierre avec vue sur la vallée"
      />
      <div className="mx-auto max-w-[1180px] px-5 pt-[10px] pb-[150px] sm:px-8 md:px-12">
        <h1
          id="pricing-title"
          className="text-center font-serif text-5xl pb-[10px] font-light sm:text-6xl lg:text-[74px]"
        >
          Trois formules.
        </h1>
        <div className="flex justify-center pb-6">
          <ScrollDownButton targetId="pricing-title" />
        </div>
        <p className="mx-auto mt-5 max-w-[520px] text-center text-lg leading-[1.7] font-light text-muted-1">
          Une commission sur les revenus encaissés. Pas d&rsquo;abonnement, pas
          de frais d&rsquo;entrée.
        </p>

        <div className="mx-auto mt-16 grid max-w-[1100px] grid-cols-1 gap-7 sm:grid-cols-3">
          {formules.map((f) => (
            <div
              key={f.nom}
              className="flex flex-col gap-3.5 rounded-[20px] bg-white px-8 pt-[38px] pb-[34px] shadow-[0_2px_6px_rgba(26,26,24,0.05),0_18px_40px_-12px_rgba(26,26,24,0.14)]"
            >
              <div
                className="mx-auto inline-flex w-fit cursor-default items-center justify-center rounded-full px-15 py-3 text-xs tracking-[0.24em] text-ink uppercase"
                style={{ background: "var(--gradient-gold)" }}
              >
                {f.nom}
              </div>
              <div className="font-serif text-center text-6xl leading-[0.98] font-light sm:text-7xl">
                {f.prix}
              </div>
              <div className="border-b text-center border-border pb-[18px] text-[10px] tracking-[0.16em] text-muted-4 uppercase">
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
              className="flex items-start justify-between gap-4 border-t border-border py-[18px]"
            >
              <span className="text-base font-light">{o.nom}</span>
              <span className="max-w-[55%] text-right font-serif text-xl">
                {o.prix}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
