import { Features } from "./components/features";
import { Hero } from "./components/Hero";
import { SplashScreen } from "./components/splash";

export default function Home() {
  return (
    <div className="">
      <SplashScreen />
      <Hero />
      <Features />
    </div>
  );
}
