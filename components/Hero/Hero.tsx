"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  useGSAP(() => {
    const MainTitle = new SplitText("#main-title", { type: "chars,  words" });
    const SubTitle = new SplitText("#sub-title", {
      type: "chars,  lines",
    });

    gsap.from(MainTitle.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(SubTitle.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.4,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to("#right-leaf", { y: -200 }, 0)
      .to("#left-leaf", { y: 200 }, 0);
  }, []);

  return (
    <div id="hero" className="relative h-[calc(100vh-20px)]">
      <h1
        id="main-title"
        className="text-7xl lg:text-9xl font-semibold text-center custom-font z-40"
      >
        mojito
      </h1>
      <Image
        src="/left-leaf.png"
        width={500}
        height={500}
        alt="left-leaf"
        id="left-leaf"
        className="hidden md:block absolute -left-20 bottom-20 rotate-[60deg] z-30"
      />
      <Image
        src="/right-leaf.png"
        width={500}
        height={500}
        alt="right-leaf"
        id="right-leaf"
        className="hidden md:block absolute right-20 -top-20 lg:-top-80 -rotate-[60deg] z-30"
      />
      <div className="absolute bottom-20 md:bottom-60 w-full z-40">
        <div className="flex items-center justify-between app-width h-full">
          <div className="max-w-96">
            <h5 className="text-sm mb-3">Cool. Crisp. Classic</h5>
            <p
              id="sub-title"
              className="text-app-secondary custom-font text-xl md:text-4xl tracking-wider"
            >
              Sip the Spirit of Summer
            </p>
          </div>
          <div>
            <h3 id="sub-title" className="text-sm md:text-lg mb-3">
              Every sip begins a story. Crafted with care, <br /> poured with
              soul. Bold blends, <br /> delicate details. Moments worth mixing.{" "}
              <br /> Welcome to the art of the cocktail.
            </h3>
            <Link
              href="https://www.allrecipes.com/article/top-50-cocktail-list-and-recipes/"
              target="_blank"
              className="underline text-app-primary font-semibold tracking-wide"
            >
              View cocktails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
