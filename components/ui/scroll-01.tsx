"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Scroll01Item = { title: string; description: string; media: string; alt?: string };

export function Scroll01({ items }: { items: Scroll01Item[] }) {
  const reduce = useReducedMotion();
  const item = items[0];
  if (!item) return null;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative aspect-[4/3] overflow-hidden rounded-r-[3rem] lg:-ml-[max(1.5rem,calc((100vw-80rem)/2))]"
      >
        <Image src={item.media} alt={item.alt ?? item.title} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" aria-hidden="true" />
      </motion.div>
      <div>
        <h2 className="text-balance text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.65rem]">{item.title}</h2>
        <p className="mt-8 text-lg leading-relaxed text-neutral-700 sm:text-xl">{item.description}</p>
      </div>
    </div>
  );
}
