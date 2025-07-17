import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-5 py-10 lg:py-20 lg:px-0">{children}</div>;
};

export default MainLayout;
