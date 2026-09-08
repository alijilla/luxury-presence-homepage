"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navlist = [
    { tabname: "About", tabhref: "#about" },
    { tabname: "Expertise", tabhref: "#expertise" },
    { tabname: "Featured", tabhref: "#featured" },
    { tabname: "Gallery", tabhref: "#gallery" },
    { tabname: "Services", tabhref: "#services" },
    { tabname: "Contact", tabhref: "#contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 pt-8 pb-4">
      {/* Desktop */}
      <nav className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8">
        <Link href="/" aria-label="Marci Metzger" className="group flex items-center gap-4">
          <Image 
            src="/marci_logo_original.png" 
            alt="Marci Metzger Homes Logo" 
            width={200} 
            height={60} 
            className="w-auto h-8 lg:h-10 invert object-contain" 
          />
        </Link>

        <ul className="flex items-center gap-10">
          {navlist.map((item) => (
            <li key={item.tabname}>
              <a
                href={item.tabhref}
                className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/70 transition-all duration-500 hover:text-white"
              >
                {item.tabname}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between px-6">
        <Link href="/" aria-label="Marci Metzger" className="flex items-center gap-3">
          <Image 
            src="/marci_logo_original.png" 
            alt="Marci Metzger Homes Logo" 
            width={150} 
            height={50} 
            className="w-auto h-7 invert object-contain" 
          />
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger aria-label="Open navigation menu" className="p-2 text-white">
            <Bars3Icon className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="top" className="flex flex-col items-center justify-center py-20 bg-black/95 border-none">
            <h2 className="font-[var(--font-cormorant)] text-3xl text-white tracking-widest font-medium mb-12">
              MARCI METZGER
            </h2>
            <ul className="flex flex-col gap-8 text-center">
              {navlist.map((item) => (
                <li key={item.tabname}>
                  <a
                    href={item.tabhref}
                    onClick={() => setIsOpen(false)}
                    className="text-[11px] uppercase tracking-[0.3em] font-medium text-white/70 transition-all duration-300 hover:text-white"
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