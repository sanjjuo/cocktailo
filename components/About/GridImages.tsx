"use client";
import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import { CraftedToImpress } from "./data";
import { CircleCheck } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GridImages = () => {
  useGSAP(() => {
    const gridTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#grid",
        start: "top center",
      },
    });
    gridTimeline.from("#first-grid", {
      opacity: 0,
      stagger: 0.06,
      ease: "power1.inOut",
      duration: 1,
    });
  }, []);
  return (
    <div
      id="grid"
      className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-4 p-4"
    >
      <div id="first-grid" className="col-span-1 row-span-3">
        <div className="w-full h-60 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt1.png"
            alt="Image 1"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div id="first-grid" className="col-span-1 row-span-3">
        <div className="w-full h-full relative bg-[url('/noise-bg.jpg')] bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-lg p-5">
          <h1 className="text-2xl font-bold">Crafted to impress</h1>
          <Separator orientation="horizontal" className="w-full my-2" />
          <ul className="space-y-5">
            {CraftedToImpress.map((item) => (
              <li key={item.id} className="flex items-center gap-1">
                <CircleCheck />
                {item.list}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="first-grid" className="col-span-2 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt2.png"
            alt="Image 3"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div id="first-grid" className="col-span-3 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt3.png"
            alt="Image 4"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div id="first-grid" className="col-span-1 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt4.png"
            alt="Image 5"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default GridImages;
