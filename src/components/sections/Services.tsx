"use client";

import { motion } from "motion/react";

const services = [
  {
    num: "01",
    title: "Buying",
    desc: "Finding the perfect property requires patience, market insight, and aggressive negotiation. We guide you from initial search to closing.",
  },
  {
    num: "02",
    title: "Selling",
    desc: "Targeted marketing, professional staging, and strategic pricing ensure your property commands the highest possible value in the current market.",
  },
  {
    num: "03",
    title: "Expertise",
    desc: "Nearly thirty years of industry experience translates to a seamless, stress-free transaction, whether navigating complex contracts or unique properties.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] border-y border-white/5 py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-24 md:mb-32">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/50 mb-4">
            Our Offerings
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-white font-medium tracking-tight">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: idx * 0.15, ease: "easeOut" }}
              className="flex flex-col group"
            >
              <div className="flex items-baseline gap-6 mb-8 border-b border-white/10 pb-6 transition-colors duration-500 group-hover:border-white/40">
                <span className="text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-500">
                  {service.num}
                </span>
                <h3 className="font-serif text-4xl text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed max-w-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
