"use client";
import React from "react";
import AppLogo from "../common/AppLogo/AppLogo";
import { navLinks } from "./data";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavLinks from "./NavLinks";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        start: "bottom top",
      },
    });
    navTween.fromTo(
      "#nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div
      id="nav"
      className="sticky top-0 w-full z-50 flex items-center justify-between h-20 app-width px-5 md:p-0"
    >
      <AppLogo />
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
