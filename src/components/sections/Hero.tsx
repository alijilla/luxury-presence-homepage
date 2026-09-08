"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-black overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg_image.png"
          alt="Pahrump Nevada Landscape"
          fill
          priority
          className="object-cover opacity-60 mix-blend-luminosity scale-105"
        />
        {/* Subtle vignette/gradient over image to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/60 mb-6 ml-1">
            The Ridge Realty Group
          </p>
          
          <h1 className="font-serif text-7xl md:text-8xl lg:text-[9rem] text-white leading-[0.85] tracking-tight">
            Pahrump <br/>
            <span className="italic text-white/90">Realtor.</span>
          </h1>

          <div className="mt-16 max-w-md">
            <p className="text-sm md:text-base font-light text-white/70 leading-relaxed mb-10">
              Nearly three decades of experience helping clients buy and sell in the heart of Southern Nevada.
            </p>
            
            <a href="#contact" className="inline-block border border-white/30 text-[10px] uppercase tracking-widest text-white px-10 py-5 transition-all duration-500 hover:bg-white hover:text-black font-medium">
              Call Marci
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
