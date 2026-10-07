import { Scroll01 } from "@/components/ui/scroll-01";
import { siteContent } from "@/content/site";

export function Story() {
  return (
    <section id="sobre" aria-labelledby="story-heading" className="scroll-mt-24 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <p className="mb-12 max-w-3xl text-xl leading-relaxed text-neutral-700 sm:text-2xl">{siteContent.history.intro}</p>
        <Scroll01 items={[{ title: siteContent.history.title, description: siteContent.history.paragraphs.join(" "), media: "/images/Equipe_engenharq.webp", alt: "Equipe da EngenhArq reunida" }]} />
        <div className="mt-12 text-center"><a href="#numeros" className="inline-flex min-h-12 items-center rounded-md bg-brand px-6 font-semibold text-white hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700">Conheça a EngenhArq →</a></div>
      </div>
    </section>
  );
}
