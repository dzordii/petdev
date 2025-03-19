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
    containScroll: "trimSnaps",
    breakpoints: {
      "max-width: 768px": { slidesToScroll: 3 },
    },
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
            className="font-lg text-4xl font-bold mb-12"
            data-aos="fade-down"
            data-aos-easing="ease-in-sine"
          >
            Serviços
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div
                className="flex"
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
              >
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                  >
                    <article className="bg-gray-900 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                      <div className="flex-1 flex items-start justify-between">
                        <div className="flex gap-3">
                          <span className="text-3xl">{item.icon}</span>
                          <div>
                            <h3 className="font-bold text-xl mb-1 my-1">
                              {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm select-none">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{item.duration}</span>
                        </div>
                        <a
                          href=""
                          className="flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
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
              className=" bg-white flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              className=" bg-white flex items-center justify-center rounded-full shadow-lg h-10 w-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
