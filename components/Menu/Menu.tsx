import React from "react";
import Slider from "./Slider";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  useGSAP(() => {
    const scrollSliderLeaf = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 30%",
      },
    });
    scrollSliderLeaf
      .from("#s-left-leaf", {
        x: -100,
        y: 100,
        duration: 1.2,
        ease: "power2.out",
      })
      .from(
        "#s-right-leaf",
        {
          x: 100,
          y: 100,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1"
      );
  }, []);
  return (
    <div id="menu" className="px-5 py-10 lg:py-20 lg:px-0 relative">
      <h1 className="text-5xl md:text-7xl text-app-secondary font-bold text-center">
        Featured Items
      </h1>
      <div className="mt-20 app-width max-w-[100px]">
        <Slider />
      </div>

      <Image
        id="s-left-leaf"
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="Decorative left leaf"
        className="hidden md:block absolute -left-20 -bottom-20 rotate-[60deg] z-30"
      />
      <Image
        id="s-right-leaf"
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="Decorative left leaf"
        className="hidden md:block absolute -right-20 -top-20 -rotate-[70deg] z-30"
      />
    </div>
  );
};

export default Menu;
