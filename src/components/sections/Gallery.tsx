"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Gallery() {
  return (
    <section id="gallery" className="bg-black py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 mb-4">
            The Lifestyle
          </p>
          <h2 className="font-[var(--font-cormorant)] text-5xl md:text-6xl text-white font-medium tracking-tight">
            Life in Pahrump
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-8 group relative aspect-[4/3] overflow-hidden bg-white/5"
          >
            <Image
              src="/g4.png"
              alt="Pahrump Nevada landscape"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </motion.div>

          {/* Side Portrait */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-4 group relative aspect-[3/4] md:aspect-auto h-full min-h-[300px] overflow-hidden bg-white/5"
          >
            <Image
              src="/g1.png"
              alt="Desert Lifestyle"
              fill
              className="object-cover object-top grayscale opacity-70 transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </motion.div>

          {/* Bottom Left Square */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-5 group relative aspect-square overflow-hidden bg-white/5"
          >
            <Image
              src="/g3.png"
              alt="Pahrump Community"
              fill
              className="object-cover object-right grayscale transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </motion.div>

          {/* Bottom Right Wide */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="md:col-span-7 group relative aspect-[16/9] md:aspect-auto h-full min-h-[250px] overflow-hidden bg-white/5"
          >
            <Image
              src="/g5.png"
              alt="Nevada scenery"
              fill
              className="object-cover object-bottom transition-transform duration-[2000ms] group-hover:scale-105"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}