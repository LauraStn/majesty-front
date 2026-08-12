export default function Footer() {
  return (
    <div className="flex flex-col gap-2 border-t border-border px-5 py-[34px] text-[10px] tracking-[0.18em] text-muted-5 uppercase sm:flex-row sm:justify-between sm:px-8 md:px-12">
      <span>Majesty Conciergerie · Annecy &amp; Genève · {new Date().getFullYear()}</span>
      <span>Mix — Luxe &amp; Minimaliste</span>
    </div>
  );
}
