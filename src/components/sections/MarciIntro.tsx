"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
export function MarciIntro() {
  return (
  <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-24 px-6 lg:px-16 max-w-7xl mx-auto">
<motion.div
  initial={{ opacity: 0, x: -30 }}
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
      className="h-[400px] w-[400px] lg:h-[550px] lg:w-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex flex-col text-center lg:text-left p-4"
>

  <p className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
    About
  </p>

  <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl lg:text-6xl text-white font-medium tracking-tight">
    Marci J. Metzger
  </h2>

  <p className="mt-3 text-sm text-white/60 tracking-wide uppercase">
    Realtor for nearly three decades
  </p>

  <p className="mx-auto lg:mx-0 mt-8 max-w-xl text-base leading-relaxed text-white/75 font-light">
    Marci was a REALTOR, then licensed Broker, in Washington State.
    Now, she is enjoying the sunshine, and helping clients in Southern
    Nevada. Having helped buyers and sellers in many markets since
    1995, she is a wealth of knowledge.
  </p>

  <div className="mx-auto lg:mx-0 mt-10 w-24 opacity-30">
    <Separator />
  </div>

  <p className="mx-auto lg:mx-0 mt-10 max-w-xl text-lg italic leading-relaxed text-white/70 font-[var(--font-cormorant)]">
    &ldquo;I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there&apos;s a place for you here! <br/><br/>
    I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me.&rdquo;
  </p>

</motion.div>

  </section>);
}
