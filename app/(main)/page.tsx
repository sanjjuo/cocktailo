"use client";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "@/components/Hero/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MainPage = () => {
  return (
    <div>
      <Hero />
      <div className="h-dvh bg-black" />
    </div>
  );
};

export default MainPage;
