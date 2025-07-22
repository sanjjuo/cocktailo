"use client";
import Link from "next/link";
import React from "react";
import { navLinks } from "./data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-10">
      {navLinks.map((item) => (
        <Link key={item.id} href={item.href}>
          <li
            className={cn(
              pathname === item.href ? "text-app-primary font-bold" : null,
              "text-lg tracking-wide first-letter:uppercase first-letter:font-extrabold first-letter:text-app-primary hover:text-app-primary duration-200 ease-in-out"
            )}
          >
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
