"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function GetItSold() {
  return (
    <section id="expertise" className="bg-black py-32 lg:py-48 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Typography / Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 mb-8">
              The Standard
            </p>
            
            <h2 className="font-[var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-[1.05] mb-10">
              We don&apos;t just list it.<br/>
              <span className="italic text-white/70">We get it sold.</span>
            </h2>
            
            <div className="w-12 h-px bg-white/20 mb-10" />
            
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
              Selling a property in Southern Nevada requires more than a sign in the yard. It requires targeted marketing, strategic pricing, and a network of qualified buyers. Whether you are buying your first desert retreat or selling a luxury estate, Marci provides a masterclass in real estate representation.
            </p>
          </motion.div>

          {/* Abstract/Landscape Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden bg-white/5">
              <Image
                src="/g12.png"
                alt="Nevada Landscape"
                fill
                className="object-cover object-center grayscale opacity-80"
              />
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
}
