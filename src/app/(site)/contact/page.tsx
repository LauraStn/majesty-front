import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollDownButton from "@/components/ScrollDownButton";

export const metadata: Metadata = {
  title: "Contact — Majesty Conciergerie",
  description:
    "Une question sur votre logement ? Écrivez-nous, nous répondons dans les meilleurs délais.",
};

export default function ContactPage() {
  return (
    <div>
      <div
        className="h-[65vh] min-h-[380px] bg-cover bg-center bg-fixed bg-[url('/images/contact-mobile.png')] md:h-[650px] md:bg-[url('/images/hero-contact.jpg')]"
        role="img"
        aria-label="Propriétaires consultant leurs annonces"
      />
      <div className="mx-auto max-w-[1180px] px-5 pt-[20px] pb-[120px] sm:px-8 md:px-12">
        <h1
          id="contact-title"
          className="text-center font-serif text-5xl leading-[1.04] font-light sm:text-6xl lg:text-[64px]"
        >
          Nous contacter
        </h1>
        <ScrollDownButton
          targetId="contact-title"
          expandedClassName="mt-6 mb-2 h-12"
          collapsedClassName="mt-0 mb-0 h-0"
        />
        <p className="text-center text-[17px] leading-[1.7] font-light text-muted-1 md:whitespace-nowrap">
          Une question sur votre logement ? Écrivez-nous, nous répondons dans les meilleurs délais.
        </p>

        <div className="mt-16 grid grid-cols-1 items-start gap-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div className="flex flex-col gap-[30px]">
            <div className="border-t border-border pt-5">
              <div className="text-[10px] tracking-[0.22em] text-muted-5 uppercase">
                Téléphone
              </div>
              <div className="mt-2 font-serif text-[28px] font-light">
                +33 4 50 12 84 30
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <div className="text-[10px] tracking-[0.22em] text-muted-5 uppercase">
                E-mail
              </div>
              <div className="mt-2 font-serif text-2xl font-light sm:text-[26px]">
                contact@majesty-conciergerie.ch
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <div className="text-[10px] tracking-[0.22em] text-muted-5 uppercase">
                Zones desservies
              </div>
              <div className="mt-2 text-base leading-[1.85] font-light text-muted-1">
                Annecy · Chamonix · Megève
                <br />
                Genève · Lausanne · Montreux
              </div>
            </div>
            <div className="border-t border-border pt-5">
              <div className="text-[10px] tracking-[0.22em] text-muted-5 uppercase">
                Réseaux
              </div>
              <div className="mt-3.5 flex gap-2.5">
                <a
                  href="#0"
                  className="rounded-full border border-border-2 px-[18px] py-2.5 text-[10px] tracking-[0.18em] uppercase"
                >
                  Instagram
                </a>
                <a
                  href="#0"
                  className="rounded-full border border-border-2 px-[18px] py-2.5 text-[10px] tracking-[0.18em] uppercase"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="aspect-[548/359] overflow-hidden rounded-[20px]">
              <Image
                src="/images/carte-zone.png"
                alt="Carte de la zone d'intervention : Genève, Annecy, Bonneville"
                width={548}
                height={359}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
