"use client";

import { useRef, useState } from "react";
import { champs } from "@/lib/content";

const MIN_FILL_TIME_MS = 1500;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const mountedAt = useRef(Date.now());

  if (submitted) {
    return (
      <div className="rounded-[20px] bg-white px-8 py-11 shadow-[0_2px_6px_rgba(26,26,24,0.05),0_18px_40px_-12px_rgba(26,26,24,0.14)] sm:px-10">
        <h2 className="font-serif text-3xl font-light sm:text-4xl">
          Message envoyé.
        </h2>
        <p className="mt-4 text-base leading-[1.7] font-light text-muted-1">
          Merci, nous revenons vers vous sous 24 h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form
      className="relative rounded-[20px] bg-white px-8 py-11 shadow-[0_2px_6px_rgba(26,26,24,0.05),0_18px_40px_-12px_rgba(26,26,24,0.14)] sm:px-10"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const honeypot = (
          form.elements.namedItem("website") as HTMLInputElement | null
        )?.value;
        const isBot =
          !!honeypot || Date.now() - mountedAt.current < MIN_FILL_TIME_MS;

        if (!isBot) {
          // TODO: envoyer les données du formulaire (API / service d'e-mail) ici.
        }

        setSubmitted(true);
      }}
    >
      <h2 className="font-serif text-3xl font-light sm:text-4xl">
        Envoyer un message
      </h2>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="mt-8 grid grid-cols-1 gap-[22px] sm:grid-cols-2">
        {champs.map((c) => (
          <label key={c.name} className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.2em] text-muted-4 uppercase">
              {c.label}
            </span>
            <input
              name={c.name}
              placeholder={c.ph}
              required
              className="rounded-xl border border-border-2 bg-bg px-4 py-[15px] font-sans text-base font-light text-ink outline-none focus:border-sage"
            />
          </label>
        ))}
        <label className="col-span-1 flex flex-col gap-2 sm:col-span-2">
          <span className="text-[10px] tracking-[0.2em] text-muted-4 uppercase">
            Votre message
          </span>
          <textarea
            name="message"
            rows={6}
            required
            placeholder="Bonjour, je possède un chalet à Saint-Gervais et j'aimerais en savoir plus sur votre accompagnement."
            className="resize-y rounded-xl border border-border-2 bg-bg px-4 py-[15px] font-sans text-base font-light text-ink outline-none focus:border-sage"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-gold-gradient mt-7 rounded-full px-9 py-[17px] text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300"
      >
        Envoyer le message
      </button>
      <p className="mt-3.5 text-xs font-light text-muted-5">
        Aucune donnée transmise à des tiers.
      </p>
    </form>
  );
}
