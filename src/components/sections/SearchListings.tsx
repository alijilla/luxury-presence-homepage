"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/spinner";

export function SearchListings() {
  const [isSearching, setSearching] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearching(true);

    // Simulate property searching
    setTimeout(() => {
      setSearching(false);
    }, 2000);
  };

  return (
    <section
      id="listings"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          Find Your Home
        </p>

        <h2 className="mt-4 font-[var(--font-cormorant)] text-4xl text-white md:text-5xl">
          Search Listings
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">
          Explore available properties and find a home that fits your lifestyle.
        </p>
      </div>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="mx-auto max-w-5xl"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Location
            </label>

            <Select defaultValue="any">
              <SelectTrigger className="h-11 rounded-sm border-white/20 bg-transparent text-white">
                <SelectValue placeholder="Location" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="any">
                  Any
                </SelectItem>

                <SelectItem value="pahrump">
                  Pahrump
                </SelectItem>

                <SelectItem value="las-vegas">
                  Las Vegas
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Type
            </label>

            <Select defaultValue="any">
              <SelectTrigger className="h-11 rounded-sm border-white/20 bg-transparent text-white">
                <SelectValue placeholder="Type" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="any">
                  Any
                </SelectItem>

                <SelectItem value="single-family">
                  Single Family
                </SelectItem>

                <SelectItem value="condo">
                  Condo / Townhouse
                </SelectItem>

                <SelectItem value="land">
                  Land
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Sort by
            </label>

            <Select defaultValue="newest">
              <SelectTrigger className="h-11 rounded-sm border-white/20 bg-transparent text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="newest">
                  Newest
                </SelectItem>

                <SelectItem value="price-low">
                  Price: Low to High
                </SelectItem>

                <SelectItem value="price-high">
                  Price: High to Low
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Bedrooms */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Bedrooms
            </label>

            <Select defaultValue="any">
              <SelectTrigger className="h-11 rounded-sm border-white/20 bg-transparent text-white">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="any">
                  Any number
                </SelectItem>

                <SelectItem value="1">
                  1+
                </SelectItem>

                <SelectItem value="2">
                  2+
                </SelectItem>

                <SelectItem value="3">
                  3+
                </SelectItem>

                <SelectItem value="4">
                  4+
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Baths */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Baths
            </label>

            <Select defaultValue="any">
              <SelectTrigger className="h-11 rounded-sm border-white/20 bg-transparent text-white">
                <SelectValue placeholder="Baths" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="any">
                  Any number
                </SelectItem>

                <SelectItem value="1">
                  1+
                </SelectItem>

                <SelectItem value="2">
                  2+
                </SelectItem>

                <SelectItem value="3">
                  3+
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Min Price */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Min Price
            </label>

            <Input
              placeholder="$0"
              className="h-11 rounded-sm border-white/20 bg-transparent text-white placeholder:text-white/40"
            />
          </div>

          {/* Max Price */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-white/90">
              Max Price
            </label>

            <Input
              placeholder="No max"
              className="h-11 rounded-sm border-white/20 bg-transparent text-white placeholder:text-white/40"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-12 flex justify-center">
          <Button
            type="submit"
            disabled={isSearching}
            className="h-12 min-w-[170px] rounded-sm bg-white px-10 text-sm font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSearching ? (
              <>
                <Spinner />
                <span>Searching...</span>
              </>
            ) : (
              "Search Now"
            )}
          </Button>
        </div>

        {/* Searching Message */}
        {isSearching && (
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/50">
            <Spinner />
            <span>Searching available properties...</span>
          </div>
        )}
      </form>
    </section>
  );
}