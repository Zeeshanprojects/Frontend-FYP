"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define an array of light background colors
const bgColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-pink-100",
  "bg-indigo-100",
  "bg-teal-100",
  "bg-orange-100",
  "bg-cyan-100",
  "bg-lime-100",
  "bg-amber-100",
  "bg-fuchsia-100",
  "bg-rose-100",
  "bg-sky-100",
];

export const Testimonials1 = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prevCurrent) => prevCurrent + 1);
      }
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [api, current]);

  return (
    <div className="w-full py-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="lg:basis-1/3" key={index}>
                  <div className={`rounded-md p-4 flex flex-col justify-between ${bgColors[index % bgColors.length]} h-64`}>
                    <img src="/customer.png" alt="Small Icon" className="w-8 h-8 rounded-full mb-4" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">Best decision</h3>
                        <p className="text-muted-foreground text-base">
                          Our goal was to streamline SMB trade, making it easier
                          and faster than ever and we did it together.
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>John Johnsen</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
