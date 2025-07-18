"use client";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  useGSAP(() => {
    const mainTitle = new SplitText("#main-title", { type: "chars, words" });
    const subtitleLine1 = new SplitText("#subtitle-line1", {
      type: "chars, lines",
    });
    const subtitleLine2 = new SplitText("#subtitle-line2", {
      type: "lines",
    });

    gsap.from(mainTitle.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(subtitleLine1.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.05,
      delay: 0.4,
    });

    gsap.from(subtitleLine2.lines, {
      y: 60,
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
      stagger: 0.04,
      delay: 0.7,
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    scrollTl
      .to(
        "#cocktail",
        { y: 200, scale: 0.6, opacity: 0.2, ease: "expo.out" },
        0
      )
      .to("#left-leaf", { y: 200 }, 0)
      .to("#right-leaf", { y: -200 }, 0);
  }, []);

  return (
    <section
      id="hero"
      className="relative md:h-[calc(100vh-80px)] flex flex-col items-center justify-center"
    >
      <div className="relative z-30">
        <Image
          id="cocktail"
          src="/cocktail.png"
          width={1000}
          height={900}
          alt="Mojito cocktail illustration"
        />
        <h1
          id="main-title"
          className="absolute inset-0 flex items-start pt-10 md:p-0 md:items-center justify-center text-7xl lg:text-[190px] font-semibold text-center custom-font z-40"
        >
          mojito
        </h1>
      </div>

      <Image
        id="left-leaf"
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="Decorative left leaf"
        className="hidden md:block absolute -left-20 bottom-0 rotate-[60deg] z-30"
      />
      <Image
        id="right-leaf"
        src="/right-leaf.png"
        width={500}
        height={500}
        alt="Decorative right leaf"
        className="hidden md:block absolute right-0 top-0 lg:-top-80 -rotate-[60deg] z-30"
      />

      <div className="hidden md:flex absolute bottom-20 md:bottom-40 w-full flex-col md:flex-row items-center md:items-end justify-center md:justify-between app-width z-40">
        <div className="max-w-3xl md:max-w-md">
          <h5 className="text-sm text-app-secondary mb-3 text-center md:text-left">
            Cool. Crisp. Classic
          </h5>
          <p
            id="subtitle-line1"
            className="text-app-secondary custom-font text-2xl md:text-3xl tracking-wider text-center md:text-left"
          >
            Sip the Spirit of Summer
          </p>
        </div>

        <div className="max-w-lg text-center md:text-right">
          <p
            id="subtitle-line2"
            className="text-sm md:text-lg text-app-secondary mb-4 leading-relaxed text-center md:text-right"
          >
            Every sip begins a story. Crafted with care, poured with soul. Bold
            blends, delicate details. Moments worth mixing. Welcome to the art
            of the cocktail.
          </p>
          <Link
            href="https://www.allrecipes.com/article/top-50-cocktail-list-and-recipes/"
            target="_blank"
            className="underline underline-offset-2 text-app-primary font-semibold tracking-wide"
          >
            View cocktails
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
