import Image from "next/image";
import { siteContent } from "@/content/site";

export function Developments() {
  return (
    <section id="empreendimentos" aria-labelledby="developments-title" className="scroll-mt-24 bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 id="developments-title" className="text-4xl font-medium sm:text-5xl">Conheça Nossos Empreendimentos</h2>
          <a href="#empreendimentos" className="inline-flex min-h-11 w-fit items-center rounded border border-neutral-900 px-5 text-sm font-medium hover:bg-neutral-900 hover:text-white">Ver todos os Empreendimentos</a>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {siteContent.developments.map((item) => (
            <article key={item.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200">
                <Image src={item.image} alt={`Vista do empreendimento ${item.name}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-2 text-xs font-semibold text-neutral-900">{item.status}</span>
              </div>
              <h3 className="mt-6 text-2xl font-medium">{item.name}</h3>
              <p className="mt-3 leading-relaxed text-neutral-700">{item.location}<br />{item.rooms}<br />{item.area}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
