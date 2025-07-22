"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import HomeCocktailListComponent from "./HomeCocktailListComponent";
import { mostLovedCocktails, popularCocktails } from "./data";

const HomeCocktailList = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
        duration: 1.2,
        ease: "power2.out",
      })
      .from(
        "#c-right-leaf",
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
    <div id="cocktails" className="relative">
      <div className="flex flex-col md:flex-row md:items-center app-width justify-between px-5 py-10 lg:py-20 lg:px-0 space-y-10">
        <div className="space-y-4">
          <h3 className="text-xl first-letter:uppercase font-semibold">
            most popular cocktails:
          </h3>
          <HomeCocktailListComponent cocktails={popularCocktails} />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl first-letter:uppercase font-semibold">
            most loved cocktails:
          </h3>
          <HomeCocktailListComponent cocktails={mostLovedCocktails} />
        </div>
      </div>
      <Image
        id="c-left-leaf"
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="Decorative left leaf"
        className="hidden md:block absolute -left-20 -bottom-20 rotate-[60deg] z-30"
      />
      <Image
        id="c-right-leaf"
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="Decorative left leaf"
        className="hidden md:block absolute -right-20 -bottom-20 -rotate-[70deg] z-30"
      />
    </div>
  );
};

export default HomeCocktailList;
