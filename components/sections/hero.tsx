import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-neutral-950 text-center text-white">
      <video className="absolute inset-0 -z-20 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/videos/Video_hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-black/60" aria-hidden="true" />
      <div className="mx-auto max-w-4xl px-6 pt-24">
        <p className="font-dm text-lg sm:text-2xl">{siteContent.hero.eyebrow}</p>
        <h1 id="hero-title" className="mt-5 font-montserrat text-5xl font-light tracking-[.04em] sm:text-7xl lg:text-[5.3rem]">{siteContent.hero.title}</h1>
        <div className="mx-auto mt-8 h-px max-w-xl bg-white/70" />
        <p className="mx-auto mt-7 max-w-lg text-base text-neutral-200 sm:text-xl">{siteContent.hero.description}</p>
      </div>
    </section>
  );
}
