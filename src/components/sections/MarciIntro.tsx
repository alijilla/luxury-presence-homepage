"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function MarciIntro() {
  return (
    <section id="about" className="bg-black py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Portrait Image (Left, spanning 5 cols, offset by 1) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 lg:col-start-2 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden bg-white/5">
              <Image
                src="/marci.jpg"
                alt="Marci Metzger - Pahrump Realtor"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              />
            </div>
            {/* Minimalist decorative line */}
            <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-px bg-white/20" />
          </motion.div>

          {/* Text Content (Right, spanning 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 mb-8">
              The Agent
            </p>
            
            <h2 className="font-[var(--font-cormorant)] text-5xl md:text-6xl text-white font-medium tracking-tight leading-[1.1] mb-8">
              Marci J. Metzger
            </h2>
            
            <div className="flex flex-col gap-6 text-sm text-white/60 font-light leading-relaxed">
              <p>
                Marci was a REALTOR&reg;, then a licensed Broker, in Washington State. Now, she is enjoying the sunshine and helping clients navigate the unique real estate landscape of Southern Nevada.
              </p>
              <p>
                With nearly three decades of industry experience, her approach combines deep market knowledge with an uncompromising commitment to her clients&apos; best interests. Whether finding a hidden gem or aggressively marketing a luxury estate, Marci ensures every transaction is handled with precision.
              </p>
            </div>
            
            <div className="mt-12">
              <Image
                src="/header_logo.png"
                alt="The Ridge Realty Group"
                width={180}
                height={60}
                className="h-auto w-[140px] opacity-50 brightness-0 invert"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
