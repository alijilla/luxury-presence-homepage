"use client"
import { Card } from "@/components/ui/card"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export function Services() {
  return (
    <section className="border-y border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-7xl mx-auto gap-4">

        <Card className="rounded-lg border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
          <motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center"
>
  <div className="overflow-hidden rounded-[12px] shadow-2xl relative group">
    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none" />
    <Image
      src="/marci.jpg"
      alt="Marci J. Metzger"
      width={1254}
      height={1254}
      quality={100}
      className="h-[400px] w-[400px]  object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</motion.div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Real Estate Done Right
          </p>
          <p className="text-secondary/60 tracking-[0.25em]">Nervous about your property adventure? Don&apos;t be. Whether buying or selling, our team ensures the best experience possible.</p>
        </Card>

        <Card className="rounded-none border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
         <motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center"
>
  <div className="overflow-hidden rounded-[12px] shadow-2xl relative group">
    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none" />
    <Image
      src="/marci.jpg"
      alt="Marci J. Metzger"
      width={1254}
      height={1254}
      quality={100}
      className="h-[400px] w-[400px]  object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</motion.div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
           Commercial & Residential
          </p>
          <p className="text-secondary/60 tracking-[0.25em]">Large or small, condo or mansion — fixer-upper or luxury build. We live, work, and play in this community.</p>
    
        </Card>

        <Card className="rounded-none border-0 bg-transparent p-12 text-center shadow-none transition-colors hover:bg-white/5">
          <motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex justify-center"
>
  <div className="overflow-hidden rounded-[12px] shadow-2xl relative group">
    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500 z-10 pointer-events-none" />
    <Image
      src="/marci.jpg"
      alt="Marci J. Metzger"
      width={1254}
      height={1254}
      quality={100}
      className="h-[400px] w-[400px]  object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</motion.div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Rely on Expertise
          </p>
          <p className="text-secondary/60 tracking-[0.25em]">Questions about affordability, credit, and loan options — trust us to connect you with the right people.</p>
        </Card>

      </div>
    </section>
  );
}
