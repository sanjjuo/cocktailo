"use client";
import About from "@/components/About/About";
import Cocktails from "@/components/Cocktails/Cocktails";
import Hero from "@/components/Hero/Hero";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Cocktails/>
      <About />
    </div>
  );
};

export default MainPage;
