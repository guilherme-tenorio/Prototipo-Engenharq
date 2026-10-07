"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EffectCoverflow, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  { src: "/images/Depoimento1.webp", alt: "Cliente da EngenhArq celebrando a conquista do imóvel próprio" },
  { src: "/images/Depoimento2.webp", alt: "Família cliente da EngenhArq durante a entrega de seu imóvel" },
  { src: "/images/Depoimento3.webp", alt: "Clientes da EngenhArq comemorando um novo lar" },
];

export function Skiper49() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-12">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, A11y]}
        effect="coverflow" centeredSlides slidesPerView="auto" loop pagination={{ clickable: true }}
        navigation={{ nextEl: ".testimonials-next", prevEl: ".testimonials-prev" }}
        coverflowEffect={{ rotate: 8, stretch: 10, depth: 140, modifier: 1, slideShadows: false }}
        className="testimonials-carousel !pb-14"
      >
        {images.map((image) => (
          <SwiperSlide key={image.src} className="!h-[360px] !w-[280px] sm:!h-[440px] sm:!w-[350px]">
            <div className="relative h-full overflow-hidden rounded-2xl bg-neutral-200 shadow-xl">
              <Image src={image.src} alt={image.alt} fill sizes="350px" className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button aria-label="Depoimento anterior" className="testimonials-prev absolute bottom-0 left-[calc(50%-3.25rem)] z-10 grid size-11 place-items-center rounded-full border border-neutral-700 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><ChevronLeft aria-hidden="true" /></button>
      <button aria-label="Próximo depoimento" className="testimonials-next absolute bottom-0 right-[calc(50%-3.25rem)] z-10 grid size-11 place-items-center rounded-full border border-neutral-700 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"><ChevronRight aria-hidden="true" /></button>
    </div>
  );
}
