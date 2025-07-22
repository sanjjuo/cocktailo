"use client";
import { CircleCheck } from "lucide-react";
import { ListOne, ListTwo } from "./data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  useGSAP(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top, top",
        end: "bottom center", //it ends once the bottom of the section reach at the center of the screen
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", {
        // here will fade is a className this className is only used here there is no style defined just for animation .
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-image", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 2,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, ease: "power1.inOut", duration: 1 });
  }, []);
  return (
    <div id="art" className="app-width px-5 py-10 lg:py-20 lg:px-0 relative">
      <h1 className="will-fade absolute inset-0 top-20 capitalize text-8xl lg:text-[200px] md:tracking-widest text-center font-extrabold gradient-text">
        the art
      </h1>
      <div className="w-full flex items-end justify-between">
        <ul className="will-fade space-y-5">
          {ListOne.map((item) => (
            <li
              key={item.id}
              className="capitalize text-base flex items-center gap-1"
            >
              <CircleCheck />
              {item.text}
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center w-[1090px] h-[800px]">
          <img
            src="/under-img.jpg"
            alt="masked-image"
            className="masked-image object-cover w-full h-full"
          />
          <div id="masked-container">
            <h2 className="will-fade font-bold text-3xl lg:text-5xl text-center mt-4 text-app-secondary">
              Sip-worthy perfection
            </h2>
            <div id="masked-content" className="text-center mt-2">
              <h3 className="text-5xl font-semibold">
                Made with crafts, Poured with passion
              </h3>
              <p className="text-sm md:text-xl mt-1">
                This isn't just a drink, it's a carefully crafted moment made
                just for you.
              </p>
            </div>
          </div>
        </div>
        <ul className="will-fade space-y-5">
          {ListTwo.map((item) => (
            <li
              key={item.id}
              className="capitalize text-base flex items-center gap-1"
            >
              <CircleCheck />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Art;
