import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 lg:py-20 lg:px-0">
      <h1 className="font-bold text-5xl md:text-7xl">Where to find us</h1>
      <div className="mt-10 space-y-6 md:space-y-10">
        <div className="text-center space-y-5">
          <h5 className="uppercase md:text-lg">visit our store</h5>
          <p className="text-xl md:text-3xl">Hor al anz, Deira, Dubai, UAE </p>
        </div>
        <div className="text-center space-y-5">
          <h5 className="uppercase md:text-lg">contact us</h5>
          <div>
            <p className="text-xl md:text-3xl">+971 544772940</p>
            <p className="text-xl md:text-3xl">hello@gmail.com</p>
          </div>
        </div>

        <div className="text-center space-y-5">
          <h5 className="uppercase md:text-lg">open every day</h5>
          <ul>
            <li className="text-xl md:text-3xl">Fri: 11:00am to 2am</li>
            <li className="text-xl md:text-3xl">Sat: 09:00am to 2am</li>
            <li className="text-xl md:text-3xl">Sun: 09:00am to 1am</li>
          </ul>
        </div>

        <div className="text-center space-y-5">
          <h5 className="uppercase text-sm">follow on</h5>
          <ul className="flex items-center justify-center gap-10">
            <li>
              <Link href="">
                <Instagram className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Twitter className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="">
                <Facebook className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
