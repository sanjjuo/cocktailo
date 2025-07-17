import AppIcon from "@/components/svg/AppIcon";
import React from "react";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <span>
        <AppIcon className="w-6 h-6 md:w-8 md:h-8" />
      </span>
      <span className="text-xl md:text-3xl font-semibold tracking-wider custom-font">
        cocktailo
      </span>
    </div>
  );
};

export default AppLogo;
