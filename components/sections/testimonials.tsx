import { Skiper49 } from "@/components/ui/skiper49";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { siteContent } from "@/content/site";

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-white py-24 sm:py-32">
      <h2 id="testimonials-title" className="sr-only">Depoimentos de clientes</h2>
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <TextGradientScroll text={siteContent.testimonials} type="word" className="justify-center text-center text-3xl font-medium leading-tight sm:text-5xl" />
      </div>
      <div className="mt-16"><Skiper49 /></div>
    </section>
  );
}
