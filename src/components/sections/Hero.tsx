"use client"

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { PhoneArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[url('/bg_image.png')] bg-cover bg-center">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-4 text-center"
          >

            {/* Brand */}
            <h2 className="font-sans text-sm uppercase tracking-[0.2em] text-white/70">
              Marci Metzger · The Ridge Realty Group
            </h2>

            {/* Main heading */}
            <h1 className="font-[var(--font-cormorant)] text-7xl font-semibold leading-none tracking-tight text-white md:text-[110px]">
              Pahrump
            </h1>

            {/* Subtitle */}
            <span className="font-[var(--font-cormorant)] text-4xl font-semibold italic text-white/85 md:text-[55px]">
              Realtor.
            </span>

            {/* Description */}
            <p className="mt-2 max-w-md font-[var(--font-inter)] text-base leading-relaxed text-white/75">
              Nearly three decades finding homes in the high desert —
              where the Spring Mountains meet Nevada sky.
            </p>

       
            <div className="mt-2">
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href="#contact" />}
                className="rounded-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                <PhoneArrowUpRightIcon className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}