"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
import { ratingImages } from "./data";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const HeadingAndRatings = () => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className="fill-white w-4 h-4" />
  ));

  useGSAP(() => {
    const titleSplit = SplitText.create("#heading", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#headingsAndRatings",
        start: "top center",
      },
    });

    scrollTimeline.from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.02,
    });
  }, []);
  return (
    <div
      id="headingsAndRatings"
      className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-32"
    >
      <div className="space-y-10">
        <Badge className="bg-white text-black h-10 w-32 flex items-center justify-center text-lg rounded-3xl shadow-white cursor-pointer hover:bg-white/90">
          Best cocktails
        </Badge>
        <h1 id="heading" className="text-3xl md:text-7xl font-bold">
          Where every detail matters - from muddle to garnish.
        </h1>
      </div>
      <div className="space-y-5">
        <p className="text-xl">
          Every cocktail we serve is a reflection of our obsession with detail —
          from the first muddle to the final garnish. That care is what turns a
          simple drink into something truly memorable.
        </p>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-1">{stars}</div>
            <h4 className="font-bold text-3xl">4.5/5</h4>
            <p className="text-sm">More than +12000 customers</p>
          </div>
          <Separator orientation="vertical" className="h-20" />
          <ul className="flex items-center -space-x-2 bg-gray-800 p-2 rounded-full">
            {ratingImages.map((item) => (
              <li key={item.id}>
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt="rating-image"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndRatings;
