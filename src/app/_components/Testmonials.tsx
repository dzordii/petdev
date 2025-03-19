"use client";

import useEmblaCarousel from "embla-carousel-react";
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import tutor3 from "../../../public/tutor3.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testmonials = [
  {
    content:
      "Desde que conheci a lavar a Luna na PetLove, ela nunca mais quis saber de outro lugar. O atendimento é excelente e o carinho com os animais é visível.",
    author: "Maria Silva",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor2,
  },
  {
    content:
      "Ótimo atendimento, profissionais qualificados e muito carinho com os animais. Recomendo a PetLove para todos os tutores que querem o melhor para seus pets.",
    author: "João Oliveira",
    role: "Tutor do Thor (Labrador)",
    image: tutor1,
  },
  {
    content:
      "A PetLove é a melhor clínica veterinária que já conheci. O atendimento é excelente, os profissionais são muito atenciosos e o ambiente é muito agradável.",
    author: "Ana Souza",
    role: "Tutora da Mel (Poodle)",
    image: tutor3,
  },
];

useEmblaCarousel.globalOptions = { loop: true };

export function Testmonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-amber-400 py-16 lg:px-14">
      <div className="container mx-auto px-5">
        <div>
          <h2
            className="font-lg mb-12 text-center text-4xl font-bold"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
          >
            Depoimentos
          </h2>

          <div className="relative mx-auto max-w-4xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div
                className="flex"
                data-aos="fade-left"
                data-aos-easing="ease-in-sine"
              >
                {testmonials.map((item, index) => (
                  <div key={index} className="min-w-0 flex-[0_0_100%] px-3">
                    <article className="flex h-full flex-col space-y-4 rounded-2xl bg-gray-900 p-6 text-white">
                      <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="relative h-24 w-24">
                          <Image
                            src={item.image}
                            alt={item.author}
                            fill
                            sizes="96px"
                            quality={100}
                            className="rounded-full object-cover"
                            priority
                          />
                        </div>
                        <p className="px-4 text-gray-200">{item.content}</p>
                        <div>
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm text-gray-400">{item.role}</p>
                        </div>
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
