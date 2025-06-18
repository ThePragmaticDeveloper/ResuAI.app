"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FaStripe } from "react-icons/fa";
import { SiSamsung, SiIntel, SiAmd, SiFedex, SiFiverr, SiZoom , SiCognizant, SiNasa, SiActivision } from "react-icons/si";

const brands = [
  {
    key: "stripe",
    component: FaStripe
  }, 
  {
    key: "intel",
    component: SiIntel
  },
  {
    key: "samsung",
    component: SiSamsung
  },
  {
    key: "zoom",
    component: SiZoom 
  },
  {
    key: "cognizant",
    component: SiCognizant 
  },
  {
    key: "amd",
    component: SiAmd
  },
  {
    key: "fedex",
    component: SiFedex
  },
  {
    key: "fiverr",
    component: SiFiverr
  },
  {
    key: "activision",
    component: SiActivision
  },
  {
    key: "nase",
    component: SiNasa
  }
]

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
                {brands.map((brand, index) => (
                  <CarouselItem
                    className="basis-1/4 lg:basis-1/6"
                    key={index}
                  >
                    <div className="flex items-center justify-center p-2">
                      {brand.component && <brand.component size={48} />}
                      
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
