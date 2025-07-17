"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="w-6 h-6 text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right" className="bg-gray-800 p-5">
        <SheetHeader>
          <SheetTitle className="text-white text-center">Menubar</SheetTitle>
          <SheetDescription />
        </SheetHeader>

        {/* Nav Links */}
        <div className="flex flex-col gap-4 mt-6">
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
