import type { Metadata } from "next";
import Image from "next/image";
import { valeurs } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos — Majesty Conciergerie",
  description:
    "Petite maison, standard hôtelier. Majesty Conciergerie gère quarante-deux logements entre Annecy, Chamonix, Genève et Lausanne.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1180px] px-5 pt-[100px] pb-[120px] sm:px-8 md:px-12">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-[70px]">
        <div className="flex flex-col gap-[30px]">
          <h1 className="font-serif text-5xl leading-[1.02] font-light sm:text-6xl lg:text-[74px]">
            Petite maison,
            <br />
            standard hôtelier.
          </h1>
          <p className="max-w-[560px] text-[17px] leading-[1.85] font-light text-muted-1">
            Majesty Conciergerie gère quarante-deux logements entre Annecy,
            Chamonix, Genève et Lausanne. Six personnes, salariées. Nous
            limitons volontairement le nombre de mandats : au-delà,
            l&rsquo;attention se dilue.
          </p>
          <p className="max-w-[560px] text-[17px] leading-[1.85] font-light text-muted-1">
            Chaque propriétaire dispose d&rsquo;un interlocuteur unique,
            joignable directement, qui connaît son logement, ses voisins et
            ses contraintes. Un rapport mensuel remplace les échanges
            inutiles.
          </p>
        </div>
        <Image
          src="/images/hero-apropos.jpg"
          alt="Piscine à débordement face à la mer"
          width={800}
          height={620}
          className="block h-[400px] w-full rounded-[20px] object-cover sm:h-[500px] md:h-[620px]"
        />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 md:mt-20 md:gap-[50px]">
        {valeurs.map((v) => (
          <div key={v.titre} className="border-t border-ink pt-6">
            <h3 className="font-serif text-[28px] font-normal">{v.titre}</h3>
            <p className="mt-2.5 text-[15px] leading-[1.8] font-light text-muted-2">
              {v.texte}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-[90px] max-w-3xl text-center font-serif text-2xl leading-[1.4] font-light italic sm:text-3xl md:text-4xl">
        « Je n&rsquo;ai jamais eu à me déplacer. Les voyageurs sont accueillis
        mieux que je ne l&rsquo;aurais fait moi-même. »
      </p>
      <div className="mt-5 text-center text-[10px] tracking-[0.2em] text-muted-5 uppercase">
        Hélène M. · Chalet 4 chambres, Saint-Gervais
      </div>
    </div>
  );
}
