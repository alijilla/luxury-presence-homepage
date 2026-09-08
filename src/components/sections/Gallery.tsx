"use client";

import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    src: "/marci.jpg",
    alt: "Pahrump Nevada landscape",
  },
  {
    src: "/marci.jpg",
    alt: "Pahrump Nevada",
  },
  {
    src: "/marci.jpg",
    alt: "Pahrump property",
  },
  {
    src: "/marci.jpg",
    alt: "Pahrump community",
  },
  {
    src: "/marci.jpg",
    alt: "Nevada desert landscape",
  },
  {
    src: "/marci.jpg",
    alt: "Pahrump home",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white/20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            Gallery
          </p>

          <h2 className="mt-4 font-[var(--font-cormorant)] text-5xl text-white md:text-6xl">
            Life in Pahrump
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/60">
            Discover the landscapes, homes, and community that make
            Pahrump a special place to call home.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-4">

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative h-[450px] overflow-hidden"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
          </motion.div>

          {/* Smaller images */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">

            {images.slice(1).map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative h-[220px] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}