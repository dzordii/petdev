"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Inclui banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa higienica.",
    duration: "2h",
    price: "R$ 50,00",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Vacinação",
    description:
      "Vacinas importadas e nacionais, aplicadas por profissionais capacitados e com todo cuidado que seu pet merece.",
    duration: "1h",
    price: "R$ 40,00",
    icon: <Syringe />,
    linkText: "Olá, vi no site sobre vacinação e gostaria de mais informações.",
  },
  {
    title: "Taxi Dog",
    description:
      "Serviço de transporte para levar seu pet até a clínica veterinária, pet shop ou qualquer outro lugar que desejar.",
    duration: "1h",
    price: "R$ 30,00",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre taxi dog e gostaria de mais informações.",
  },
  {
    title: "Hotel para Pets",
    description:
      "Hospedagem para cães e gatos com muito conforto e segurança, com espaço para brincadeiras e alimentação balanceada.",
    duration: "1 dia",
    price: "R$ 80,00",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre hotel para pets e gostaria de mais informações.",
  },
];

useEmblaCarousel.globalOptions = { loop: true };

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    duration: 50,
    loop: false,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white pt-0 pb-16 lg:px-14">
      <div className="container mx-auto px-5">
        <div>
          <h2
            className="font-lg mb-12 text-4xl font-bold"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
          >
            Serviços
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_calc(100%/3)]"
                    data-aos="fade-down"
                    data-aos-easing="ease-in-sine"
                  >
                    <article className="flex h-full flex-col space-y-4 rounded-2xl bg-gray-900 p-6 text-white">
                      <div className="flex flex-1 items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="my-1 mb-1 text-xl font-bold select-none">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-100 select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-gray-100" />
                          <span className="select-none">{item.duration}</span>
                        </div>
                        <a
                          href=""
                          className="hover:bg-bg flex items-center justify-center gap-2 rounded-md px-4 py-1 duration-300"
                        >
                          <WhatsappLogo className="h-5 w-5" />
                          Entrar em Contato
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              className="absolute top-1/2 -right-6 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
