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

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScrollTo(top: number, duration = 900) {
  const start = window.scrollY;
  const distance = top - start;
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

export default function ScrollDownButton({
  targetId,
  expandedClassName = "mb-6 h-12",
  collapsedClassName = "mb-0 h-0",
}: {
  targetId: string;
  expandedClassName?: string;
  collapsedClassName?: string;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY <= 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const header = document.getElementById("site-header");
    const headerHeight = header?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    smoothScrollTo(top);
  };

  return (
    <div
      className={`flex justify-center overflow-hidden transition-[height,margin] duration-500 ease-out ${
        visible ? expandedClassName : collapsedClassName
      }`}
    >
      <button
        type="button"
        onClick={handleClick}
        aria-label="Aller au contenu"
        aria-hidden={!visible}
        tabIndex={visible ? 0 : -1}
        className={`flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full bg-gold-gradient text-ink shadow-[0_1px_3px_rgba(26,26,24,0.04),0_14px_34px_-16px_rgba(26,26,24,0.14)] transition-[opacity,transform,box-shadow] duration-500 ease-out hover:shadow-[0_3px_8px_rgba(26,26,24,0.05),0_26px_54px_-18px_rgba(138,110,47,0.26)] ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ArrowDownIcon />
      </button>
    </div>
  );
}
