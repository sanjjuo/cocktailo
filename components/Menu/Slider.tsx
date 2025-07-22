"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailsAndMojitosList } from "./data";

const Slider = () => {
  useGSAP(() => {
    const items = document.querySelectorAll(".carousel-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".item-title",
              { opacity: 0 },
              { opacity: 1, duration: 1, ease: "power2.out" }
            );

            gsap.fromTo(
              ".item-image",
              { xPercent: -100, opacity: 0 },
              { xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
            );

            gsap.fromTo(
              ".item-description h2",
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
            );
            gsap.fromTo(
              ".item-description p",
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
            );
          }
        });
      },
      {
        threshold: 0.5, // trigger when 50% of the slide is visible
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Carousel id="carousel">
      <CarouselContent>
        {cocktailsAndMojitosList.slice(0, 3).map((item) => (
          <CarouselItem key={item.id} className="carousel-item py-5">
            <div className="flex items-end justify-between gap-5 md:gap-0">
              <div className="hidden max-w-[350px] md:flex flex-col">
                <h2 className="text-sm md:text-lg">Recipies for</h2>
                <h3 className="item-title text-5xl font-bold capitalize text-app-primary">
                  {item.name}
                </h3>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-end gap-5 md:gap-10">
                <div className="md:hidden max-w-[350px] flex flex-col">
                  <h2 className="text-sm md:text-lg">Recipies for</h2>
                  <h3 className="item-title text-4xl md:text-5xl font-bold capitalize text-app-primary">
                    {item.name}
                  </h3>
                </div>
                <div className="w-[300px] h-[300px] md:w-[600px] md:h-[800px]">
                  <img
                    src={item.image || "/classic.png"}
                    alt="slider-image"
                    className="item-image w-full h-full object-cover"
                  />
                </div>
                <div className="item-description text-center md:text-start max-w-lg">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold first-letter:uppercase">
                    {item.famousFor}
                  </h2>
                  <p className="text-sm md:text-lg mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  );
};

export default Slider;

// 1) document.querySelectorAll(".carousel-item"),
// We use this to select all elements in the DOM (HTML) that have the class .carousel-item.
// Because we need to get a list of all the slides in the carousel, so we can later watch each of them using IntersectionObserver.

// 2) IntersectionObserver
// So that we can animate a slide only when it becomes visible (instead of animating everything at once).
