export function ContactCta() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="scroll-mt-24 bg-brand py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div><h2 id="contact-title" className="text-3xl font-semibold">Seu sonho da casa própria</h2><p className="mt-2 text-red-50">Nossa equipe está pronta para tirar suas dúvidas e te ajudar a dar o próximo passo.</p></div>
        <a href="mailto:contato@engenharq.com.br" className="inline-flex min-h-12 w-fit items-center rounded-md bg-white px-6 font-semibold text-brand hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Fale conosco →</a>
      </div>
    </section>
  );
}
