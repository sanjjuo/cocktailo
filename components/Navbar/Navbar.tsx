"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AppLogo from "../common/AppLogo/AppLogo";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "#nav",
        start: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    navTween.fromTo(
      "#nav",
      { backgroundColor: "#000000", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div id="nav" className="sticky top-0 w-full z-50  ">
      <div className="flex items-center justify-between app-width px-5 md:p-0 h-20">
        <AppLogo />
        <div className="hidden md:block">
          <NavLinks />
        </div>
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
