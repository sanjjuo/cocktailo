import { BottleWine, Martini, Wine } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-5 h-[90vh]">
      <Martini className="w-7 h-7 animate-spin stroke-app-primary" />
      <BottleWine className="w-7 h-7 animate-spin-slow stroke-app-secondary" />
      <Wine className="w-7 h-7 animate-spin stroke-app-primary" />
    </div>
  );
}
