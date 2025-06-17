"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Cases = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timeout = setTimeout(() => {
      const nextIndex =
        api.selectedScrollSnap() + 1 === api.scrollSnapList().length
          ? 0
          : api.selectedScrollSnap() + 1;

      setCurrent(nextIndex);
      api.scrollTo(nextIndex);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container max-w-[90rem] mx-auto px-4">
        <div className="flex items-center gap-8">
          <h3 className="text-xl font-regular whitespace-nowrap shrink-0">
            Top companies hire our customers
          </h3>

          <div className="relative flex-1 overflow-hidden">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute inset-0 h-full w-full pointer-events-none" />
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {Array.from({ length: 25 }).map((_, index) => (
                  <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={index}
                  >
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                      <span className="text-sm">Logo {index + 1}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
