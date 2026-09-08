"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
export function MarciIntro() {
  return (
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
    About
  </p>

  <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white">
    Marci J. Metzger
  </h2>

  <p className="mt-2 text-sm text-white/60">
    Realtor for nearly three decades
  </p>

  <p className="mx-auto mt-6 max-w-xl text-[16px] leading-7 text-white/70">
    Marci was a REALTOR, then licensed Broker, in Washington State.
    Now, she is enjoying the sunshine, and helping clients in Southern
    Nevada. Having helped buyers and sellers in many markets since
    1995, she is a wealth of knowledge.
  </p>

  <div className="mx-auto mt-6 w-48">
    <Separator />
  </div>

  <p className="mx-auto mt-6 max-w-xl text-[16px] italic leading-7 text-white/70">
    &ldquo;I love that small-town feeling that our community offers. Spectacular golf courses, parks, pool, and easy access to Las Vegas make Pahrump a great place to call home. Working or retired, fast-paced or looking to relax... there&apos;s a place for you here! <br></br>
I enjoy living in the Mountain Falls community and will strive to find you a home that will suit you just as this community does me. &ldquo;
  </p>

</div>
</motion.div>

  </section>);
}
