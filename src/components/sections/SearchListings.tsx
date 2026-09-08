"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Loader2 } from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const fieldClass =
  "h-12 w-full min-w-0 rounded-none border-white/10 bg-transparent text-white transition-colors hover:border-white/30 focus:ring-1 focus:ring-white/30";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50";

export function SearchListings() {
  const [isSearching, setSearching] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearching(true);

    setTimeout(() => {
      setSearching(false);
    }, 2000);
  };

  return (
    <section
      id="listings"
      className="border-y border-white/5 bg-[#0a0a0a] py-32 lg:py-48"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Listings
          </p>

          <h2 className="mb-8 font-[var(--font-cormorant)] text-5xl font-medium tracking-tight text-white md:text-6xl">
            Search Listings
          </h2>

          <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-white/60">
            Explore properties and find the right opportunity in Pahrump and the
            surrounding area.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mx-auto w-full max-w-5xl"
        >
          <div className="mb-16 grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
            <div className="flex min-w-0 flex-col gap-3 lg:col-span-3">
              <label htmlFor="location" className={labelClass}>
                Location
              </label>
              <Select defaultValue="any">
                <SelectTrigger id="location" className={fieldClass}>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/10 bg-[#0a0a0a] text-white">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="pahrump">Pahrump</SelectItem>
                  <SelectItem value="las-vegas">Las Vegas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-3">
              <label htmlFor="type" className={labelClass}>
                Type
              </label>
              <Select defaultValue="any">
                <SelectTrigger id="type" className={fieldClass}>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/10 bg-[#0a0a0a] text-white">
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="single-family">Single Family</SelectItem>
                  <SelectItem value="condo">Condo / Townhouse</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-3">
              <label htmlFor="sort" className={labelClass}>
                Sort by
              </label>
              <Select defaultValue="newest">
                <SelectTrigger id="sort" className={fieldClass}>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/10 bg-[#0a0a0a] text-white">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">
                    Price: High to Low
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-3">
              <label htmlFor="beds" className={labelClass}>
                Bedrooms
              </label>
              <Select defaultValue="any">
                <SelectTrigger id="beds" className={fieldClass}>
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/10 bg-[#0a0a0a] text-white">
                  <SelectItem value="any">Any number</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-4">
              <label htmlFor="baths" className={labelClass}>
                Baths
              </label>
              <Select defaultValue="any">
                <SelectTrigger id="baths" className={fieldClass}>
                  <SelectValue placeholder="Baths" />
                </SelectTrigger>
                <SelectContent className="rounded-none border-white/10 bg-[#0a0a0a] text-white">
                  <SelectItem value="any">Any number</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-4">
              <label htmlFor="min-price" className={labelClass}>
                Min price
              </label>
              <Input
                id="min-price"
                placeholder="$0"
                className={`${fieldClass} placeholder:text-white/30`}
              />
            </div>

            <div className="flex min-w-0 flex-col gap-3 lg:col-span-4">
              <label htmlFor="max-price" className={labelClass}>
                Max price
              </label>
              <Input
                id="max-price"
                placeholder="No max"
                className={`${fieldClass} placeholder:text-white/30`}
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              type="submit"
              disabled={isSearching}
              variant="outline"
              className="group rounded-none border-white/20 bg-transparent px-14 py-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 ease-out hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSearching ? (
                <>
                  <Loader2 className="mr-3 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  Search Now
                  <ArrowRightIcon className="ml-3 h-4 w-4 opacity-70 transition-transform duration-500 group-hover:translate-x-1" />
                </>
              )}
            </Button>

            {isSearching && (
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                <span>Searching available properties...</span>
              </div>
            )}
          </div>
        </form>

        {/* Featured Property Showcase */}
        <div className="mt-32 border-t border-white/5 pt-32">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 mb-12 text-center md:text-left">
            Featured Property
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Property Image Carousel */}
            <div className="lg:col-span-8 group relative aspect-[16/9] overflow-hidden bg-[#080808]">
              <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent className="-ml-0 h-full">
                  {["/g2.png", "/g7.png", "/g8.png", "/g9.png", "/g10.png"].map((src, index) => (
                    <CarouselItem key={index} className="pl-0 relative aspect-[16/9] w-full h-full">
                      <Image
                        src={src}
                        alt={`4751 W Adkisson Street - Image ${index + 1}`}
                        fill
                        className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-out"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Custom Positioned Navigation Controls */}
                <div className="absolute bottom-6 right-6 flex gap-2 z-10">
                  <CarouselPrevious className="static translate-y-0 translate-x-0 h-12 w-12 bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black rounded-none backdrop-blur-sm transition-colors" />
                  <CarouselNext className="static translate-y-0 translate-x-0 h-12 w-12 bg-black/60 border border-white/20 text-white hover:bg-white hover:text-black rounded-none backdrop-blur-sm transition-colors" />
                </div>
              </Carousel>
            </div>

            {/* Property Details */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                4 BEDS &middot; 5 BATHS &middot; 5,530 SQFT &middot; 80 ACRES
              </p>
              <h3 className="font-[var(--font-cormorant)] text-4xl lg:text-5xl text-white mb-2 tracking-tight leading-[1.1]">
                Custom Estate on 80 Acres
              </h3>
              <p className="text-sm text-white/60 font-light mb-8">
                4751 W Adkisson Street, Pahrump, NV
              </p>
              
              <div className="flex flex-col items-start gap-6 mt-4">
                <p className="text-2xl text-white font-medium tracking-tight">
                  $1,850,000
                </p>
                <a href="https://theridgerealty.idxbroker.com/idx/details/listing/c015/2743604/4751-W-Adkisson-Street-Pahrump-NV" target="_blank" rel="noopener noreferrer" className="border-b border-white/30 text-[9px] uppercase tracking-[0.2em] font-semibold text-white/70 pb-2 transition-all duration-500 hover:text-white hover:border-white">
                  View Details &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}