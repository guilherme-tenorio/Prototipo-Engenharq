import { Navbar } from "@/components/navbar";
import { ContactCta } from "@/components/sections/contact-cta";
import { Developments } from "@/components/sections/developments";
import { Hero } from "@/components/sections/hero";
import { Numbers } from "@/components/sections/numbers";
import { Story } from "@/components/sections/story";
import { Testimonials } from "@/components/sections/testimonials";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { Footer } from "@/components/footer";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded bg-white px-4 py-3 font-semibold text-black shadow focus:translate-y-0">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <section aria-label="Compromisso EngenhArq" className="bg-white py-28 sm:py-40"><div className="mx-auto max-w-5xl px-6 sm:px-8"><TextGradientScroll text={siteContent.manifesto} className="justify-center text-center text-3xl leading-tight sm:text-5xl" /></div></section>
        <Story />
        <section aria-hidden="true" className="relative h-[45vh] overflow-hidden bg-neutral-900"><video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none"><source src="/videos/Video_transicao_home.mp4" type="video/mp4" /></video></section>
        <Developments />
        <Testimonials />
        <section aria-hidden="true" className="relative h-[42vh] overflow-hidden bg-neutral-900"><video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none"><source src="/videos/Video_transicao_home2.mp4" type="video/mp4" /></video></section>
        <Numbers />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
