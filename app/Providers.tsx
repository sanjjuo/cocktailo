"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar/Navbar";

const client = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      <Navbar />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
