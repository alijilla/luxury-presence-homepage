"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navlist = [
    { tabname: "About", tabhref: "#about" },
    { tabname: "Listings", tabhref: "#listings" },
    { tabname: "Gallery", tabhref: "#gallery" },
    { tabname: "Services", tabhref: "#services" },
    { tabname: "Contact", tabhref: "#contact" },
  ];

  return (
    <header className=" sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">

      {/* Desktop */}
      <nav className=" hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8 py-5">

        <Link href="/" aria-label="Marci Metzger Homes">
          <Image
            src="/header_logo.png"
            alt="Marci Metzger Homes"
            width={280}
            height={90}
            className="h-auto w-[220px] lg:w-[260px]"
            priority
          />
        </Link>

        <ul className="flex items-center gap-7 text-sm text-muted-foreground">
          {navlist.map((item) => (
            <li key={item.tabname}>
              <a
                href={item.tabhref}
                className=" 
                 relative
                 font-playfair
                text-sm
                tracking-wide
                text-neutral-600
                transition-colors
                hover:text-neutral-900
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-px
                after:w-0
                after:bg-foreground
                after:content-['']
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
              >
                {item.tabname}
              </a>
            </li>
          ))}
        </ul>

      </nav>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-5 py-4">

        <Link href="/" aria-label="Marci Metzger Homes">
          <Image
            src="/header_logo.png"
            alt="Marci Metzger Homes"
            width={220}
            height={75}
            className="h-auto w-[180px]"
            priority
          />
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            aria-label="Open navigation menu"
            className="p-2"
          >
            <Bars3Icon className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="top" className="flex items-center justify-center py-10">
            <ul className="flex flex-col gap-6 text-center text-lg">
              {navlist.map((item) => (
                <li key={item.tabname}>
                  <a
                    href={item.tabhref}
                    onClick={() => setIsOpen(false)}
                    className="transition-colors hover:text-muted-foreground"
                  >
                    {item.tabname}
                  </a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}

export default Navbar;