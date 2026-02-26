"use client";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">(
    "visible",
  );

  useEffect(() => {
    const fade = setTimeout(() => {
      setPhase("fading");
    }, 300);

    const hide = setTimeout(() => {
      setPhase("hidden");
    }, 700);

    return () => {
      clearTimeout(fade);
      clearTimeout(hide);
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
