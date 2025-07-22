"use client";
import About from "@/components/About/About";
import Art from "@/components/Art/Art";
import HomeCocktailList from "@/components/Cocktails/HomeCocktailList/HomeCocktailList";
import Contact from "@/components/contact/contact";
import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu/Menu";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MainPage = () => {
  return (
    <div>
      <Hero />
      <HomeCocktailList />
      <div className="bg-black">
        <About />
      </div>
      <div className="hidden lg:block bg-radial-dark">
        <Art />
      </div>
      <div className="bg-black">
        <Menu />
      </div>
      <Contact />
    </div>
  );
};

export default MainPage;
