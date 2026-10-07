"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-neutral-950/80 text-white backdrop-blur-xl">
      <nav aria-label="Navegação principal" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="EngenhArq — início" className="relative h-12 w-32 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
          <Image src="/images/Logo_nome.webp" alt="EngenhArq" fill sizes="128px" className="object-contain object-left brightness-0 invert" priority />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {siteContent.nav.map((item) => <a key={item.href} href={item.href} className="min-h-11 content-center text-sm hover:text-red-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{item.label}</a>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contato" className="inline-flex min-h-11 items-center rounded-md border border-white px-5 text-sm font-medium hover:bg-white hover:text-black">Área Corretor</a>
          <a href="#contato" className="inline-flex min-h-11 items-center rounded-md bg-white px-5 text-sm font-medium text-neutral-950 hover:bg-red-50">Fale conosco</a>
        </div>
        <button type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-md border border-white/30 lg:hidden">
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/15 bg-neutral-950 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {siteContent.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-white/10">{item.label}</a>)}
            <a href="#contato" onClick={() => setOpen(false)} className="mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-white font-medium text-black">Fale conosco</a>
          </div>
        </div>
      )}
    </header>
  );
}
