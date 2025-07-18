import Image from "next/image";
import React from "react";

const GridImages = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-6 gap-4 p-4">
      <div className="col-span-1 row-span-3">
        <div className="w-full h-60 relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt1.png"
            alt="Image 1"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-3">
        <div className="w-full h-full relative bg-white rounded-xl overflow-hidden shadow-lg"></div>
      </div>

      <div className="col-span-2 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt2.png"
            alt="Image 3"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div className="col-span-3 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt3.png"
            alt="Image 4"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>

      <div className="col-span-1 row-span-3">
        <div className="w-full h-full relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/abt4.png"
            alt="Image 5"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default GridImages;
