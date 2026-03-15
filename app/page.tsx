import { Features } from "./components/features";
import { Hero } from "./components/Hero";
import { SplashScreen } from "./components/splash";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText);

export default function Home() {
  return (
    <div className="">
      <SplashScreen />
      <Hero />
      <Features />
    </div>
  );
}
