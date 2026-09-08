"use client";

import { motion } from "motion/react";

const stats = [
  { id: 1, value: "90+", label: "Clients Helped in 2021" },
  { id: 2, value: "$28.5M", label: "Sales Volume" },
  { id: 3, value: "~30", label: "Years Experience" },
];

export function Stats() {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/5 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 text-center md:grid-cols-3 md:gap-x-8 md:gap-y-0 divide-y divide-white/5 md:divide-y-0 md:divide-x">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="flex flex-col items-center justify-center pt-10 md:pt-0"
            >
              <div className="font-serif text-6xl md:text-7xl lg:text-8xl text-white font-light tracking-tighter mb-4">
                {stat.value}
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/40">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
