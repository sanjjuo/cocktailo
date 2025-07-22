"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeCocktailListComponent = ({
  cocktails,
}: {
  cocktails: CocktailsNameListData[];
}) => {
  useGSAP(() => {
    const scrollCocktailAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktail-section",
        start: "top 80%", // when top of section hits 80% of viewport
        scrub: 1.5,
      },
    });
    scrollCocktailAnimation.fromTo(
      ".cocktail-list-item",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
      }
    );
  }, []);

  return (
    <div id="cocktail-section" className="space-y-5">
      {cocktails.map((item) => (
        <div
          className="cocktail-list-item flex items-start justify-between gap-10"
          key={item.id}
        >
          <div className="space-y-1">
            <h1 className="text-app-secondary text-xl md:text-3xl font-bold">
              {item.name}
            </h1>
            <p>
              {item?.origin} | {item.volume} L
            </p>
          </div>
          <span className="text-xl md:text-3xl font-bold">${item.price}</span>
        </div>
      ))}
    </div>
  );
};

export default HomeCocktailListComponent;
