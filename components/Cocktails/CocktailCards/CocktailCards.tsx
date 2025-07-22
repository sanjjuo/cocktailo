"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useFetchCocktailData } from "@/services/react-query-services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BottleWine, LayoutDashboard, Martini } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CocktailCards = () => {
  const { data } = useFetchCocktailData();
  console.log(data);
  useGSAP(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, yPercent: 10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <>
      {data?.slice(0, 10).map((item) => (
        <Card key={item.idDrink} className="card flex flex-col">
          <CardHeader className="p-0 w-full overflow-hidden relative group">
            <Image
              src={item.strDrinkThumb || "/classic.png"}
              width={1000}
              height={160}
              alt="cocktail-image"
              className="object-contain hover:scale-105 transition-all transform duration-300 ease-in-out"
              quality={100}
            />
            <Badge
              className={cn(
                item.strAlcoholic === "Alcoholic"
                  ? "bg-red-500"
                  : "bg-green-500",
                "absolute top-2 right-2 hover:bg-red-500/95 cursor-default"
              )}
            >
              {item.strAlcoholic}
            </Badge>
            <div className="opacity-0 group-hover:bg-black/80 group-hover:opacity-100 absolute inset-0 !m-0 p-5">
              <ul className="mb-5 space-y-2">
                <li className="flex items-center gap-2">
                  <span>
                    <LayoutDashboard
                      strokeWidth={1.5}
                      className="w-7 h-7 stroke-white"
                    />
                  </span>
                  <span className="text-white">
                    <h5 className="font-bold tracking-wide text-sm">
                      CATEGORY
                    </h5>
                    <p className="text-sm tracking-wider">{item.strCategory}</p>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <BottleWine
                      strokeWidth={1.5}
                      className="w-8 h-8 stroke-white"
                    />
                  </span>
                  <span className="text-white">
                    <h5 className="font-bold tracking-wide text-sm">SPIRIT</h5>
                    <p className="text-sm tracking-wider">
                      {item.strIngredient1}
                    </p>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Martini
                      strokeWidth={1.5}
                      className="w-8 h-8 stroke-white"
                    />
                  </span>
                  <span className="text-white">
                    <h5 className="font-bold tracking-wide text-sm">GLASS</h5>
                    <p className="text-sm tracking-wider">{item.strGlass}</p>
                  </span>
                </li>
              </ul>
              <Link href={`/cocktails/${item.idDrink}`}>
                <Button className="text-lg rounded-none bg-transparent border border-app-primary text-app-primary hover:bg-app-primary hover:text-white ">
                  See Details
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="p-2 flex-1">
            <div>
              <span className="flex items-center justify-between">
                <h3 className="text-white font-bold text-lg">
                  {item.strDrink}
                </h3>
                <p className="font-bold text-lg text-white">$12</p>
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CocktailCards;
