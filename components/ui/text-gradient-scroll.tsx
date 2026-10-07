"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

function AnimatedWord({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span aria-hidden="true" style={{ opacity }} className="mr-[0.28em]">{children}</motion.span>;
}

export function TextGradientScroll({ text, className }: { text: string; type?: "word" | "letter"; className?: string; textOpacity?: "none" | "soft" | "medium" }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 82%", "end 45%"] });
  const words = text.split(" ");

  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} aria-label={text} className={cn("flex flex-wrap", className)}>
      {words.map((word, index) => (
        <AnimatedWord key={`${word}-${index}`} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]}>
          {word}
        </AnimatedWord>
      ))}
    </p>
  );
}
