"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
export function GetItSold() {
  return (
<>

     <div className="flex justify-self-center">
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex items-center p-4"
>
<div className="text-center">

  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
    Get it sold
  </p>

  <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white">
  We don&apos;t just list it — we get it sold.
  </h2>
</div>
</motion.div>


     </div>
      
          <section className="grid grid-cols-1 md:grid-cols-2 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="overflow-hidden rounded-md mt-10 mx-auto px-10 flex items-center">
            <Image
              src="/marci.jpg"
              alt="Marci J. Metzger"
              width={2508}
              height={2508}
              quality={100}
              className="h-[350px] w-[350px] object-cover rounded-md"
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center p-4"
        >
        <div className="text-center">
        
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
           Selling
          </p>
        
          <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white">
            Don&apos;t just list it.
          </h2>
        
        
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/70">
            We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer — getting you top dollar for your home.
          </p>
        
         </div>
        </motion.div>
        
          </section>


                    <section className="grid grid-cols-1 md:grid-cols-2 flex items-center">
 
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center p-4"
        >
        <div className="text-center">
        
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          Buying
          </p>
        
          <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white">
           A guide to buyers.
          </h2>
        
        
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/70">
            Nobody knows the market like we do. Enjoy having a pro at your service — market analysis, upgrade lists, contractors on speed dial, and more.
          </p>
        
         </div>
        </motion.div>
               <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="overflow-hidden rounded-md mt-10 mx-auto px-10 flex items-center">
            <Image
              src="/marci.jpg"
              alt="Marci J. Metzger"
              width={2508}
              height={2508}
              quality={100}
              className="h-[350px] w-[350px] object-cover rounded-md"
            />
          </div>
        </motion.div>
          </section>

</>

  );
}
