import Image from "next/image";

export function Footer() {
  return (
    <footer id="blog" className="bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-12 border-b border-white/20 pb-12 md:grid-cols-[1.3fr_2fr]">
          <div><div className="relative h-20 w-56"><Image src="/images/Logo_nome.webp" alt="EngenhArq" fill sizes="224px" className="object-contain object-left brightness-0 invert" /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">Construindo sonhos e novos começos em Alagoas.</p><p className="mt-3 text-sm text-neutral-400">Maceió • AL</p></div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div><h2 className="font-semibold">Empreendimentos</h2><ul className="mt-4 space-y-3 text-sm text-neutral-400"><li>Jardim das Figueiras</li><li>Jardim dos Jequitibás</li><li>Jardim das Laranjeiras</li></ul></div>
            <div><h2 className="font-semibold">Atendimento</h2><ul className="mt-4 space-y-3 text-sm text-neutral-400"><li><a href="#contato">Área do cliente</a></li><li><a href="#contato">Área do corretor</a></li><li><a href="#contato">Fale conosco</a></li></ul></div>
            <div><h2 className="font-semibold">Engenharq</h2><ul className="mt-4 space-y-3 text-sm text-neutral-400"><li><a href="#sobre">Sobre nós</a></li><li><a href="#blog">Blog</a></li><li>Política de privacidade</li></ul></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-neutral-300 sm:flex-row sm:justify-between"><p>© 2026 Engenharq. Todos os direitos reservados.</p><p>Instagram &nbsp; Facebook &nbsp; LinkedIn</p></div>
      </div>
    </footer>
  );
}
