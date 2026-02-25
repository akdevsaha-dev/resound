"use client";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">(
    "visible",
  );

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setPhase("fading");
    }, 300);

    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 700);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`
        fixed inset-0 bg-black z-50
        transition-opacity duration-500
        ${phase === "fading" ? "opacity-0" : "opacity-100"}
      `}
    />
  );
}
