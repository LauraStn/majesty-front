"use client";

import { useEffect, useState } from "react";

function ArrowDownIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 4v16" />
      <path d="M6 14l6 6 6-6" />
    </svg>
  );
}

export default function ScrollDownButton({ targetId }: { targetId: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const header = document.getElementById("site-header");
    const headerHeight = header?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    setVisible(false);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Aller au contenu"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-border-2 bg-white text-ink transition-colors duration-300 hover:border-gold hover:text-gold"
    >
      <ArrowDownIcon />
    </button>
  );
}
