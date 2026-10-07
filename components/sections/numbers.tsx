import Image from "next/image";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { siteContent } from "@/content/site";

export function Numbers() {
  return (
    <section id="numeros" aria-labelledby="numbers-title" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <p className="text-sm font-semibold tracking-[.16em] text-brand">ENGENHARQ EM NÚMEROS</p>
        <h2 id="numbers-title" className="mt-4 max-w-3xl text-4xl font-medium leading-tight sm:text-6xl">Uma história construída<br />com confiança.</h2>
        <dl className="mt-16 grid grid-cols-2 gap-y-10 divide-neutral-300 lg:grid-cols-4 lg:divide-x">
          {siteContent.numbers.map((item) => <div key={item.label} className="text-center"><dt className="text-sm text-neutral-700 sm:text-base">{item.label}</dt><dd className="mb-3 text-4xl font-medium tracking-tight sm:text-6xl">{item.value}</dd></div>)}
        </dl>
        <div className="mx-auto mt-28 max-w-5xl">
          <TextGradientScroll text={siteContent.certification} className="justify-center text-center text-3xl leading-tight sm:text-5xl" />
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-12 sm:gap-24">
          <div className="relative h-24 w-72"><Image src="/images/Certificado_pbqph.webp" alt="Certificação PBQP-H da EngenhArq" fill sizes="288px" className="object-contain" /></div>
          <div className="relative size-32"><Image src="/images/Certificado_iso9001.webp" alt="Certificação ISO 9001 da EngenhArq" fill sizes="128px" className="object-contain" /></div>
        </div>
      </div>
    </section>
  );
}
